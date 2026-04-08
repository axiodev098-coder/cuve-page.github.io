import{n as e,s as t,t as n}from"./jsx-runtime-C7M7YA1l.js";import{a as r,s as i}from"./chunk-QFMPRPBF-D5zo2I_E.js";var a=t(e(),1),o=n(),s=({Name:e})=>{let t=r();return(0,o.jsx)(c,{children:(0,o.jsxs)(`button`,{onClick:()=>t(`/gallery`,{state:{service:e}}),className:`cta`,children:[(0,o.jsx)(`span`,{className:`text-light service`,children:e}),(0,o.jsxs)(`svg`,{width:`15px`,height:`10px`,viewBox:`0 0 13 10`,children:[(0,o.jsx)(`path`,{d:`M1,5 L11,5`}),(0,o.jsx)(`polyline`,{points:`8 1 12 5 8 9`})]})]})})},c=i.div`
  .cta {
    position: relative;
    margin: auto;
    padding: 12px 18px;
    transition: all 0.2s ease;
    border: none;
    background: none;
    cursor: pointer;
    display: inline-block;
    text-decoration: none;
  }

  .cta:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    border-radius: 50px;
    background: #b9b9b9;
    width: 45px;
    height: 45px;
    transition: all 0.3s ease;
    z-index: 1;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }

  .cta span {
    position: relative;
    font-family: "DM Sans", sans-serif;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.05em;
    color: #ffffff;
    z-index: 2;
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }

  .cta svg {
    position: relative;
    top: 0;
    margin-left: 10px;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: #ffffff;
    stroke-width: 2;
    transform: translateX(-5px);
    transition: all 0.3s ease;
    z-index: 2;
  }

  .cta:hover:before {
    width: 100%;
    background: #1b1b1b;
    border: 1px solid #ffffff;
  }

  .cta:hover span {
    color: #fff;
  }

  .cta:hover svg {
    transform: translateX(0);
    stroke: #fff;
  }

  .cta:active {
    transform: scale(0.95);
  }

  .cta:active {
    transform: scale(0.95);
  }`,l=()=>{r();let[e,t]=a.useState([]);return a.useEffect(()=>{fetch(`/cuve-page.github.io/Gallery-data.json`).then(e=>e.json()).then(e=>t(e)).catch(e=>console.error(`Error fetching gallery data:`,e))},[]),(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`h2`,{className:`text-light text-center margin-auto title`,children:`Servicios`}),(0,o.jsx)(`hr`,{className:`text-light border `}),(0,o.jsx)(`div`,{className:`d-flex flex-column gap-3  `,children:e.map((e,t)=>(0,o.jsx)(s,{Name:e.title},t))})]})};export{l as default};