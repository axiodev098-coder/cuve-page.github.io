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
    <motion.div className='row align-items-center p-4 rounded-4 shadow-sm glass-window' initial='hidden' animate='visible' variants={heroVariants}>
      <motion.div className="col-lg-6 col-12 justify-content-center d-flex flex-column gap-3 p-4 text-center text-lg-start" initial='hidden' animate='visible' variants={heroVariants}>
        <h1 className='display-4 fw-bold text-light'>Estudio de Fotografía y Video</h1>
        <p className='lead text-light'>
          Capturamos momentos auténticos con luz, emoción y estilo cinematográfico.
          Deja que tu historia brille en cada imagen y transforma lo cotidiano en inolvidable.
        </p>
        <p className='text-light'>Sesiones de boda, retrato, eventos y branding con atención 100% personalizada.</p>
        <div className='d-flex flex-column flex-sm-row gap-2 justify-content-center justify-content-lg-start'>
          <button className='btn btn-secondary btn-lg'>Reserva tu sesión <i className="bi bi-camera-fill"></i></button>
          <a className='btn btn-outline-success btn-lg' href='https://wa.me/6251093894?text=Hola%20Cuve!' target='_blank' rel='noreferrer'>WhatsApp <i className="bi bi-whatsapp"></i></a>
        </div>
      </motion.div>
      <motion.div className="col-lg-6 col-12 pt-3 pt-lg-0" initial='hidden' animate='visible' variants={heroVariants}>
        <div className='border rounded-4 overflow-hidden shadow'>
          <Carrousel images={["/carrousel/1.webp", "/carrousel/2.webp", "/carrousel/3.webp", "/carrousel/4.webp"]} space={10} slide={1} delay={3000} />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Hero