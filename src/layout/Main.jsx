import React from 'react'
import { motion } from 'framer-motion'

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
    <div className='row gy-4 '>
      <div className='col-12'>
        <h2 className='h1 fw-bold text-center text-light mb-4'>¿Por qué elegirnos?</h2>
      </div>

      <motion.div className='col-md-4' initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.3 }} variants={cards}>
        <div className='card h-100 border-0 shadow-sm'>
          <div className='card-body'>
            <h5 className='card-title'><i className='bi bi-lightning-fill text-warning me-2 '></i>Entrega rápida</h5>
            <p className='card-text text-muted'>Ediciones profesionales en menos de 48 horas, sin sacrificar calidad.</p>
          </div>
        </div>
      </motion.div>

      <motion.div className='col-md-4' initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.3 }} variants={cards}>
        <div className='card h-100 border-0 shadow-sm '>
          <div className='card-body'>
            <h5 className='card-title'><i className='bi bi-people-fill text-success me-2'></i>Atención personalizada</h5>
            <p className='card-text text-muted'>Asesoría previa, propuestas visuales y seguimiento detallado en cada proyecto.</p>
          </div>
        </div>
      </motion.div>

      <motion.div className='col-md-4' initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.3 }} variants={cards}>
        <div className='card h-100 border-0 shadow-sm'>
          <div className='card-body'>
            <h5 className='card-title'><i className='bi bi-camera-reels-fill text-primary me-2'></i>Creatividad visual</h5>
            <p className='card-text text-muted'>Composiciones con estilo, color y narrativa para que tu marca destaque.</p>
          </div>
        </div>
      </motion.div>

    </div>
    <motion.div className="row" initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.3 }} variants={cards}>
        <div className="order-2 order-lg-1 col-12 col-lg-6 text-center align-items-center d-flex flex-column gap-3 justify-content-center">
            <h2 className='text-light'>Misión</h2>
            <p className='text-light '>En Cuve Fotografía Cuauhtémoc, nuestra misión es capturar la esencia de cada momento con autenticidad y creatividad. Nos comprometemos a ofrecer un servicio personalizado, transformando lo cotidiano en inolvidable a través de imágenes que cuentan historias únicas.</p>
        </div>
        <div className="order-1 order-lg-2 col-12 col-lg-6 justify-content-center d-flex align-items-center">
            <img className='img-fluid' style={{maxWidth:"300px"}} src="/logocam.png" alt="" />
        </div>
    </motion.div>
    <motion.div className="row" initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.3 }} variants={cards}>
        <div className="col-lg-6 col-12 justify-content-center d-flex align-items-center">
            <img className='img-fluid' style={{maxWidth:"300px"}} src="/logocam.png" alt="" />
        </div>
        <div className=" text-center col-lg-6 col-12 align-items-center d-flex flex-column gap-3 justify-content-center">
            <h2 className='text-light'>Visión</h2>
            <p className='text-light'>Ser reconocidos como los mejores profesionales en el ámbito fotográfico, destacando por nuestra excelencia técnica y creativa, siempre con un enfoque personalizado y comprometido con la satisfacción del cliente.</p>
        </div>
    </motion.div>
    </>
  )
}

export default Main