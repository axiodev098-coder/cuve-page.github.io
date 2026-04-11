import React from 'react'
import { motion } from 'framer-motion'
import PhotoCarousel3D from '../components/PhotoCarousel3D'

const cards = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

const parent = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } }
}

const Main = () => {
  return (
    <>
      {/* SECCIÓN: ¿POR QUÉ ELEGIRNOS? */}
      <div className='row gy-4'>
        <div className='col-12'>
          <h2 className='h1 text-center text-light mb-4'>¿Por qué elegirnos?</h2>
        </div>

        <motion.div 
          className='col-md-4' 
          initial='hidden' 
          whileInView='visible' 
          viewport={{ once: true, amount: 0.3 }} 
          variants={cards}
        >
          <div className='card h-100 border-0 shadow-sm'>
            <div className='card-body'>
              <h5 className='card-title'>
                <i className='bi bi-lightning-fill text-warning me-2'></i>
                Entrega rápida
              </h5>
              <p className='card-text text-muted paragraph'>
                Ediciones profesionales en menos de 48 horas, sin sacrificar calidad.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className='col-md-4' 
          initial='hidden' 
          whileInView='visible' 
          viewport={{ once: true, amount: 0.3 }} 
          variants={cards}
        >
          <div className='card h-100 border-0 shadow-sm'>
            <div className='card-body'>
              <h5 className='card-title'>
                <i className='bi bi-people-fill text-success me-2'></i>
                Atención personalizada
              </h5>
              <p className='card-text text-muted paragraph'>
                Asesoría previa, propuestas visuales y seguimiento detallado en cada proyecto.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className='col-md-4' 
          initial='hidden' 
          whileInView='visible' 
          viewport={{ once: true, amount: 0.3 }} 
          variants={cards}
        >
          <div className='card h-100 border-0 shadow-sm'>
            <div className='card-body'>
              <h5 className='card-title'>
                <i className='bi bi-camera-reels-fill text-primary me-2'></i>
                Creatividad visual
              </h5>
              <p className='card-text text-muted'>
                Composiciones con estilo, color y narrativa para que tu marca destaque.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <PhotoCarousel3D quantity={10} />

      {/* SECCIÓN: MISIÓN */}
      <motion.div 
        className="row mt-5 pt-4" 
        initial='hidden' 
        whileInView='visible' 
        viewport={{ once: true, amount: 0.3 }} 
        variants={parent}
      >
        <motion.div 
          className="order-2 order-lg-1 col-12 col-lg-6 text-center align-items-center d-flex flex-column gap-3 justify-content-center"
          variants={cards}
        >
          <h2 className='text-light fs-1'>Misión</h2>
          <p className='text-light px-3'>
            En Cuve Fotografía Cuauhtémoc, nuestra misión es capturar la esencia de cada momento 
            con autenticidad y creatividad. Nos comprometemos a ofrecer un servicio personalizado, 
            transformando lo cotidiano en inolvidable a través de imágenes que cuentan historias únicas.
          </p>
        </motion.div>
        
        <motion.div 
          className="order-1 order-lg-2 col-12 col-lg-6 justify-content-center d-flex align-items-center"
          variants={cards}
        >
          <div className="position-relative">
            <div className="bg-primary bg-opacity-10 rounded-circle p-5">
              <i className="bi bi-camera2 text-light display-1 opacity-75"></i>
            </div>
            <div className="position-absolute top-50 start-50 translate-middle">
              <i className="bi bi-heart-fill text-danger opacity-50" style={{ fontSize: '2.5rem' }}></i>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* SECCIÓN: VISIÓN */}
      <motion.div 
        className="row mt-4 pt-3" 
        initial='hidden' 
        whileInView='visible' 
        viewport={{ once: true, amount: 0.3 }} 
        variants={parent}
      >
        <motion.div 
          className="col-lg-6 col-12 justify-content-center d-flex align-items-center"
          variants={cards}
        >
          <div className="position-relative">
            <div className="bg-success bg-opacity-10 rounded-circle p-5">
              <i className="bi bi-eye-fill text-light display-1 opacity-75"></i>
            </div>
            <div className="position-absolute top-50 start-50 translate-middle">
              <i className="bi bi-star-fill text-warning opacity-75" style={{ fontSize: '2rem' }}></i>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="text-center col-lg-6 col-12 align-items-center d-flex flex-column gap-3 justify-content-center"
          variants={cards}
        >
          <h2 className='text-light fs-1'>Visión</h2>
          <p className='text-light px-3'>
            Ser reconocidos como los mejores profesionales en el ámbito fotográfico, 
            destacando por nuestra excelencia técnica y creativa, siempre con un enfoque 
            personalizado y comprometido con la satisfacción del cliente.
          </p>
        </motion.div>
      </motion.div>

      {/* SECCIÓN: ESTADÍSTICAS */}
      <motion.div 
        className="row my-5 py-4 text-center g-4" 
        initial='hidden' 
        whileInView='visible' 
        viewport={{ once: true, amount: 0.2 }} 
        variants={parent}
      >
        <div className="col-12">
          <h3 className="text-light fs-2 mb-4">Nuestra trayectoria en números</h3>
        </div>
        
        <motion.div className="col-6 col-md-3" variants={cards}>
          <div className="p-3">
            <h3 className="display-4 fw-bold text-warning">+500</h3>
            <p className="text-light text-uppercase small tracking-wide">Sesiones Realizadas</p>
          </div>
        </motion.div>
        
        <motion.div className="col-6 col-md-3" variants={cards}>
          <div className="p-3">
            <h3 className="display-4 fw-bold text-info">98%</h3>
            <p className="text-light text-uppercase small">Clientes Satisfechos</p>
          </div>
        </motion.div>
        
        <motion.div className="col-6 col-md-3" variants={cards}>
          <div className="p-3">
            <h3 className="display-4 fw-bold text-success">40+</h3>
            <p className="text-light text-uppercase small">Años de Experiencia</p>
          </div>
        </motion.div>
        
        <motion.div className="col-6 col-md-3" variants={cards}>
          <div className="p-3">
            <h3 className="display-4 fw-bold text-danger">24/7</h3>
            <p className="text-light text-uppercase small">Soporte Post-Venta</p>
          </div>
        </motion.div>
      </motion.div>

      {/* SECCIÓN: GALERÍA DE TRABAJOS DESTACADOS */}
      <motion.div 
        className="row mt-4 pt-3" 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.1 }} 
        variants={parent}
      >
        <div className="col-12">
          <h2 className='text-light text-center fs-1 mb-4'>Proyectos Destacados</h2>
        </div>
        
        {/* Imagen 1 - Retrato */}
        <motion.div className="col-md-4 mb-4" variants={cards}>
          <div className="position-relative overflow-hidden rounded-4 shadow-lg" style={{ height: '280px' }}>
            <img 
              src="https://images.pexels.com/photos/1730877/pexels-photo-1730877.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Retrato" 
              className="w-100 h-100 object-fit-cover"
              style={{ objectFit: 'cover' }}
            />
            <div className="position-absolute bottom-0 start-0 w-100 p-3 bg-dark bg-opacity-50">
              <span className="text-light fw-semibold">
                <i className="bi bi-person-fill me-2"></i>Retrato Editorial
              </span>
            </div>
          </div>
        </motion.div>

        {/* Imagen 2 - Producto */}
        <motion.div className="col-md-4 mb-4" variants={cards}>
          <div className="position-relative overflow-hidden rounded-4 shadow-lg" style={{ height: '280px' }}>
            <img 
              src="https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Producto" 
              className="w-100 h-100"
              style={{ objectFit: 'cover' }}
            />
            <div className="position-absolute bottom-0 start-0 w-100 p-3 bg-dark bg-opacity-50">
              <span className="text-light fw-semibold">
                <i className="bi bi-box-seam me-2"></i>Fotografía de Producto
              </span>
            </div>
          </div>
        </motion.div>

        {/* Imagen 3 - Evento */}
        <motion.div className="col-md-4 mb-4" variants={cards}>
          <div className="position-relative overflow-hidden rounded-4 shadow-lg" style={{ height: '280px' }}>
            <img 
              src="https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Evento" 
              className="w-100 h-100"
              style={{ objectFit: 'cover' }}
            />
            <div className="position-absolute bottom-0 start-0 w-100 p-3 bg-dark bg-opacity-50">
              <span className="text-light fw-semibold">
                <i className="bi bi-calendar-event me-2"></i>Eventos Sociales
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* SECCIÓN: CALL TO ACTION */}
      <motion.div 
        className="row my-4" 
        initial={{ opacity: 0, scale: 0.9 }} 
        whileInView={{ opacity: 1, scale: 1 }} 
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="col-12">
          <div 
            className="p-5 rounded-4 text-center" 
            style={{ 
              background: 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(0,0,0,0.2))', 
              backdropFilter: 'blur(4px)', 
              border: '1px solid rgba(255,255,255,0.15)' 
            }}
          >
            <h3 className="text-light display-6 fw-light">¿Listo para inmortalizar tu momento?</h3>
            <p className="text-light opacity-75 mb-4">
              Agenda una cita previa sin costo para conocernos y planear tu sesión ideal.
            </p>
            <button className="btn btn-outline-light btn-lg px-5 rounded-pill">
              <i className="bi bi-calendar-check me-2"></i>Reservar Ahora
            </button>
          </div>
        </div>
      </motion.div>

      <hr className='text-light' />

      {/* SECCIÓN: HORARIO Y MAPA */}
      <div className="horario">
        <h2 className='text-light text-center fs-1 mb-4'>Horario de atención</h2>
        <ul className='list-unstyled text-light text-center'>
          <li className="fs-5 mb-2">
            <i className="bi bi-briefcase-fill me-2 text-info"></i>
            Lunes a Viernes: 9:00 AM - 7:00 PM
          </li>
          <li className="fs-5 mb-4">
            <i className="bi bi-calendar-week me-2 text-success"></i>
            Sábados: 10:00 AM - 5:00 PM
          </li>
          <li className="fs-6 text-white-50">
            <i className="bi bi-moon-stars-fill me-2"></i>
            Domingos: Cerrado (Solo eventos programados)
          </li>
        </ul>
        
        <iframe 
          className='w-100 border rounded shadow opacity-75 mt-4' 
          style={{ height: "500px" }} 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d438.68205064976996!2d-106.86770678002708!3d28.4054821408466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86c1ca531e75ee0f%3A0x6570297e4c14ef2a!2sCUVE%20FOTOGRAFIA!5e0!3m2!1ses-419!2smx!4v1775522932074!5m2!1ses-419!2smx"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  )
}

export default Main