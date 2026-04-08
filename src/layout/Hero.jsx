import React from 'react'
import { motion } from 'framer-motion'
import Carrousel from '../components/Carrousel'

const heroVariants = {
  hidden: { opacity: 0, y: 45 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeInOut',
      when: 'beforeChildren',
      staggerChildren: 0.18,
      delayChildren: 0.2
    }
  }
}

const Hero = () => {
  return (
    <div className="position-relative w-100 overflow-hidden rounded-4 shadow-sm glass-window" style={{ height: "80vh" }}>
      
      {/* 🎠 Carousel fondo */}
      <div className="position-absolute top-0 start-0 w-100 h-100">
        <Carrousel
          images={[
            "/cuve-page.github.io/carrousel/1.webp",
            "/cuve-page.github.io/carrousel/2.webp",
            "/cuve-page.github.io/carrousel/3.webp",
            "/cuve-page.github.io/carrousel/4.webp"
          ]}
          space={10}
          slide={1}
          delay={3000}
        />
      </div>

      {/* 🌓 Overlay oscuro (para que el texto no se pierda como tus ganas de debuggear) */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: "rgba(0,0,0,0.5)", zIndex: 1 }} />

      {/* 🧠 Contenido encima */}
      <motion.div
        className="position-relative h-100 d-flex flex-column justify-content-center align-items-center text-center text-light px-4"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
        style={{ zIndex: 2 }}
      >
        <h1 className='display-4'>Estudio de Fotografía y Video</h1>

        <p className='lead'>
          Capturamos momentos auténticos con luz, emoción y estilo cinematográfico.
        </p>

        <p>
          Sesiones de boda, retrato, eventos y branding con atención 100% personalizada.
        </p>

        <div className='d-flex flex-column flex-sm-row gap-2 mt-3'>
          <button className='btn btn-secondary btn-lg'>
            Reserva tu sesión <i className="bi bi-camera-fill"></i>
          </button>

          <a
            className='btn btn-outline-success btn-lg'
            href='https://wa.me/6251093894?text=Hola%20Cuve!'
            target='_blank'
            rel='noreferrer'
          >
            WhatsApp <i className="bi bi-whatsapp"></i>
          </a>
        </div>
      </motion.div>
    </div>
  )
}

export default Hero