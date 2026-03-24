import React, { useEffect, useRef } from 'react';

const DEFAULT_VERTEX_SHADER = `#version 300 es
in vec2 a_position;
out vec2 v_uv;

void main() {
  v_uv = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

function createShader(gl, type, source) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const message = gl.getShaderInfoLog(shader) || 'Unknown shader compile error';
    gl.deleteShader(shader);
    throw new Error(message);
  }
  return shader;
}

function createProgram(gl, vertexSource, fragmentSource) {
  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexSource);
  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentSource);
  if (!vertexShader || !fragmentShader) {
    throw new Error('Unable to create shader objects.');
  }

  const program = gl.createProgram();
  if (!program) throw new Error('Unable to create WebGL program.');

  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const message = gl.getProgramInfoLog(program) || 'Unknown program link error';
    gl.deleteProgram(program);
    throw new Error(message);
  }

  gl.deleteShader(vertexShader);
  gl.deleteShader(fragmentShader);
  return program;
}

export default function HeroShaderCanvas({ className, fragmentShaderUrl }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    let gl = null;
    let animationFrameId = null;
    let program = null;
    let positionBuffer = null;
    let running = true;
    const start = performance.now();
    const frameIntervalMs = 1000 / 30;
    let lastFrameTime = 0;

    const cleanup = () => {
      running = false;
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (gl && positionBuffer) gl.deleteBuffer(positionBuffer);
      if (gl && program) gl.deleteProgram(program);
    };

    const render = (timestamp) => {
      if (!gl || !program || !running) return;
      if (lastFrameTime && timestamp - lastFrameTime < frameIntervalMs) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }
      lastFrameTime = timestamp;

      const dpr = Math.max(1, window.devicePixelRatio || 1);
      const width = Math.floor(canvas.clientWidth * dpr);
      const height = Math.floor(canvas.clientHeight * dpr);

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
      }

      const timeUniform = gl.getUniformLocation(program, 'u_time');
      const resolutionUniform = gl.getUniformLocation(program, 'u_resolution');
      const iTimeUniform = gl.getUniformLocation(program, 'iTime');
      const iResolutionUniform = gl.getUniformLocation(program, 'iResolution');
      const elapsed = (timestamp - start) / 1000;

      if (timeUniform) gl.uniform1f(timeUniform, elapsed);
      if (resolutionUniform) gl.uniform2f(resolutionUniform, width, height);
      if (iTimeUniform) gl.uniform1f(iTimeUniform, elapsed);
      if (iResolutionUniform) gl.uniform3f(iResolutionUniform, width, height, 1.0);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationFrameId = requestAnimationFrame(render);
    };

    const init = async () => {
      try {
        const response = await fetch(fragmentShaderUrl, { cache: 'no-cache' });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        let fragmentShaderSource = await response.text();
        if (!running) return;

        const hasVersion = /^\s*#version\s+\d+\s+\w+/m.test(fragmentShaderSource);
        const hasMainImage = /void\s+mainImage\s*\(/.test(fragmentShaderSource);
        const hasMain = /void\s+main\s*\(/.test(fragmentShaderSource);
        const hasPrecision = /precision\s+(lowp|mediump|highp)\s+float\s*;/.test(fragmentShaderSource);
        const hasITime = /\biTime\b/.test(fragmentShaderSource);
        const hasIResolution = /\biResolution\b/.test(fragmentShaderSource);
        const hasVaryingUv = /\bv_uv\b/.test(fragmentShaderSource);
        const needsVaryingUv = hasVaryingUv || (hasMainImage && !hasMain);

        const prelude = [
          hasVersion ? '' : '#version 300 es',
          hasPrecision ? '' : 'precision mediump float;',
          hasITime ? 'uniform float iTime;' : '',
          hasIResolution ? 'uniform vec3 iResolution;' : '',
          needsVaryingUv ? 'in vec2 v_uv;' : ''
        ]
          .filter(Boolean)
          .join('\n');

        if (hasMainImage && !hasMain) {
          fragmentShaderSource = `${prelude}\n${fragmentShaderSource}\nout vec4 fragColor;\nvoid main(){ vec4 color = vec4(0.0); mainImage(color, v_uv * iResolution.xy); fragColor = color; }`;
        } else if (prelude) {
          fragmentShaderSource = `${prelude}\n${fragmentShaderSource}`;
        }

        gl = canvas.getContext('webgl2', { antialias: true, alpha: true });
        if (!gl) throw new Error('WebGL2 is required (GLSL ES 3.00).');

        program = createProgram(gl, DEFAULT_VERTEX_SHADER, fragmentShaderSource);
        gl.useProgram(program);

        positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.bufferData(
          gl.ARRAY_BUFFER,
          new Float32Array([
            -1, -1,
             1, -1,
            -1,  1,
            -1,  1,
             1, -1,
             1,  1
          ]),
          gl.STATIC_DRAW
        );

        const positionLocation = gl.getAttribLocation(program, 'a_position');
        gl.enableVertexAttribArray(positionLocation);
        gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

        render();
      } catch (error) {
        console.error('Hero shader failed to initialize:', error);
      }
    };

    init();
    return cleanup;
  }, [fragmentShaderUrl]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
