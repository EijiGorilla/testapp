"use strict";(self.webpackChunktestapp=self.webpackChunktestapp||[]).push([[41009],{60561:(e,t,r)=>{r.d(t,{i:()=>E});var i=r(20664),a=r(9392),s=r(48549),n=r(34981),o=r(75803),c=r(45463),l=r(77730),p=r(66470),d=r(93684),h=r(16506),v=r(59246),u=r(60322),m=r(96643),f=r(88849),S=r(50125),T=r(93345),P=r(57162);class g extends v.w{constructor(e,t){super(e,t,new h.$(f.L,(()=>r.e(66419).then(r.bind(r,66419)))),O)}_makePipelineState(e,t){const{output:r,oitPass:i,space:a,hasOccludees:s}=e;return(0,P.Ey)({blending:(0,n.RN)(r)?(0,u.Yf)(i):null,depthTest:a===S.lM.Draped?null:{func:(0,u.K_)(i)},depthWrite:(0,u.z5)(e),drawBuffers:r===n.V.Depth?{buffers:[T.Hr.NONE]}:(0,u.m6)(i,r),colorWrite:P.kn,stencilWrite:s?m.v0:null,stencilTest:s?t?m.a9:m.qh:null,polygonOffset:{factor:0,units:-10}})}initializePipeline(e){return e.occluder?(this._occluderPipelineTransparent=(0,P.Ey)({blending:P.Ky,depthTest:m.sf,depthWrite:null,colorWrite:P.kn,stencilWrite:null,stencilTest:m.mK}),this._occluderPipelineOpaque=(0,P.Ey)({blending:P.Ky,depthTest:m.sf,depthWrite:null,colorWrite:P.kn,stencilWrite:m.r8,stencilTest:m.I$}),this._occluderPipelineMaskWrite=(0,P.Ey)({blending:null,depthTest:m.m,depthWrite:null,colorWrite:null,stencilWrite:m.v0,stencilTest:m.a9})):this._occluderPipelineTransparent=this._occluderPipelineOpaque=this._occluderPipelineMaskWrite=null,this._occludeePipelineState=this._makePipelineState(e,!0),this._makePipelineState(e,!1)}getPipeline(e,t){return e?this._occludeePipelineState:t===l.N.TRANSPARENT_OCCLUDER_MATERIAL?this._occluderPipelineTransparent??super.getPipeline():t===l.N.OCCLUDER_MATERIAL?this._occluderPipelineOpaque??super.getPipeline():this._occluderPipelineMaskWrite??super.getPipeline()}}const O=new Map([[p.r.POSITION,0],[p.r.PREVPOSITION,1],[p.r.UV0,2],[p.r.NORMAL,3],[p.r.COLOR,4],[p.r.COLORFEATUREATTRIBUTE,4],[p.r.SIZE,5],[p.r.SIZEFEATUREATTRIBUTE,5],[p.r.OPACITYFEATUREATTRIBUTE,6]]);var _=r(46259),A=r(75569);class E extends c.im{constructor(e){super(e,I),this._configuration=new S.Dt,this.vertexAttributeLocations=O,this.produces=new Map([[l.N.OPAQUE_MATERIAL,e=>e===n.V.Highlight||(0,n._o)(e)&&this.parameters.renderOccluded===c.m$.OccludeAndTransparentStencil],[l.N.OPAQUE_MATERIAL_WITHOUT_NORMALS,e=>(0,n.eh)(e)],[l.N.OCCLUDER_MATERIAL,e=>(0,n.aD)(e)&&this.parameters.renderOccluded===c.m$.OccludeAndTransparentStencil],[l.N.TRANSPARENT_OCCLUDER_MATERIAL,e=>(0,n.aD)(e)&&this.parameters.renderOccluded===c.m$.OccludeAndTransparentStencil],[l.N.TRANSPARENT_MATERIAL,e=>(0,n._o)(e)&&this.parameters.writeDepth],[l.N.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,e=>(0,n._o)(e)&&!this.parameters.writeDepth],[l.N.DRAPED_MATERIAL,e=>(0,n.RN)(e)||e===n.V.Highlight]]),this._layout=this.createLayout()}getConfiguration(e,t){return this._configuration.output=e,this._configuration.space=t.slot===l.N.DRAPED_MATERIAL?S.lM.Draped:this.parameters.worldSpace?S.lM.World:S.lM.Screen,this._configuration.hideOnShortSegments=this.parameters.hideOnShortSegments,this._configuration.hasCap=this.parameters.cap!==_.x.BUTT,this._configuration.anchor=this.parameters.anchor,this._configuration.hasTip=this.parameters.hasTip,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasOccludees=t.hasOccludees,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.vvOpacity=!!this.parameters.vvOpacity,this._configuration.occluder=this.parameters.renderOccluded===c.m$.OccludeAndTransparentStencil,this._configuration.oitPass=t.oitPass,this._configuration.terrainDepthTest=t.terrainDepthTest&&(0,n.RN)(e),this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration}get visible(){return this.parameters.color[3]>=A.Q}intersect(){}createLayout(){const e=(0,s.BP)().vec3f(p.r.POSITION).vec3f(p.r.PREVPOSITION).vec2f(p.r.UV0);return this.parameters.worldSpace&&e.vec3f(p.r.NORMAL),this.parameters.vvSize?e.f32(p.r.SIZEFEATUREATTRIBUTE):e.f32(p.r.SIZE),this.parameters.vvColor?e.f32(p.r.COLORFEATUREATTRIBUTE):e.vec4f(p.r.COLOR),this.parameters.vvOpacity&&e.f32(p.r.OPACITYFEATUREATTRIBUTE),e}createBufferWriter(){return new R(this._layout,this.parameters)}createGLMaterial(e){return new y(e)}}class y extends o.m8{constructor(){super(...arguments),this._markerPrimitive=null}dispose(){super.dispose(),this._markerTextures.release(this._markerPrimitive),this._markerPrimitive=null}beginSlot(e){const t=this._material.parameters.markerPrimitive;return t!==this._markerPrimitive&&(this._material.setParameters({markerTexture:this._markerTextures.swap(t,this._markerPrimitive)}),this._markerPrimitive=t),this._material.setParameters(this.textureBindParameters),this.getTechnique(g,e)}}class I extends d.S{constructor(){super(...arguments),this.width=0,this.color=[1,1,1,1],this.markerPrimitive="arrow",this.placement="end",this.cap=_.x.BUTT,this.anchor=S.kJ.Center,this.hasTip=!1,this.worldSpace=!1,this.hideOnShortSegments=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.markerTexture=null}}class R{constructor(e,t){this.vertexBufferLayout=e,this._parameters=t}elementCount(){return"begin-end"===this._parameters.placement?12:6}write(e,t,r,a,s,n){const o=r.get(p.r.POSITION).data,c=o.length/3;let l=[1,0,0];const d=r.get(p.r.NORMAL);this._parameters.worldSpace&&null!=d&&(l=d.data);let h=1,v=0;this._parameters.vvSize?v=r.get(p.r.SIZEFEATUREATTRIBUTE).data[0]:r.has(p.r.SIZE)&&(h=r.get(p.r.SIZE).data[0]);let u=[1,1,1,1],m=0;this._parameters.vvColor?m=r.get(p.r.COLORFEATUREATTRIBUTE).data[0]:r.has(p.r.COLOR)&&(u=r.get(p.r.COLOR).data);let f=0;this._parameters.vvOpacity&&(f=r.get(p.r.OPACITYFEATUREATTRIBUTE).data[0]);const S=new Float32Array(s.buffer);let T=n*(this.vertexBufferLayout.stride/4);const P=(e,t,r,i)=>{if(S[T++]=e[0],S[T++]=e[1],S[T++]=e[2],S[T++]=t[0],S[T++]=t[1],S[T++]=t[2],S[T++]=r[0],S[T++]=r[1],this._parameters.worldSpace&&(S[T++]=l[0],S[T++]=l[1],S[T++]=l[2]),this._parameters.vvSize?S[T++]=v:S[T++]=h,this._parameters.vvColor)S[T++]=m;else{const e=Math.min(4*i,u.length-4);S[T++]=u[e],S[T++]=u[e+1],S[T++]=u[e+2],S[T++]=u[e+3]}this._parameters.vvOpacity&&(S[T++]=f)};let g;var O;(O=g||(g={}))[O.ASCENDING=1]="ASCENDING",O[O.DESCENDING=-1]="DESCENDING";const _=(t,r)=>{const a=(0,i.i)(w,o[3*t],o[3*t+1],o[3*t+2]),s=N;let n=t+r;do{(0,i.i)(s,o[3*n],o[3*n+1],o[3*n+2]),n+=r}while((0,i.I)(a,s)&&n>=0&&n<c);e&&((0,i.t)(a,a,e),(0,i.t)(s,s,e)),P(a,s,[-1,-1],t),P(a,s,[1,-1],t),P(a,s,[1,1],t),P(a,s,[-1,-1],t),P(a,s,[1,1],t),P(a,s,[-1,1],t)},A=this._parameters.placement;"begin"!==A&&"begin-end"!==A||_(0,g.ASCENDING),"end"!==A&&"begin-end"!==A||_(c-1,g.DESCENDING)}}const w=(0,a.vt)(),N=(0,a.vt)()},86401:(e,t,r)=>{r.d(t,{Ci:()=>s,Dq:()=>c,dB:()=>o,zK:()=>n});var i=r(48549),a=r(66470);const s=(0,i.BP)().vec3f(a.r.POSITION),n=(0,i.BP)().vec3f(a.r.POSITION).vec2f(a.r.UV0),o=(0,i.BP)().vec3f(a.r.POSITION).vec4u8(a.r.COLOR),c=(0,i.BP)().vec3f(a.r.POSITION).vec2f(a.r.UV0).vec4u8(a.r.OBJECTANDLAYERIDCOLOR)},88849:(e,t,r)=>{r.d(t,{L:()=>E,b:()=>A});var i=r(99443),a=r(26917),s=r(3838),n=r(20469),o=r(17698),c=r(94192),l=r(80883),p=r(81449),d=r(3799),h=r(28450),v=r(51596),u=r(58350),m=r(23148),f=r(86955),S=r(23687),T=r(70367),P=r(66470),g=r(50125),O=r(91911),_=r(2687);function A(e){const t=new _.N5,{space:r,anchor:A,hasTip:E}=e,y=r===g.lM.World;t.include(s.s,e),t.include(o.r,e),t.include(c.Z,e);const{vertex:I,fragment:R}=t;R.include(p.W),(0,d.NB)(I,e),t.attributes.add(P.r.POSITION,"vec3"),t.attributes.add(P.r.PREVPOSITION,"vec3"),t.attributes.add(P.r.UV0,"vec2"),t.varyings.add("vColor","vec4"),t.varyings.add("vpos","vec3"),t.varyings.add("vUV","vec2"),t.varyings.add("vSize","float"),E&&t.varyings.add("vLineWidth","float"),I.uniforms.add(new h.E("nearFar",(e=>{let{camera:t}=e;return t.nearFar})),new v.I("viewport",(e=>{let{camera:t}=e;return t.fullViewport}))),I.code.add(f.H`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),I.code.add(f.H`void clip(vec4 pos, inout vec4 prev) {
float vnp = nearFar[0] * 0.99;
if (prev.z > -nearFar[0]) {
float interpolation = (-vnp - pos.z) / (prev.z - pos.z);
prev = mix(pos, prev, interpolation);
}
}`),y?(t.attributes.add(P.r.NORMAL,"vec3"),(0,d.S7)(I),I.constants.add("tiltThreshold","float",.7),I.code.add(f.H`vec3 perpendicular(vec3 v) {
vec3 n = (viewNormal * vec4(normal.xyz, 1.0)).xyz;
vec3 n2 = cross(v, n);
vec3 forward = vec3(0.0, 0.0, 1.0);
float tiltDot = dot(forward, n);
return abs(tiltDot) < tiltThreshold ? n : n2;
}`)):I.code.add(f.H`vec2 perpendicular(vec2 v) {
return vec2(v.y, -v.x);
}`);const w=y?"vec3":"vec2";return I.code.add(f.H`
      ${w} normalizedSegment(${w} pos, ${w} prev) {
        ${w} segment = pos - prev;
        float segmentLen = length(segment);

        // normalize or zero if too short
        return (segmentLen > 0.001) ? segment / segmentLen : ${y?"vec3(0.0, 0.0, 0.0)":"vec2(0.0, 0.0)"};
      }

      ${w} displace(${w} pos, ${w} prev, float displacementLen) {
        ${w} segment = normalizedSegment(pos, prev);

        ${w} displacementDirU = perpendicular(segment);
        ${w} displacementDirV = segment;

        ${A===g.kJ.Tip?"pos -= 0.5 * displacementLen * displacementDirV;":""}

        return pos + displacementLen * (uv0.x * displacementDirU + uv0.y * displacementDirV);
      }
    `),r===g.lM.Screen&&(I.uniforms.add(new S.F("inverseProjectionMatrix",(e=>{let{camera:t}=e;return t.inverseProjectionMatrix}))),I.code.add(f.H`vec3 inverseProject(vec4 posScreen) {
posScreen.xy = (posScreen.xy / viewport.zw) * posScreen.w;
return (inverseProjectionMatrix * posScreen).xyz;
}`),I.code.add(f.H`bool rayIntersectPlane(vec3 rayDir, vec3 planeOrigin, vec3 planeNormal, out vec3 intersection) {
float cos = dot(rayDir, planeNormal);
float t = dot(planeOrigin, planeNormal) / cos;
intersection = t * rayDir;
return abs(cos) > 0.001 && t > 0.0;
}`),I.uniforms.add(new m.U("perScreenPixelRatio",(e=>{let{camera:t}=e;return t.perScreenPixelRatio}))),I.code.add(f.H`
      vec4 toFront(vec4 displacedPosScreen, vec3 posLeft, vec3 posRight, vec3 prev, float lineWidth) {
        // Project displaced position back to camera space
        vec3 displacedPos = inverseProject(displacedPosScreen);

        // Calculate the plane that we want the marker to lie in. Note that this will always be an approximation since ribbon lines are generally
        // not planar and we do not know the actual position of the displaced prev vertices (they are offset in screen space, too).
        vec3 planeNormal = normalize(cross(posLeft - posRight, posLeft - prev));
        vec3 planeOrigin = posLeft;

        ${(0,f.If)(e.hasCap,"if(prev.z > posLeft.z) {\n                vec2 diff = posLeft.xy - posRight.xy;\n                planeOrigin.xy += perpendicular(diff) / 2.0;\n             }")};

        // Move the plane towards the camera by a margin dependent on the line width (approximated in world space). This tolerance corrects for the
        // non-planarity in most cases, but sharp joins can place the prev vertices at arbitrary positions so markers can still clip.
        float offset = lineWidth * perScreenPixelRatio;
        planeOrigin *= (1.0 - offset);

        // Intersect camera ray with the plane and make sure it is within clip space
        vec3 rayDir = normalize(displacedPos);
        vec3 intersection;
        if (rayIntersectPlane(rayDir, planeOrigin, planeNormal, intersection) && intersection.z < -nearFar[0] && intersection.z > -nearFar[1]) {
          return vec4(intersection.xyz, 1.0);
        }

        // Fallback: use depth of pos or prev, whichever is closer to the camera
        float minDepth = planeOrigin.z > prev.z ? length(planeOrigin) : length(prev);
        displacedPos *= minDepth / length(displacedPos);
        return vec4(displacedPos.xyz, 1.0);
      }
  `)),(0,d.Nz)(I),I.main.add(f.H`
    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
    }
    else {
      float lineWidth = getLineWidth();
      float screenMarkerSize = getScreenMarkerSize();

      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(prevPosition, 1.0);
      clip(pos, prev);

      ${y?f.H`${(0,f.If)(e.hideOnShortSegments,f.H`
                if (areWorldMarkersHidden(pos, prev)) {
                  // Project out of clip space
                  gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
                  return;
                }`)}
            pos.xyz = displace(pos.xyz, prev.xyz, getWorldMarkerSize(pos));
            vec4 displacedPosScreen = projectAndScale(pos);`:f.H`
            vec4 posScreen = projectAndScale(pos);
            vec4 prevScreen = projectAndScale(prev);
            vec4 displacedPosScreen = posScreen;

            displacedPosScreen.xy = displace(posScreen.xy, prevScreen.xy, screenMarkerSize);
            ${(0,f.If)(r===g.lM.Screen,f.H`
                vec2 displacementDirU = perpendicular(normalizedSegment(posScreen.xy, prevScreen.xy));

                // We need three points of the ribbon line in camera space to calculate the plane it lies in
                // Note that we approximate the third point, since we have no information about the join around prev
                vec3 lineRight = inverseProject(posScreen + lineWidth * vec4(displacementDirU.xy, 0.0, 0.0));
                vec3 lineLeft = pos.xyz + (pos.xyz - lineRight);

                pos = toFront(displacedPosScreen, lineLeft, lineRight, prev.xyz, lineWidth);
                displacedPosScreen = projectAndScale(pos);`)}`}
      forwardViewPosDepth(pos.xyz);
      // Convert back into NDC
      displacedPosScreen.xy = (displacedPosScreen.xy / viewport.zw) * displacedPosScreen.w;

      // Convert texture coordinate into [0,1]
      vUV = (uv0 + 1.0) / 2.0;
      ${(0,f.If)(!y,"vUV *= displacedPosScreen.w;")}
      ${(0,f.If)(E,"vLineWidth = lineWidth;")}

      vSize = screenMarkerSize;
      vColor = getColor();

      // Use camera space for slicing
      vpos = pos.xyz;

      gl_Position = displacedPosScreen;
    }`),t.fragment.include(a.HQ,e),t.include(O.z,e),R.uniforms.add(new u.E("intrinsicColor",(e=>e.color)),new T.N("tex",(e=>e.markerTexture))),R.include(l.a),R.constants.add("texelSize","float",1/i.vO),R.code.add(f.H`float markerAlpha(vec2 samplePos) {
samplePos += vec2(0.5, -0.5) * texelSize;
float sdf = rgbaTofloat(texture(tex, samplePos)) - 0.5;
float distance = sdf * vSize;
distance -= 0.5;
return clamp(0.5 - distance, 0.0, 1.0);
}`),E&&R.constants.add("relativeMarkerSize","float",i.Cz/i.vO).constants.add("relativeTipLineWidth","float",i.DZ).code.add(f.H`
    float tipAlpha(vec2 samplePos) {
      // Convert coordinates s.t. they are in pixels and relative to the tip of an arrow marker
      samplePos -= vec2(0.5, 0.5 + 0.5 * relativeMarkerSize);
      samplePos *= vSize;

      float halfMarkerSize = 0.5 * relativeMarkerSize * vSize;
      float halfTipLineWidth = 0.5 * max(1.0, relativeTipLineWidth * vLineWidth);

      ${(0,f.If)(y,"halfTipLineWidth *= fwidth(samplePos.y);")}

      float distance = max(abs(samplePos.x) - halfMarkerSize, abs(samplePos.y) - halfTipLineWidth);
      return clamp(0.5 - distance, 0.0, 1.0);
    }
  `),t.include(n.Q,e),R.main.add(f.H`
    discardBySlice(vpos);
    discardByTerrainDepth();

    vec4 finalColor = intrinsicColor * vColor;

    // Cancel out perspective correct interpolation if in screen space or draped
    vec2 samplePos = vUV ${(0,f.If)(!y,"* gl_FragCoord.w")};
    finalColor.a *= ${E?"max(markerAlpha(samplePos), tipAlpha(samplePos))":"markerAlpha(samplePos)"};
    outputColorHighlightOID(finalColor, vpos);`),t}const E=Object.freeze(Object.defineProperty({__proto__:null,build:A},Symbol.toStringTag,{value:"Module"}))}}]);
//# sourceMappingURL=41009.406a0fa9.chunk.js.map