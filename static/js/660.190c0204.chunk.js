"use strict";(self.webpackChunksolyven_website=self.webpackChunksolyven_website||[]).push([[660],{2026:(e,t,n)=>{n.d(t,{Fe:()=>a,HD:()=>c,L0:()=>r,UC:()=>s,dG:()=>f,eM:()=>p,j_:()=>d,xv:()=>u,yX:()=>l});var o=n(1319),i=n(9);const r=(0,i.Ay)("div")`
  height: 100vh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;

  /* Oculta scrollbars en algunos navegadores */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }
`,a=(0,i.Ay)("section")`
  position: relative;
  min-height: 100vh;
  scroll-snap-align: start;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`,s=(0,i.Ay)("p")`
  margin: 1.5rem 0 2rem 0;
`,l=(0,i.Ay)(o.A)`
  flex-direction: ${e=>{let{direction:t}=e;return"left"===t?"row":"row-reverse"}};
`,c=(0,i.Ay)("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`,u=(0,i.Ay)("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`,d=(0,i.Ay)("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Montserrat Medium", sans-serif;
`,f=(0,i.Ay)("p")`
  font-size: 13px;
`,p=(0,i.Ay)("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`},9660:(e,t,n)=>{n.r(t),n.d(t,{default:()=>J});var o=n(5043);const i=JSON.parse('{"DD":"SEGURIDAD SOLYVEN","Qq":"Respuesta inmediata, tecnolog\xeda real, confianza garantizada","x6":[{"title":"Conoce m\xe1s"},{"title":"Contactanos ahora","color":"#fff"}]}'),r=JSON.parse('{"DD":"PROTECCI\xd3N REAL, CUANDO MAS LA NECESITAS","Qq":"Brindamos soluciones integrales en seguridad, vigilancia f\xedsica profesional, instalaci\xf3n y monitoreo de sistemas tecnol\xf3gicos, y venta de equipos con disponibilidad inmediata. Nuestro diferencial est\xe1 en el stock real y la respuesta r\xe1pida, asegurando que siempre cuentes con protecci\xf3n cuando m\xe1s lo necesit\xe1s.","x6":"Comencemos"}'),a=JSON.parse('{"DD":"Light, fast & responsive","Qq":"This template is ready to use, so you don\'t need to change anything at a component level, unless you want to customize the default styling.","uW":[{"title":"Why Antd?","content":"Ant Design is a React UI library that has a lot of easy-to-use components for building elegant UI.","icon":"notes.svg"},{"title":"Why styled-components?","content":"Styled Components gives you total control over your components.","icon":"notes.svg"}]}'),s=JSON.parse('{"D":"Ready made sections","Q":"Landy comes with a set of ready to use sections to help you easily create a landing page for your own brand, with all the content your startup desires. In order to replace any dummy elements (text, image, etc..) all you need to do is go to content folder and input your real content."}'),l=JSON.parse('{"D":"That\'s about it!","Q":"If you are familiar with React, or SPA frameworks in general, there shouldn\'t be any confusing parts about this template. if not, you can always reach out to me and I\'ll try me best to answer your questions."}'),c=JSON.parse('{"D":"Contact form","Q":"The following form demonstrates form validation in action. Contact form component reduces the amount of time it is being re-rendered by the user as it embraces uncontrolled form validation to reduce any unnecessary performance penalty."}');var u=n(2026),d=n(4755),f=n(2532),p=n(2769),m=n(5630),h=n(5611),g=n(579);function v(e){let{scale:t=1,gridMul:n=[2,1],digitSize:i=1.5,timeScale:r=.3,pause:a=!1,scanlineIntensity:s=.3,glitchAmount:l=1,flickerAmount:c=1,noiseAmp:u=0,chromaticAberration:v=0,dither:y=0,curvature:x=.2,tint:b="#ffffff",mouseReact:w=!0,mouseStrength:A=.2,dpr:C=Math.min(window.devicePixelRatio||1,2),pageLoadAnimation:M=!0,brightness:j=1,className:R,style:S,backgroundColor:k="#000000",...D}=e;const T=(0,o.useRef)(null),O=(0,o.useRef)(null),z=(0,o.useRef)(null),L=(0,o.useRef)({x:.5,y:.5}),I=(0,o.useRef)({x:.5,y:.5}),P=(0,o.useRef)(0),E=(0,o.useRef)(0),$=(0,o.useRef)(0),N=(0,o.useRef)(100*Math.random()),q=(0,o.useMemo)((()=>function(e){let t=e.replace("#","").trim();3===t.length&&(t=t.split("").map((e=>e+e)).join(""));const n=parseInt(t,16);return[(n>>16&255)/255,(n>>8&255)/255,(255&n)/255]}(b)),[b]),F=(0,o.useMemo)((()=>"boolean"===typeof y?y?1:0:y),[y]),_=(0,o.useCallback)((e=>{const t=T.current;if(!t)return;const n=t.getBoundingClientRect(),o=(e.clientX-n.left)/n.width,i=1-(e.clientY-n.top)/n.height;L.current={x:o,y:i}}),[]);return(0,o.useEffect)((()=>{const e=T.current;if(!e)return;const o=new d.A({dpr:C});z.current=o;const g=o.gl;const y=function(e){let t=e.replace("#","").trim();3===t.length&&(t=t.split("").map((e=>e+e)).join(""));const n=parseInt(t,16);return[(n>>16&255)/255,(n>>8&255)/255,(255&n)/255]}(k);g.clearColor(y[0],y[1],y[2],1);const b=new f.l(g),R=new p.B(g,{vertex:"\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUv;\nvoid main() {\n  vUv = uv;\n  gl_Position = vec4(position, 0.0, 1.0);\n}\n",fragment:"\nprecision mediump float;\n\nvarying vec2 vUv;\n\nuniform float iTime;\nuniform vec3  iResolution;\nuniform float uScale;\n\nuniform vec2  uGridMul;\nuniform float uDigitSize;\nuniform float uScanlineIntensity;\nuniform float uGlitchAmount;\nuniform float uFlickerAmount;\nuniform float uNoiseAmp;\nuniform float uChromaticAberration;\nuniform float uDither;\nuniform float uCurvature;\nuniform vec3  uTint;\nuniform vec2  uMouse;\nuniform float uMouseStrength;\nuniform float uUseMouse;\nuniform float uPageLoadProgress;\nuniform float uUsePageLoadAnimation;\nuniform float uBrightness;\n\nfloat time;\n\nfloat hash21(vec2 p){\n  p = fract(p * 234.56);\n  p += dot(p, p + 34.56);\n  return fract(p.x * p.y);\n}\n\nfloat noise(vec2 p)\n{\n  return sin(p.x * 10.0) * sin(p.y * (3.0 + sin(time * 0.090909))) + 0.2; \n}\n\nmat2 rotate(float angle)\n{\n  float c = cos(angle);\n  float s = sin(angle);\n  return mat2(c, -s, s, c);\n}\n\nfloat fbm(vec2 p)\n{\n  p *= 1.1;\n  float f = 0.0;\n  float amp = 0.5 * uNoiseAmp;\n  \n  mat2 modify0 = rotate(time * 0.02);\n  f += amp * noise(p);\n  p = modify0 * p * 2.0;\n  amp *= 0.454545; // 1/2.2\n  \n  mat2 modify1 = rotate(time * 0.02);\n  f += amp * noise(p);\n  p = modify1 * p * 2.0;\n  amp *= 0.454545;\n  \n  mat2 modify2 = rotate(time * 0.08);\n  f += amp * noise(p);\n  \n  return f;\n}\n\nfloat pattern(vec2 p, out vec2 q, out vec2 r) {\n  vec2 offset1 = vec2(1.0);\n  vec2 offset0 = vec2(0.0);\n  mat2 rot01 = rotate(0.1 * time);\n  mat2 rot1 = rotate(0.1);\n  \n  q = vec2(fbm(p + offset1), fbm(rot01 * p + offset1));\n  r = vec2(fbm(rot1 * q + offset0), fbm(q + offset0));\n  return fbm(p + r);\n}\n\nfloat digit(vec2 p){\n    vec2 grid = uGridMul * 15.0;\n    vec2 s = floor(p * grid) / grid;\n    p = p * grid;\n    vec2 q, r;\n    float intensity = pattern(s * 0.1, q, r) * 1.3 - 0.03;\n    \n    if(uUseMouse > 0.5){\n        vec2 mouseWorld = uMouse * uScale;\n        float distToMouse = distance(s, mouseWorld);\n        float mouseInfluence = exp(-distToMouse * 8.0) * uMouseStrength * 10.0;\n        intensity += mouseInfluence;\n        \n        float ripple = sin(distToMouse * 20.0 - iTime * 5.0) * 0.1 * mouseInfluence;\n        intensity += ripple;\n    }\n    \n    if(uUsePageLoadAnimation > 0.5){\n        float cellRandom = fract(sin(dot(s, vec2(12.9898, 78.233))) * 43758.5453);\n        float cellDelay = cellRandom * 0.8;\n        float cellProgress = clamp((uPageLoadProgress - cellDelay) / 0.2, 0.0, 1.0);\n        \n        float fadeAlpha = smoothstep(0.0, 1.0, cellProgress);\n        intensity *= fadeAlpha;\n    }\n    \n    p = fract(p);\n    p *= uDigitSize;\n    \n    float px5 = p.x * 5.0;\n    float py5 = (1.0 - p.y) * 5.0;\n    float x = fract(px5);\n    float y = fract(py5);\n    \n    float i = floor(py5) - 2.0;\n    float j = floor(px5) - 2.0;\n    float n = i * i + j * j;\n    float f = n * 0.0625;\n    \n    float isOn = step(0.1, intensity - f);\n    float brightness = isOn * (0.2 + y * 0.8) * (0.75 + x * 0.25);\n    \n    return step(0.0, p.x) * step(p.x, 1.0) * step(0.0, p.y) * step(p.y, 1.0) * brightness;\n}\n\nfloat onOff(float a, float b, float c)\n{\n  return step(c, sin(iTime + a * cos(iTime * b))) * uFlickerAmount;\n}\n\nfloat displace(vec2 look)\n{\n    float y = look.y - mod(iTime * 0.25, 1.0);\n    float window = 1.0 / (1.0 + 50.0 * y * y);\n    return sin(look.y * 20.0 + iTime) * 0.0125 * onOff(4.0, 2.0, 0.8) * (1.0 + cos(iTime * 60.0)) * window;\n}\n\nvec3 getColor(vec2 p){\n    \n    float bar = step(mod(p.y + time * 20.0, 1.0), 0.2) * 0.4 + 1.0; // more efficient than ternary\n    bar *= uScanlineIntensity;\n    \n    float displacement = displace(p);\n    p.x += displacement;\n\n    if (uGlitchAmount != 1.0) {\n      float extra = displacement * (uGlitchAmount - 1.0);\n      p.x += extra;\n    }\n\n    float middle = digit(p);\n    \n    const float off = 0.002;\n    float sum = digit(p + vec2(-off, -off)) + digit(p + vec2(0.0, -off)) + digit(p + vec2(off, -off)) +\n                digit(p + vec2(-off, 0.0)) + digit(p + vec2(0.0, 0.0)) + digit(p + vec2(off, 0.0)) +\n                digit(p + vec2(-off, off)) + digit(p + vec2(0.0, off)) + digit(p + vec2(off, off));\n    \n    vec3 baseColor = vec3(0.9) * middle + sum * 0.1 * vec3(1.0) * bar;\n    return baseColor;\n}\n\nvec2 barrel(vec2 uv){\n  vec2 c = uv * 2.0 - 1.0;\n  float r2 = dot(c, c);\n  c *= 1.0 + uCurvature * r2;\n  return c * 0.5 + 0.5;\n}\n\nvoid main() {\n    time = iTime * 0.333333;\n    vec2 uv = vUv;\n\n    if(uCurvature != 0.0){\n      uv = barrel(uv);\n    }\n    \n    vec2 p = uv * uScale;\n    vec3 col = getColor(p);\n\n    if(uChromaticAberration != 0.0){\n      vec2 ca = vec2(uChromaticAberration) / iResolution.xy;\n      col.r = getColor(p + ca).r;\n      col.b = getColor(p - ca).b;\n    }\n\n    col *= uTint;\n    col *= uBrightness;\n\n    if(uDither > 0.0){\n      float rnd = hash21(gl_FragCoord.xy);\n      col += (rnd - 0.5) * (uDither * 0.003922);\n    }\n\n    gl_FragColor = vec4(col, 1.0);\n}\n",uniforms:{iTime:{value:0},iResolution:{value:new m.Q(g.canvas.width,g.canvas.height,g.canvas.width/g.canvas.height)},uScale:{value:t},uGridMul:{value:new Float32Array(n)},uDigitSize:{value:i},uScanlineIntensity:{value:s},uGlitchAmount:{value:l},uFlickerAmount:{value:c},uNoiseAmp:{value:u},uChromaticAberration:{value:v},uDither:{value:F},uCurvature:{value:x},uTint:{value:new m.Q(q[0],q[1],q[2])},uMouse:{value:new Float32Array([I.current.x,I.current.y])},uMouseStrength:{value:A},uUseMouse:{value:w?1:0},uPageLoadProgress:{value:M?0:1},uUsePageLoadAnimation:{value:M?1:0},uBrightness:{value:j}}});O.current=R;const S=new h.e(g,{geometry:b,program:R});function D(){e&&o&&(o.setSize(e.offsetWidth,e.offsetHeight),R.uniforms.iResolution.value=new m.Q(g.canvas.width,g.canvas.height,g.canvas.width/g.canvas.height))}const Q=new ResizeObserver((()=>D()));Q.observe(e),D();const U=e=>{if(E.current=requestAnimationFrame(U),M&&0===$.current&&($.current=e),a)R.uniforms.iTime.value=P.current;else{const t=(.001*e+N.current)*r;R.uniforms.iTime.value=t,P.current=t}if(M&&$.current>0){const t=2e3,n=e-$.current,o=Math.min(n/t,1);R.uniforms.uPageLoadProgress.value=o}if(w){const e=.08,t=I.current,n=L.current;t.x+=(n.x-t.x)*e,t.y+=(n.y-t.y)*e;const o=R.uniforms.uMouse.value;o[0]=t.x,o[1]=t.y}o.render({scene:S})};return E.current=requestAnimationFrame(U),e.appendChild(g.canvas),w&&e.addEventListener("mousemove",_),()=>{var t;cancelAnimationFrame(E.current),Q.disconnect(),w&&e.removeEventListener("mousemove",_),g.canvas.parentElement===e&&e.removeChild(g.canvas),null===(t=g.getExtension("WEBGL_lose_context"))||void 0===t||t.loseContext(),$.current=0,N.current=100*Math.random()}}),[C,a,r,t,n,i,s,l,c,u,v,F,x,q,w,A,M,j,k,_]),(0,g.jsx)("div",{ref:T,className:`faulty-terminal-container ${R}`,style:S,...D})}var y=n(8270),x=n(7639);y.os.registerPlugin(x.w6);const b=(e,t)=>{let n=0;return function(){const o=performance.now();if(o-n>=t){n=o;for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];e.apply(this,r)}}};function w(e){const t=e.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:{r:0,g:0,b:0}}const A=e=>{let{dotSize:t=16,gap:n=32,baseColor:i="#5227FF",activeColor:r="#5227FF",proximity:a=150,speedTrigger:s=100,shockRadius:l=250,shockStrength:c=5,maxSpeed:u=5e3,resistance:d=750,returnDuration:f=1.5,className:p="",style:m}=e;const h=(0,o.useRef)(null),v=(0,o.useRef)(null),x=(0,o.useRef)([]),A=(0,o.useRef)({x:0,y:0,vx:0,vy:0,speed:0,lastTime:0,lastX:0,lastY:0}),C=(0,o.useMemo)((()=>w(i)),[i]),M=(0,o.useMemo)((()=>w(r)),[r]),j=(0,o.useMemo)((()=>{if("undefined"===typeof window||!window.Path2D)return null;const e=new window.Path2D;return e.arc(0,0,t/2,0,2*Math.PI),e}),[t]),R=(0,o.useCallback)((()=>{const e=h.current,o=v.current;if(!e||!o)return;const{width:i,height:r}=e.getBoundingClientRect(),a=window.devicePixelRatio||1;o.width=i*a,o.height=r*a,o.style.width=`${i}px`,o.style.height=`${r}px`;const s=o.getContext("2d");s&&s.scale(a,a);const l=Math.floor((i+n)/(t+n)),c=Math.floor((r+n)/(t+n)),u=t+n,d=(i-(u*l-n))/2+t/2,f=(r-(u*c-n))/2+t/2,p=[];for(let t=0;t<c;t++)for(let e=0;e<l;e++){const n=d+e*u,o=f+t*u;p.push({cx:n,cy:o,xOffset:0,yOffset:0,_inertiaApplied:!1})}x.current=p}),[t,n]);return(0,o.useEffect)((()=>{if(!j)return;let e;const t=a*a,n=()=>{const o=v.current;if(!o)return;const r=o.getContext("2d");if(!r)return;r.clearRect(0,0,o.width,o.height);const{x:s,y:l}=A.current;for(const e of x.current){const n=e.cx+e.xOffset,o=e.cy+e.yOffset,c=e.cx-s,u=e.cy-l,d=c*c+u*u;let f=i;if(d<=t){const e=1-Math.sqrt(d)/a;f=`rgb(${Math.round(C.r+(M.r-C.r)*e)},${Math.round(C.g+(M.g-C.g)*e)},${Math.round(C.b+(M.b-C.b)*e)})`}r.save(),r.translate(n,o),r.fillStyle=f,r.fill(j),r.restore()}e=requestAnimationFrame(n)};return n(),()=>cancelAnimationFrame(e)}),[a,i,M,C,j]),(0,o.useEffect)((()=>{R();let e=null;return"ResizeObserver"in window?(e=new ResizeObserver(R),h.current&&e.observe(h.current)):window.addEventListener("resize",R),()=>{e?e.disconnect():window.removeEventListener("resize",R)}}),[R]),(0,o.useEffect)((()=>{const e=e=>{const t=v.current.getBoundingClientRect(),n=e.clientX-t.left,o=e.clientY-t.top;for(const i of x.current){const e=Math.hypot(i.cx-n,i.cy-o);if(e<l&&!i._inertiaApplied){i._inertiaApplied=!0,y.os.killTweensOf(i);const t=Math.max(0,1-e/l),r=(i.cx-n)*c*t,a=(i.cy-o)*c*t;y.os.to(i,{inertia:{xOffset:r,yOffset:a,resistance:d},onComplete:()=>{y.os.to(i,{xOffset:0,yOffset:0,duration:f,ease:"elastic.out(1,0.75)"}),i._inertiaApplied=!1}})}}},t=b((e=>{const t=performance.now(),n=A.current,o=n.lastTime?t-n.lastTime:16;let i=(e.clientX-n.lastX)/o*1e3,r=(e.clientY-n.lastY)/o*1e3,l=Math.hypot(i,r);if(l>u){const e=u/l;i*=e,r*=e,l=u}n.lastTime=t,n.lastX=e.clientX,n.lastY=e.clientY,n.vx=i,n.vy=r,n.speed=l;const c=v.current.getBoundingClientRect();n.x=e.clientX-c.left,n.y=e.clientY-c.top;for(const u of x.current){const e=Math.hypot(u.cx-n.x,u.cy-n.y);if(l>s&&e<a&&!u._inertiaApplied){u._inertiaApplied=!0,y.os.killTweensOf(u);const e=u.cx-n.x+.005*i,t=u.cy-n.y+.005*r;y.os.to(u,{inertia:{xOffset:e,yOffset:t,resistance:d},onComplete:()=>{y.os.to(u,{xOffset:0,yOffset:0,duration:f,ease:"elastic.out(1,0.75)"}),u._inertiaApplied=!1}})}}}),50);return window.addEventListener("mousemove",t,{passive:!0}),window.addEventListener("click",e),()=>{window.removeEventListener("mousemove",t),window.removeEventListener("click",e)}}),[u,s,a,d,f,l,c]),(0,g.jsx)("section",{className:`dot-grid ${p}`,style:m,children:(0,g.jsx)("div",{ref:h,className:"dot-grid__wrap",children:(0,g.jsx)("canvas",{ref:v,className:"dot-grid__canvas"})})})};var C=n(9);const M=C.Ay.section`
  position: relative;
  scroll-snap-align: start;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`,j=C.Ay.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
`,R=C.Ay.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,S=e=>{let{children:t}=e;return(0,g.jsxs)(M,{children:[(0,g.jsx)(j,{children:(0,g.jsx)(v,{className:"",tint:"#333333",backgroundColor:"#000000ff",scale:.7,digitSize:2,noiseAmp:1,brightness:.6,scanlineIntensity:.5,curvature:.2,mouseReact:!0,mouseStrength:2,pageLoadAnimation:!0,style:{width:"100%",height:"100%"}})}),(0,g.jsx)(R,{children:t})]})},k=e=>{let{children:t}=e;return(0,g.jsxs)(M,{children:[(0,g.jsx)(j,{children:(0,g.jsx)(A,{className:"",dotSize:10,gap:15,baseColor:"#33333338",activeColor:"#5F0807",proximity:120,shockRadius:250,shockStrength:5,resistance:750,returnDuration:1.5,style:{width:"100%",height:"100%"}})}),(0,g.jsx)(R,{children:t})]})};const D=C.i7`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,T=(C.i7`
  0% { opacity: 0.3; }
  50% { opacity: 1; }
  100% { opacity: 0.3; }
`,C.i7`
  0% { opacity: 0.1; }
  50% { opacity: 0.3; }
  100% { opacity: 0.1; }
`),O=C.Ay.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    height: 400px;
  }

  @media (min-width: 1200px) {
    height: 500px;
  }
`,z=C.Ay.div`
  width: 120px;
  height: 20px;
  background: linear-gradient(to bottom, #1a1a1a, #0a0a0a);
  border-radius: 3px 3px 0 0;
  margin-bottom: -5px;
  position: relative;
  z-index: 2;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.5);

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 5px;
    background: #333;
    border-radius: 0 0 3px 3px;
  }
`,L=C.Ay.div`
  position: relative;
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
  perspective: 500px;
`,I=C.Ay.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: ${e=>{let{cameraColor:t}=e;return t}};
  border-radius: 50%;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.6), inset 0 -6px 18px ${e=>{let{cameraColor:t}=e;return function(e,t){let n=e.replace("#","");3===n.length&&(n=n.split("").map((e=>e+e)).join(""));let o=parseInt(n,16);return`#${((1<<24)+(Math.max(0,(o>>16&255)-Math.round(255*t))<<16)+(Math.max(0,(o>>8&255)-Math.round(255*t))<<8)+Math.max(0,(255&o)-Math.round(255*t))).toString(16).slice(1)}`}(t,.3)}},
    inset 0 6px 18px ${e=>{let{cameraColor:t}=e;return function(e,t){let n=e.replace("#","");3===n.length&&(n=n.split("").map((e=>e+e)).join(""));let o=parseInt(n,16);return`#${((1<<24)+(Math.min(255,(o>>16&255)+Math.round(255*t))<<16)+(Math.min(255,(o>>8&255)+Math.round(255*t))<<8)+Math.min(255,(255&o)+Math.round(255*t))).toString(16).slice(1)}`}(t,.1)}}, 0 0 35px rgba(161, 161, 161, 0.5);
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 10%;
    left: 10%;
    right: 10%;
    bottom: 10%;
    border: 2px solid rgba(255, 255, 255, 0.05);
    border-radius: 50%;
    pointer-events: none;
  }
`,P=C.Ay.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 50%;
  background: ${e=>{let{lensColor:t}=e;return t}};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 5px rgba(50, 50, 50, 0.8), inset 0 0 25px rgba(0, 0, 0, 0.9);
  transition: transform 0.1s ease;
  transform-style: preserve-3d;
  z-index: 2;
`,E=C.Ay.div`
  width: 85%;
  height: 85%;
  background: radial-gradient(circle at 30% 30%, #3b4359 0%, #0e121b 90%);
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.8);
`,$=C.Ay.div`
  position: absolute;
  width: 15px;
  height: 15px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  top: 20%;
  right: 20%;
`,N=C.Ay.div`
  position: absolute;
  width: 35%;
  height: 35%;
  background: radial-gradient(circle, #0a0e17 10%, #1e2538 70%);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease-out;
`,q=C.Ay.div`
  position: absolute;
  bottom: 15px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 10px;
  z-index: 3;
`,F=C.Ay.div`
  width: 8px;
  height: 8px;
  background: ${e=>{let{statusColor:t}=e;return t}};
  border-radius: 50%;
  box-shadow: 0 0 8px ${e=>{let{statusColor:t}=e;return t}};
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% {
      opacity: 0.3;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.3;
    }
  }
`,_=C.Ay.div`
  width: 6px;
  height: 6px;
  background: #ff0037;
  border-radius: 50%;
  opacity: 0.2;
  animation: ${T} 1.5s infinite;

  &:nth-child(2) {
    animation-delay: 0.5s;
  }

  &:nth-child(3) {
    animation-delay: 1s;
  }
`,Q=C.Ay.div`
  color: #c3d4ec;
  text-align: center;
  margin-top: 15px;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
`,U=C.Ay.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  pointer-events: none;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom, transparent, rgba(59, 130, 246, 0.6), transparent);
    transform-origin: center;
    animation: ${D} 4s linear infinite;
  }
`,B=e=>{let{cameraColor:t="#2a2a2a",lensColor:n="#000000",statusColor:i="#00ff40",label:r="C\xe1mara Dome PTZ",showLaser:a=!0,mounted:s=!0}=e;const l=(0,o.useRef)(null),c=(0,o.useRef)(null),u=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=e=>{if(!l.current||!u.current)return;const t=l.current.getBoundingClientRect(),n=t.left+t.width/2,o=t.top+t.height/2,i=e.clientX-n,r=e.clientY-o,a=Math.max(-8,Math.min(8,i/8)),s=Math.max(-8,Math.min(8,r/8));u.current.style.transform=`translate(-50%, -50%) translate(${a}px, ${s}px)`,Math.random()>.995&&c.current&&(c.current.style.animation="none",setTimeout((()=>{c.current&&(c.current.style.animation="pulse 2s infinite")}),100))},t=setInterval((()=>{if(u.current){u.current.style.transition="all 0.5s ease";const e=25+5*Math.random();u.current.style.width=`${e}px`,u.current.style.height=`${e}px`,setTimeout((()=>{u.current&&(u.current.style.width="25px",u.current.style.height="25px")}),500)}}),3e3);return document.addEventListener("mousemove",e),()=>{document.removeEventListener("mousemove",e),clearInterval(t)}}),[]),(0,g.jsxs)(O,{children:[s&&(0,g.jsx)(z,{}),(0,g.jsxs)(L,{children:[(0,g.jsxs)(I,{cameraColor:t,children:[(0,g.jsx)(P,{ref:l,lensColor:n,children:(0,g.jsxs)(E,{children:[(0,g.jsx)($,{}),(0,g.jsx)(N,{ref:u})]})}),(0,g.jsxs)(q,{children:[(0,g.jsx)(F,{ref:c,statusColor:i}),(0,g.jsx)(_,{}),(0,g.jsx)(_,{})]}),a&&(0,g.jsx)(U,{})]}),(0,g.jsx)(Q,{children:r})]})]})},X=(0,o.lazy)((()=>Promise.all([n.e(614),n.e(545),n.e(676)]).then(n.bind(n,1676)))),G=(0,o.lazy)((()=>Promise.all([n.e(614),n.e(416)]).then(n.bind(n,9416)))),Y=(0,o.lazy)((()=>n.e(538).then(n.bind(n,8538)))),W=(0,o.lazy)((()=>Promise.all([n.e(614),n.e(282)]).then(n.bind(n,3282)).then((e=>({default:e.default}))))),J=()=>(0,g.jsxs)(u.L0,{children:[(0,g.jsx)(Y,{}),(0,g.jsx)(S,{children:(0,g.jsx)(W,{direction:"right",title:i.DD,content:i.Qq,button:i.x6,icon:(0,g.jsx)(B,{cameraColor:"#333333",lensColor:"#000000ff",statusColor:"#00ff40",label:"",showLaser:!1,mounted:!1}),id:"intro"})}),(0,g.jsx)(k,{children:(0,g.jsx)(G,{title:r.DD,content:r.Qq,button:r.x6})}),(0,g.jsx)(k,{children:(0,g.jsx)(W,{direction:"left",title:a.DD,content:a.Qq,section:a.uW,icon:"graphs.svg",id:"about"})}),(0,g.jsx)(W,{direction:"right",title:s.D,content:s.Q,icon:"product-launch.svg",id:"mission"}),(0,g.jsx)(W,{direction:"left",title:l.D,content:l.Q,icon:"waving.svg",id:"product"}),(0,g.jsx)(X,{title:c.D,content:c.Q,id:"contact"})]})}}]);
//# sourceMappingURL=660.190c0204.chunk.js.map