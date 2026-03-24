float sdTorus(vec3 p, vec2 t) {
    vec2 q = vec2(length(p.xz) - t.x, p.y);
    return length(q) - t.y;
}

vec3 rotateAroundAxis(vec3 p, vec3 axis, float angle) {
    axis = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;
    mat3 m = mat3(
        oc * axis.x * axis.x + c,
        oc * axis.x * axis.y - axis.z * s,
        oc * axis.z * axis.x + axis.y * s,
        oc * axis.x * axis.y + axis.z * s,
        oc * axis.y * axis.y + c,
        oc * axis.y * axis.z - axis.x * s,
        oc * axis.z * axis.x - axis.y * s,
        oc * axis.y * axis.z + axis.x * s,
        oc * axis.z * axis.z + c
    );
    return m * p;
}

void mainImage(out vec4 O, vec2 vpos)
{
    vec2 uv = vpos / iResolution.xy;
    
    
    //Animation time
    float t = iTime * 0.5;
    //Raymarch depth
    float z;
    //Step distance
    float d;
    //Signed distance
    float s;
 
    
    O = vec4(0);
    vec3 rd = normalize(vec3(2.0 * vpos,0)-iResolution.xyy);   
    rd = rotateAroundAxis(rd, vec3(0,0,1), t);   
    
    
    vec3 ro = vec3(rd.xy, 5.0);   
    
    vec4 scale = vec4(1.0, 2.0, 4.0, 8.0);
    
    for(float i = 0.0; i < 60.0; ++i)     
    {
        vec3 p = ro + z*rd;      
   
        //Rotation axis
        vec3 axis = normalize(cos(vec3(1.619,0.619,1) * t - d));            
       
        vec3 rot = rotateAroundAxis(p, axis, 0.4*1.57);
        
        //Turbulence loop
        rot-=sin(rot*scale.x + t).zxy/scale.x*0.1;
        rot-=sin(rot*scale.y + t).zxy/scale.y*0.1;
        rot-=sin(rot*scale.z + t).zxy/scale.z*0.1;
        rot-=sin(rot*scale.w + t).zxy/scale.w*0.1; 

        d = abs(sdTorus(rot.xzy, vec2(3.0, 0.5)));        
        d *= 0.07;
        z += d;       
        
        float ang = atan(rot.x, rot.y);        
        O.rgb += (cos(ang + vec3(0,2,4))* 0.5 + 0.5)/d;        
        d = length(rot);
    }
    
    O *= 0.001;
    
 
    
    O *= inversesqrt(1.0 + O * O);
    
  
    //O *= 1.05;
    //Tanh tonemap
    //O = tanh(O);

uvec2 umagic = uvec2(3242174889u, 2447445413u);    
    uvec3 ret = uvec3(uint(vpos.x) * umagic.x + uint(vpos.y) * umagic.y);
    ret.y += (umagic.x + umagic.y) * 3u;
    ret.z += (umagic.x + umagic.y) * 7u;
    O.rgb += (vec3(ret) * exp2(-32.0) - 0.5) / 255.0f;
    O = clamp(O, 0., 1.);

}