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
        <h2 className='h1 text-center text-light mb-4'>¿Por qué elegirnos?</h2>
      </div>

      <motion.div className='col-md-4' initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.3 }} variants={cards}>
        <div className='card h-100 border-0 shadow-sm'>
          <div className='card-body'>
            <h5 className='card-title'><i className='bi bi-lightning-fill text-warning me-2 '></i>Entrega rápida</h5>
            <p className='card-text text-muted paragraph'>Ediciones profesionales en menos de 48 horas, sin sacrificar calidad.</p>
          </div>
        </div>
      </motion.div>

      <motion.div className='col-md-4' initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.3 }} variants={cards}>
        <div className='card h-100 border-0 shadow-sm '>
          <div className='card-body'>
            <h5 className='card-title'><i className='bi bi-people-fill text-success me-2'></i>Atención personalizada</h5>
            <p className='card-text text-muted paragraph'>Asesoría previa, propuestas visuales y seguimiento detallado en cada proyecto.</p>
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
            <h2 className='text-light fs-1'>Misión</h2>
            <p className='text-light'>En Cuve Fotografía Cuauhtémoc, nuestra misión es capturar la esencia de cada momento con autenticidad y creatividad. Nos comprometemos a ofrecer un servicio personalizado, transformando lo cotidiano en inolvidable a través de imágenes que cuentan historias únicas.</p>
        </div>
        <div className="order-1 order-lg-2 col-12 col-lg-6 justify-content-center d-flex align-items-center">
        </div>
    </motion.div>
    <motion.div className="row" initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.3 }} variants={cards}>
        <div className="col-lg-6 col-12 justify-content-center d-flex align-items-center">
        </div>
        <div className=" text-center col-lg-6 col-12 align-items-center d-flex flex-column gap-3 justify-content-center">
            <h2 className='text-light fs-1'>Visión</h2>
            <p className='text-light'>Ser reconocidos como los mejores profesionales en el ámbito fotográfico, destacando por nuestra excelencia técnica y creativa, siempre con un enfoque personalizado y comprometido con la satisfacción del cliente.</p>
        </div>
    </motion.div>
    <hr className='text-light'/>
    <div className="horario">
      <h2 className='text-light text-center fs-1 mb-4'>Horario de atención</h2>
      <ul className='list-unstyled text-light text-center'>
        <li>Lunes a Viernes: 9:00 AM - 7:00 PM</li>
        <li>Sábados: 10:00 AM - 5:00 PM</li>
      </ul>
      
        <iframe className='w-100 border rounded shadow opacity-75' style={{height:"600px"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d438.68205064976996!2d-106.86770678002708!3d28.4054821408466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86c1ca531e75ee0f%3A0x6570297e4c14ef2a!2sCUVE%20FOTOGRAFIA!5e0!3m2!1ses-419!2smx!4v1775522932074!5m2!1ses-419!2smx"></iframe>
      
    </div>
    </>
  )
}

export default Main