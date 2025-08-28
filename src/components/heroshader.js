import React, { useEffect } from 'react';
import styles from '../pages/index.module.css';

export default function HeroShader() {
  useEffect(() => {
    const canvas = document.getElementById('xmbShader');
    if (!canvas) return;
    
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return;
    
    let resolutionLocation;
    let aspectRatioLocation;
    
    const resizeCanvas = () => {
      const heroSection = canvas.closest('section');
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        const devicePixelRatio = window.devicePixelRatio || 1;
        const displayWidth = Math.floor(rect.width * devicePixelRatio);
        const displayHeight = Math.floor(rect.height * devicePixelRatio);
        
        canvas.width = displayWidth;
        canvas.height = displayHeight;
        canvas.style.width = rect.width + 'px';
        canvas.style.height = rect.height + 'px';
        
        gl.viewport(0, 0, displayWidth, displayHeight);
        
        if (resolutionLocation) {
          gl.uniform2f(resolutionLocation, displayWidth, displayHeight);
        }
        if (aspectRatioLocation) {
          gl.uniform1f(aspectRatioLocation, rect.width / rect.height);
        }
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        gl.viewport(0, 0, canvas.width, canvas.height);
      }
    };
    
    const eventHandlers = ['resize', 'wheel', 'gesturestart', 'gesturechange', 'gestureend'];
    eventHandlers.forEach(event => window.addEventListener(event, resizeCanvas));
    
    resizeCanvas();
    
    const vertexShaderSource = `
      attribute vec2 a_position;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;
    
    const fragmentShaderSource = `
      precision mediump float;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform float u_aspectRatio;
      
      float noise(vec2 p) {
        return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
      }
      
      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        vec2 p = (2.0 * uv) - 1.0;
        p.x *= u_resolution.x / u_resolution.y;
        
        float time = u_time * 0.3;
        vec3 bgColor = mix(vec3(0.0, 0.0, 0.0), vec3(0.02, 0.08, 0.12), uv.y);
        
        float ribbons = 0.0;
        for (int i = 0; i < 4; i++) {
          float layer = float(i);
          float spacing = 0.12;
          float yOffset = (layer - 1.5) * spacing;
          
          float wave = sin(p.x * 4.0 + time * 1.6 + layer * 0.7) * 0.05;
          wave += sin(p.x * 8.0 + time * 2.4 + layer * 1.3) * 0.02;
          wave += sin(p.x * 2.0 + time * 1.2 + layer * 0.4) * 0.03;
          
          float ribbonX = p.x + sin(time * 0.6 + layer * 0.5) * 0.1;
          float ribbonY = yOffset + wave;
          float dist = abs(p.y - ribbonY);
          
          float thickness = 0.12;
          float glow = 0.18;
          float core = smoothstep(thickness, 0.0, dist);
          float glowEffect = smoothstep(glow, 0.0, dist);
          float intensity = 0.4 + 0.3 * sin(time * 0.8 + layer * 0.8);
          
          ribbons = max(ribbons, (core + glowEffect * 0.2) * intensity);
        }
        
        for (int i = 0; i < 2; i++) {
          float layer = float(i);
          float yOffset = (layer - 0.5) * 0.15;
          float wave = sin(p.x * 6.0 + time * 1.8 + layer * 0.9) * 0.04;
          float ribbonX = p.x + sin(time * 0.8 + layer * 0.7) * 0.08;
          float ribbonY = yOffset + wave;
          float dist = abs(p.y - ribbonY);
          
          float thickness = 0.08;
          float glow = 0.12;
          float core = smoothstep(thickness, 0.0, dist);
          float glowEffect = smoothstep(glow, 0.0, dist);
          
          ribbons = max(ribbons, (core + glowEffect * 0.15) * 0.3);
        }
        
        float particles = 0.0;
        for (int i = 0; i < 600; i++) {
          float seed = float(i) * 0.1;
          vec2 pos = vec2(
            fract(sin(seed * 12.34) * 45.67),
            fract(sin(seed * 23.45) * 67.89)
          );
          
          vec2 movement = vec2(
            sin(time * 0.2 + seed * 3.14) * 0.1,
            cos(time * 0.15 + seed * 2.71) * 0.05
          );
          
          float horizontalDrift = time * 0.03 * (0.5 + sin(seed * 4.56) * 0.5);
          pos += movement;
          pos.x += horizontalDrift;
          
          vec2 particlePos = (pos * 2.0 - 1.0);
          particlePos.x *= 3.0 * u_aspectRatio;
          particlePos.y *= 3.0;
          
          float distFromCenter = length(particlePos);
          float horizontalBoundary = 3.0 * u_aspectRatio;
          float verticalBoundary = 3.0;
          float boundaryFade = 1.0 - smoothstep(horizontalBoundary * 0.7, horizontalBoundary, distFromCenter);
          
          if (distFromCenter < horizontalBoundary) {
            float dist = length(p - particlePos);
            float size = 0.016 + sin(seed * 7.89 + time * 0.8) * 0.008;
            float glow = 0.024;
            float particle = smoothstep(size, 0.0, dist);
            particle += smoothstep(glow, 0.0, dist) * 0.5;
            float brightness = 0.6 + 0.4 * sin(time * 0.6 + seed * 5.67);
            particles += particle * brightness * boundaryFade;
          }
        }
        
        float finalEffect = ribbons + particles * 0.3;
        finalEffect = clamp(finalEffect, 0.0, 0.8);
        
        vec3 ribbonColor = vec3(0.8, 0.85, 0.9);
        vec3 particleColor = vec3(1.0, 1.0, 1.0);
        vec3 finalColor = mix(bgColor, ribbonColor, ribbons);
        finalColor = mix(finalColor, particleColor, particles * 0.4);
        
        float alpha = finalEffect * 0.6;
        gl_FragColor = vec4(finalColor, alpha);
      }
    `;
    
    const createShader = (gl, type, source) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compilation error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };
    
    const createProgram = (gl, vertexShader, fragmentShader) => {
      const program = gl.createProgram();
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);
      
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error('Program linking error:', gl.getProgramInfoLog(program));
        return null;
      }
      return program;
    };
    
    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
    
    if (!vertexShader || !fragmentShader) return;
    
    const program = createProgram(gl, vertexShader, fragmentShader);
    if (!program) return;
    
    gl.useProgram(program);
    
    const positions = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
    
    const positionLocation = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
    
    const timeLocation = gl.getUniformLocation(program, 'u_time');
    resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
    aspectRatioLocation = gl.getUniformLocation(program, 'u_aspectRatio');
    
    gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
    gl.uniform1f(aspectRatioLocation, canvas.width / canvas.height);
    
    const animate = (currentTime) => {
      const time = currentTime * 0.001;
      gl.uniform1f(timeLocation, time);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      requestAnimationFrame(animate);
    };
    
    animate(0);
    
    return () => {
      eventHandlers.forEach(event => window.removeEventListener(event, resizeCanvas));
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      gl.deleteBuffer(positionBuffer);
    };
  }, []);
  
  return <canvas className={styles.shaderCanvas} id="xmbShader" />;
}