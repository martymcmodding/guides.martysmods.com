uniform vec4 iMouse;

float hash21(vec2 p){
  vec3 p3 = fract(vec3(p.xyx)*0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y)*p3.z);
}

void mainImage(out vec4 O, vec2 vpos){
  vec3 ACCENT_A = vec3(0.0, 0.6, 0.98);   // brand blue  #0099fa
  vec3 ACCENT_B = vec3(0.976, 0.0, 0.796); // brand pink  #f900cb
  vec2 R = iResolution.xy;
  vec2 p = (vpos - 0.5*R)/R.y;
  float t = iTime*0.12;
  vec2 m = (iMouse.xy - 0.5*R)/R.y;
  vec2 q = p;
  q += 0.30*vec2(sin(q.y*2.3 + t*2.0), cos(q.x*2.1 - t*1.7));
  q += 0.18*vec2(sin(q.y*4.7 - t*1.3 + m.x*1.2), cos(q.x*4.3 + t*1.9 + m.y*1.2));
  q += 0.09*vec2(sin(q.y*9.0 + t*2.4), cos(q.x*8.4 - t*2.1));
  float band  = 0.5 + 0.5*sin(q.x*2.2 + q.y*0.8 + t*1.2);
  float band2 = 0.5 + 0.5*sin(q.x*3.7 - q.y*1.3 - t*0.9);
  float h = mix(band, band2, 0.5);
  float curtain = smoothstep(1.05, 0.0, abs(p.y*1.1));
  vec3 col = mix(ACCENT_A, ACCENT_B, h);
  col *= pow(h, 1.5)*curtain;
  float mg = 0.05/(0.05 + dot(p-m, p-m));
  col += mix(ACCENT_A, ACCENT_B, 0.5)*mg*0.12;
  col += vec3(0.03, 0.035, 0.05);
  col *= 1.0 - 0.4*dot(p, p);
  col += (hash21(vpos + t) - 0.5)/255.0;
  O = vec4(clamp(col, 0.0, 1.0), 1.0);
}
