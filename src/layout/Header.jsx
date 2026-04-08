import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Switch from '../components/Switch'
import {useNavigate} from 'react-router-dom'


const headerVariants = {
  hidden: { opacity: 0, y: -24 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: 'easeOut' } }
}

const linkVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: i => ({ opacity: 1, y: 0, transition: { delay: 0.35 + i * 0.12, duration: 0.5 } })
}

const Header = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navigation = [
    { label: 'Home', href: '/' },
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Disabled', href: '/disabled' }
  ]

  return (
    <motion.div className="glass-window row d-flex align-items-center text-white" variants={headerVariants} initial="hidden" animate="visible">
      <motion.div
        className="logo col-5"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <img className='img-fluid m-3' src="/cuve-page.github.io/logo.png" alt="Logo" style={{ width: '250px' }} />
      </motion.div>

      <nav className="navbar navbar-expand-lg col-7 bg-transparent ">
        <div className="container-fluid d-flex justify-content-end">
          {isMobile && <Switch checked={isOpen} onChange={() => setIsOpen(!isOpen)} />}
          <div className={`collapse navbar-collapse ${!isMobile || isOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav nav">
              {navigation.map((item, index) => (
                <motion.li
                  key={item.label}
                  className="nav-item"
                  custom={index}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <a className="nav-link text-white" onClick={() => navigate(item.href)}>
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </motion.div>
  )
}

export default Header