import{n as e,s as t,t as n}from"./jsx-runtime-C7M7YA1l.js";import{t as r}from"./index-BxGypkOu.js";import{t as i}from"./proxy-M_Dbya2_.js";var a=t(e(),1),o=n(),s=({checked:e,onChange:t,className:n})=>(0,o.jsx)(c,{className:n,children:(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`input`,{id:`checkbox`,type:`checkbox`,checked:e,onChange:t}),(0,o.jsxs)(`label`,{className:`toggle`,htmlFor:`checkbox`,children:[(0,o.jsx)(`div`,{id:`bar1`,className:`bars`}),(0,o.jsx)(`div`,{id:`bar2`,className:`bars`}),(0,o.jsx)(`div`,{id:`bar3`,className:`bars`})]})]})}),c=r.div`
  #checkbox {
    display: none;
  }

  .toggle {
    position: relative;
    width: 40px;
    height: 40px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition-duration: .3s;
  }

  .bars {
    width: 100%;
    height: 4px;
    background-color: rgb(253, 255, 243);
    border-radius: 5px;
    transition-duration: .3s;
  }

  /* #checkbox:checked + .toggle .bars {
    margin-left: 13px;
  } */

  #checkbox:checked + .toggle #bar2 {
    transform: translateY(14px) rotate(60deg);
    margin-left: 0;
    transform-origin: right;
    transition-duration: .3s;
    z-index: 2;
  }

  #checkbox:checked + .toggle #bar1 {
    transform: translateY(28px) rotate(-60deg);
    transition-duration: .3s;
    transform-origin: left;
    z-index: 1;
  }

  #checkbox:checked + .toggle {
    transform: rotate(-90deg);
  }
  /* #checkbox:checked + .toggle #bar3 {
    transform: rotate(90deg);
    transition-duration: .3s;
    transform-origin:right;
  } */`,l={hidden:{opacity:0,y:-24},visible:{opacity:1,y:0,transition:{duration:1.2,ease:`easeOut`}}},u={hidden:{opacity:0,y:12},visible:e=>({opacity:1,y:0,transition:{delay:.35+e*.12,duration:.5}})},d=()=>{let[e,t]=(0,a.useState)(!1),[n,r]=(0,a.useState)(window.innerWidth<992);return(0,a.useEffect)(()=>{let e=()=>{r(window.innerWidth<992)};return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]),(0,o.jsxs)(i.div,{className:`glass-window row d-flex align-items-center text-white`,variants:l,initial:`hidden`,animate:`visible`,children:[(0,o.jsx)(i.div,{className:`logo col-5`,initial:{opacity:0,scale:.94},animate:{opacity:1,scale:1},transition:{duration:.6,ease:`easeOut`},children:(0,o.jsx)(`img`,{className:`img-fluid m-3`,src:`./logo.png`,alt:`Logo`,style:{width:`250px`}})}),(0,o.jsx)(`nav`,{className:`navbar navbar-expand-lg col-7 bg-transparent `,children:(0,o.jsxs)(`div`,{className:`container-fluid d-flex justify-content-end`,children:[n&&(0,o.jsx)(s,{checked:e,onChange:()=>t(!e)}),(0,o.jsx)(`div`,{className:`collapse navbar-collapse ${!n||e?`show`:``}`,id:`navbarNav`,children:(0,o.jsx)(`ul`,{className:`navbar-nav `,children:[{label:`Home`,href:`#`},{label:`Features`,href:`#`},{label:`Pricing`,href:`#`},{label:`Disabled`,href:`#`}].map((e,t)=>(0,o.jsx)(i.li,{className:`nav-item`,custom:t,variants:u,initial:`hidden`,animate:`visible`,children:(0,o.jsx)(`a`,{className:`nav-link text-white`,href:e.href,children:e.label})},e.label))})})]})})]})};export{d as default};