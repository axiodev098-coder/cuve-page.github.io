import React from 'react'

const Footer = () => {
  return (
    <footer className="glass-window rounded-4 shadow-sm p-4 mt-4">
      <div className="row gy-4">
        <div className="col-md-4 col-12">
          <img src="./logo.png" alt="Logo" className="img-fluid" style={{maxWidth:"200px"}} />
          <p className="text-light opacity-75">
            Momentos auténticos en cada imagen. Sesiones de boda, retrato, eventos y branding con estilo cinematográfico.
          </p>
        </div>
        <div className="col-md-4 col-12">
          <h6 className="text-white fw-bold">Enlaces rápidos</h6>
          <ul className="list-unstyled">
            <li><a className="text-light text-decoration-none" href="#">Inicio</a></li>
            <li><a className="text-light text-decoration-none" href="#">Servicios</a></li>
            <li><a className="text-light text-decoration-none" href="#">Portafolio</a></li>
            <li><a className="text-light text-decoration-none" href="#">Contacto</a></li>
          </ul>
        </div>
        <div className="col-md-4 col-12">
          <h6 className="text-white fw-bold">Contacto</h6>
          <p className="text-light mb-2">
            <i className="bi bi-envelope-fill me-2"></i>
            contacto@cuvefotografia.com
          </p>
          <p className="text-light mb-2">
            <i className="bi bi-telephone-fill me-2"></i>
            +52 625 109 3894
          </p>
          <p className="text-light mb-0">
            <i className="bi bi-geo-alt-fill me-2"></i>
            Cuauhtémoc, Chihuahua
          </p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12 text-center text-light opacity-75">
          &copy; {new Date().getFullYear()} Cuve Fotografía. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}

export default Footer