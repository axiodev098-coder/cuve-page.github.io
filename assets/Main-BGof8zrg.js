import{n as e,t}from"./jsx-runtime-C7M7YA1l.js";import{t as n}from"./styled-components.browser.esm-DzvzH64H.js";import{t as r}from"./proxy-DZYZyzYX.js";e();var i=t(),a=()=>{let e=[`https://images.pexels.com/photos/1730877/pexels-photo-1730877.jpeg?auto=compress&cs=tinysrgb&w=600`,`https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=600`,`https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=600`,`https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600`,`https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600`,`https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=600`,`https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=600`,`https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=600`,`https://images.pexels.com/photos/2387416/pexels-photo-2387416.jpeg?auto=compress&cs=tinysrgb&w=600`,`https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600`],t=e.length;return(0,i.jsx)(o,{quantity:t,children:(0,i.jsx)(`div`,{className:`wrapper`,children:(0,i.jsx)(`div`,{className:`inner`,children:e.map((e,t)=>(0,i.jsx)(`div`,{className:`card`,style:{"--index":t,"--colorCard":`142, 202, 252`},children:(0,i.jsx)(`img`,{src:e,alt:`Portfolio ${t+1}`,className:`img`,loading:`lazy`})},t))})})})},o=n.div`
  .wrapper {
    width: 100%;
    height: 100%;
    min-height: 750px;
    position: relative;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    user-select: none;
  }

  .inner {
    --w: 130px;
    --h: 180px;
    --translateZ: calc((var(--w) + var(--h)) * 1.2);
    --rotateX: -15deg;
    --perspective: 1000px;
    position: relative;
    width: var(--w);
    height: var(--h);
    margin-top: 50px;
    z-index: 2;
    transform-style: preserve-3d;
    transform: perspective(var(--perspective));
    animation: rotating 25s linear infinite;
  }
  
  @keyframes rotating {
    from {
      transform: perspective(var(--perspective)) rotateX(var(--rotateX))
        rotateY(0);
    }
    to {
      transform: perspective(var(--perspective)) rotateX(var(--rotateX))
        rotateY(1turn);
    }
  }

  .card {
    position: absolute;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-radius: 12px;
    overflow: hidden;
    inset: 0;
    transform: rotateY(calc((360deg / ${e=>e.quantity}) * var(--index)))
      translateZ(var(--translateZ));
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease;
  }

  .card:hover {
    border-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.7);
  }

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  /* Efecto de brillo sutil sobre las imágenes */
  .card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 50%,
      rgba(0, 0, 0, 0.2) 100%
    );
    pointer-events: none;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .inner {
      --w: 100px;
      --h: 140px;
    }
  }
`,s={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.5}}},c={hidden:{},visible:{transition:{staggerChildren:.2}}},l=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(`div`,{className:`row gy-4`,children:[(0,i.jsx)(`div`,{className:`col-12`,children:(0,i.jsx)(`h2`,{className:`h1 text-center text-light mb-4`,children:`¿Por qué elegirnos?`})}),(0,i.jsx)(r.div,{className:`col-md-4`,initial:`hidden`,whileInView:`visible`,viewport:{once:!0,amount:.3},variants:s,children:(0,i.jsx)(`div`,{className:`card h-100 border-0 shadow-sm`,children:(0,i.jsxs)(`div`,{className:`card-body`,children:[(0,i.jsxs)(`h5`,{className:`card-title`,children:[(0,i.jsx)(`i`,{className:`bi bi-lightning-fill text-warning me-2`}),`Entrega rápida`]}),(0,i.jsx)(`p`,{className:`card-text text-muted paragraph`,children:`Ediciones profesionales en menos de 48 horas, sin sacrificar calidad.`})]})})}),(0,i.jsx)(r.div,{className:`col-md-4`,initial:`hidden`,whileInView:`visible`,viewport:{once:!0,amount:.3},variants:s,children:(0,i.jsx)(`div`,{className:`card h-100 border-0 shadow-sm`,children:(0,i.jsxs)(`div`,{className:`card-body`,children:[(0,i.jsxs)(`h5`,{className:`card-title`,children:[(0,i.jsx)(`i`,{className:`bi bi-people-fill text-success me-2`}),`Atención personalizada`]}),(0,i.jsx)(`p`,{className:`card-text text-muted paragraph`,children:`Asesoría previa, propuestas visuales y seguimiento detallado en cada proyecto.`})]})})}),(0,i.jsx)(r.div,{className:`col-md-4`,initial:`hidden`,whileInView:`visible`,viewport:{once:!0,amount:.3},variants:s,children:(0,i.jsx)(`div`,{className:`card h-100 border-0 shadow-sm`,children:(0,i.jsxs)(`div`,{className:`card-body`,children:[(0,i.jsxs)(`h5`,{className:`card-title`,children:[(0,i.jsx)(`i`,{className:`bi bi-camera-reels-fill text-primary me-2`}),`Creatividad visual`]}),(0,i.jsx)(`p`,{className:`card-text text-muted`,children:`Composiciones con estilo, color y narrativa para que tu marca destaque.`})]})})})]}),(0,i.jsx)(a,{quantity:10}),(0,i.jsxs)(r.div,{className:`row mt-5 pt-4`,initial:`hidden`,whileInView:`visible`,viewport:{once:!0,amount:.3},variants:c,children:[(0,i.jsxs)(r.div,{className:`order-2 order-lg-1 col-12 col-lg-6 text-center align-items-center d-flex flex-column gap-3 justify-content-center`,variants:s,children:[(0,i.jsx)(`h2`,{className:`text-light fs-1`,children:`Misión`}),(0,i.jsx)(`p`,{className:`text-light px-3`,children:`En Cuve Fotografía Cuauhtémoc, nuestra misión es capturar la esencia de cada momento con autenticidad y creatividad. Nos comprometemos a ofrecer un servicio personalizado, transformando lo cotidiano en inolvidable a través de imágenes que cuentan historias únicas.`})]}),(0,i.jsx)(r.div,{className:`order-1 order-lg-2 col-12 col-lg-6 justify-content-center d-flex align-items-center`,variants:s,children:(0,i.jsxs)(`div`,{className:`position-relative`,children:[(0,i.jsx)(`div`,{className:`bg-primary bg-opacity-10 rounded-circle p-5`,children:(0,i.jsx)(`i`,{className:`bi bi-camera2 text-light display-1 opacity-75`})}),(0,i.jsx)(`div`,{className:`position-absolute top-50 start-50 translate-middle`,children:(0,i.jsx)(`i`,{className:`bi bi-heart-fill text-danger opacity-50`,style:{fontSize:`2.5rem`}})})]})})]}),(0,i.jsxs)(r.div,{className:`row mt-4 pt-3`,initial:`hidden`,whileInView:`visible`,viewport:{once:!0,amount:.3},variants:c,children:[(0,i.jsx)(r.div,{className:`col-lg-6 col-12 justify-content-center d-flex align-items-center`,variants:s,children:(0,i.jsxs)(`div`,{className:`position-relative`,children:[(0,i.jsx)(`div`,{className:`bg-success bg-opacity-10 rounded-circle p-5`,children:(0,i.jsx)(`i`,{className:`bi bi-eye-fill text-light display-1 opacity-75`})}),(0,i.jsx)(`div`,{className:`position-absolute top-50 start-50 translate-middle`,children:(0,i.jsx)(`i`,{className:`bi bi-star-fill text-warning opacity-75`,style:{fontSize:`2rem`}})})]})}),(0,i.jsxs)(r.div,{className:`text-center col-lg-6 col-12 align-items-center d-flex flex-column gap-3 justify-content-center`,variants:s,children:[(0,i.jsx)(`h2`,{className:`text-light fs-1`,children:`Visión`}),(0,i.jsx)(`p`,{className:`text-light px-3`,children:`Ser reconocidos como los mejores profesionales en el ámbito fotográfico, destacando por nuestra excelencia técnica y creativa, siempre con un enfoque personalizado y comprometido con la satisfacción del cliente.`})]})]}),(0,i.jsxs)(r.div,{className:`row my-5 py-4 text-center g-4`,initial:`hidden`,whileInView:`visible`,viewport:{once:!0,amount:.2},variants:c,children:[(0,i.jsx)(`div`,{className:`col-12`,children:(0,i.jsx)(`h3`,{className:`text-light fs-2 mb-4`,children:`Nuestra trayectoria en números`})}),(0,i.jsx)(r.div,{className:`col-6 col-md-3`,variants:s,children:(0,i.jsxs)(`div`,{className:`p-3`,children:[(0,i.jsx)(`h3`,{className:`display-4 fw-bold text-warning`,children:`+500`}),(0,i.jsx)(`p`,{className:`text-light text-uppercase small tracking-wide`,children:`Sesiones Realizadas`})]})}),(0,i.jsx)(r.div,{className:`col-6 col-md-3`,variants:s,children:(0,i.jsxs)(`div`,{className:`p-3`,children:[(0,i.jsx)(`h3`,{className:`display-4 fw-bold text-info`,children:`98%`}),(0,i.jsx)(`p`,{className:`text-light text-uppercase small`,children:`Clientes Satisfechos`})]})}),(0,i.jsx)(r.div,{className:`col-6 col-md-3`,variants:s,children:(0,i.jsxs)(`div`,{className:`p-3`,children:[(0,i.jsx)(`h3`,{className:`display-4 fw-bold text-success`,children:`8+`}),(0,i.jsx)(`p`,{className:`text-light text-uppercase small`,children:`Años de Experiencia`})]})}),(0,i.jsx)(r.div,{className:`col-6 col-md-3`,variants:s,children:(0,i.jsxs)(`div`,{className:`p-3`,children:[(0,i.jsx)(`h3`,{className:`display-4 fw-bold text-danger`,children:`24/7`}),(0,i.jsx)(`p`,{className:`text-light text-uppercase small`,children:`Soporte Post-Venta`})]})})]}),(0,i.jsxs)(r.div,{className:`row mt-4 pt-3`,initial:`hidden`,whileInView:`visible`,viewport:{once:!0,amount:.1},variants:c,children:[(0,i.jsx)(`div`,{className:`col-12`,children:(0,i.jsx)(`h2`,{className:`text-light text-center fs-1 mb-4`,children:`Proyectos recientes`})}),(0,i.jsx)(r.div,{className:`col-md-4 mb-4`,variants:s,children:(0,i.jsxs)(`div`,{className:`position-relative overflow-hidden rounded-4 shadow-lg`,style:{height:`280px`},children:[(0,i.jsx)(`img`,{src:`https://images.pexels.com/photos/1730877/pexels-photo-1730877.jpeg?auto=compress&cs=tinysrgb&w=600`,alt:`Retrato`,className:`w-100 h-100 object-fit-cover`,style:{objectFit:`cover`}}),(0,i.jsx)(`div`,{className:`position-absolute bottom-0 start-0 w-100 p-3 bg-dark bg-opacity-50`,children:(0,i.jsxs)(`span`,{className:`text-light fw-semibold`,children:[(0,i.jsx)(`i`,{className:`bi bi-person-fill me-2`}),`Retrato Editorial`]})})]})}),(0,i.jsx)(r.div,{className:`col-md-4 mb-4`,variants:s,children:(0,i.jsxs)(`div`,{className:`position-relative overflow-hidden rounded-4 shadow-lg`,style:{height:`280px`},children:[(0,i.jsx)(`img`,{src:`https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=600`,alt:`Producto`,className:`w-100 h-100`,style:{objectFit:`cover`}}),(0,i.jsx)(`div`,{className:`position-absolute bottom-0 start-0 w-100 p-3 bg-dark bg-opacity-50`,children:(0,i.jsxs)(`span`,{className:`text-light fw-semibold`,children:[(0,i.jsx)(`i`,{className:`bi bi-box-seam me-2`}),`Fotografía de Producto`]})})]})}),(0,i.jsx)(r.div,{className:`col-md-4 mb-4`,variants:s,children:(0,i.jsxs)(`div`,{className:`position-relative overflow-hidden rounded-4 shadow-lg`,style:{height:`280px`},children:[(0,i.jsx)(`img`,{src:`https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=600`,alt:`Evento`,className:`w-100 h-100`,style:{objectFit:`cover`}}),(0,i.jsx)(`div`,{className:`position-absolute bottom-0 start-0 w-100 p-3 bg-dark bg-opacity-50`,children:(0,i.jsxs)(`span`,{className:`text-light fw-semibold`,children:[(0,i.jsx)(`i`,{className:`bi bi-calendar-event me-2`}),`Eventos Sociales`]})})]})})]}),(0,i.jsx)(r.div,{className:`row my-4`,initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:.6},children:(0,i.jsx)(`div`,{className:`col-12`,children:(0,i.jsxs)(`div`,{className:`p-5 rounded-4 text-center`,style:{background:`linear-gradient(145deg, rgba(255,255,255,0.1), rgba(0,0,0,0.2))`,backdropFilter:`blur(4px)`,border:`1px solid rgba(255,255,255,0.15)`},children:[(0,i.jsx)(`h3`,{className:`text-light display-6 fw-light`,children:`¿Listo para inmortalizar tu momento?`}),(0,i.jsx)(`p`,{className:`text-light opacity-75 mb-4`,children:`Agenda una cita previa sin costo para conocernos y planear tu sesión ideal.`}),(0,i.jsxs)(`button`,{className:`btn btn-outline-light btn-lg px-5 rounded-pill`,children:[(0,i.jsx)(`i`,{className:`bi bi-calendar-check me-2`}),`Reservar Ahora`]})]})})}),(0,i.jsx)(`hr`,{className:`text-light`}),(0,i.jsxs)(`div`,{className:`horario`,children:[(0,i.jsx)(`h2`,{className:`text-light text-center fs-1 mb-4`,children:`Horario de atención`}),(0,i.jsxs)(`ul`,{className:`list-unstyled text-light text-center`,children:[(0,i.jsxs)(`li`,{className:`fs-5 mb-2`,children:[(0,i.jsx)(`i`,{className:`bi bi-briefcase-fill me-2 text-info`}),`Lunes a Viernes: 9:00 AM - 7:00 PM`]}),(0,i.jsxs)(`li`,{className:`fs-5 mb-4`,children:[(0,i.jsx)(`i`,{className:`bi bi-calendar-week me-2 text-success`}),`Sábados: 10:00 AM - 5:00 PM`]}),(0,i.jsxs)(`li`,{className:`fs-6 text-white-50`,children:[(0,i.jsx)(`i`,{className:`bi bi-moon-stars-fill me-2`}),`Domingos: Cerrado (Solo eventos programados)`]})]}),(0,i.jsx)(`iframe`,{className:`w-100 border rounded shadow opacity-75 mt-4`,style:{height:`500px`},src:`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d438.68205064976996!2d-106.86770678002708!3d28.4054821408466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86c1ca531e75ee0f%3A0x6570297e4c14ef2a!2sCUVE%20FOTOGRAFIA!5e0!3m2!1ses-419!2smx!4v1775522932074!5m2!1ses-419!2smx`,allowFullScreen:``,loading:`lazy`,referrerPolicy:`no-referrer-when-downgrade`})]})]});export{l as default};