float sdTorus( vec3 p, vec2 t )
{
  vec2 q = vec2(length(p.xz)-t.x,p.y);
  return length(q)-t.y;
}

vec3 rotateAroundAxis(vec3 p, vec3 axis, float angle) {
    vec3 u = normalize(axis);
    float s = sin(angle), c = cos(angle);
    return p * c + cross(u, p) * s + u * dot(u, p) * (1.0 - c);
}

float fastatan2(float y, float x)
{ 
    const float c0 = 1.0584;
    const  float c1 = 0.273;    
    const float d0 = c0 / 3.14159265;
    const float d1 = c1 / 3.14159265;   
    vec2 v = vec2(x, y);
    bool a = abs(v.y) < abs(v.x);
    v = a ? v.yx : v.xy;
    float t = abs(v.x / v.y); 
    t = fract(t * 0.01) * 100.0;
    float f = t * (c0 - c1 * t);
    f = x > 0.0 ? f : -f;        
    f = a ? (x < 0.0 ? 3.14159265 + f : f) : (3.14159265*0.5) - f;
    f = y > 0.0 ? f : -f;     
    return f;
} 

void mainImage(out vec4 O, vec2 vpos)
{
    vec2 uv = vpos / iResolution.xy;
    
    float t = iTime * 0.5;
    float z;
    float d;
    float s;

    
    O = vec4(0);
    vec3 rd = normalize(vec3(2.0 * vpos,0)-iResolution.xyy);   
    rd = rotateAroundAxis(rd, vec3(0,0,1), t);   
    
    
    vec3 ro = vec3(rd.xy, 5.0);   
    
    vec4 scale = vec4(1.0, 2.0, 4.0, 8.0);
    vec4 invscale = 0.1f/scale;
    
    for(float i = 0.0; i <60.0; ++i)     
    {
        vec3 p = ro + z*rd;      
   
        vec3 axis = cos(vec3(1.619,0.619,1) * t - d);         
        vec3 rot = rotateAroundAxis(p, axis, 0.4*1.57);
        
        rot-=sin(rot*scale.x + t).zxy*invscale.x;
        rot-=sin(rot*scale.y + t).zxy*invscale.y;
        rot-=sin(rot*scale.z + t).zxy*invscale.z;
        rot-=sin(rot*scale.w + t).zxy*invscale.w; 

        d = abs(sdTorus(rot.xzy, vec2(3.0, 0.5)));        
        d *= 0.07;
        z += d;       
        
        float ang = fastatan2(rot.x, rot.y);        
        O.rgb += (cos(ang + vec3(0,2,4))* 0.5 + 0.5) / (d+1e-3);        
        d = length(rot);
    }
    
    O *= 0.001;
    O *= inversesqrt(1.0 + O * O);
    
    uvec2 umagic = uvec2(3242174889u, 2447445413u);    
    uvec3 ret = uvec3(uint(vpos.x) * umagic.x + uint(vpos.y) * umagic.y);
    ret.y += (umagic.x + umagic.y) * 3u;
    ret.z += (umagic.x + umagic.y) * 7u;
    O.rgb += (vec3(ret) * exp2(-32.0) - 0.5) / 255.0f;
    O = clamp(O, 0., 1.);
}