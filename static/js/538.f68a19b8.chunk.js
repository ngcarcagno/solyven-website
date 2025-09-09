"use strict";(self.webpackChunksolyven_website=self.webpackChunksolyven_website||[]).push([[538],{8538:(e,i,s)=>{s.r(i),s.d(i,{default:()=>l});var n=s(5043),t=s(2646);const o=(0,s(9).Ay)("div")`
  padding: 10px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 10;
  cursor: pointer;
  background: rgb(241, 242, 243);
  text-align: center;
  align-items: center;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  visibility: ${e=>e.show?"visible":"hidden"};
  opacity: ${e=>e.show?"1":"0"};
  display: flex;

  &:hover,
  &:active,
  &:focus {
    background: rgb(224, 224, 224);
  }

  @media screen and (max-width: 1240px) {
    display: none;
  }
`;var r=s(579);const l=()=>{const[e,i]=(0,n.useState)(!1),s=(0,n.useCallback)((()=>{const s=window.scrollY;!e&&s>350?i(!0):s<=350&&i(!1)}),[e]);(0,n.useEffect)((()=>(window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s)})),[s]);return(0,r.jsx)(o,{onClick:()=>{document.getElementById("intro").scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})},show:e,children:(0,r.jsx)(t.A,{src:"scroll-top.svg",width:"20px",height:"20px"})})}}}]);
//# sourceMappingURL=538.f68a19b8.chunk.js.map