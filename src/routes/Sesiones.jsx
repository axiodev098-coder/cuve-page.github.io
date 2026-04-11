import React from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import Sidebar from '../layout/Sidebar'
import ZenfolioGallery from '../components/ZenfolioGallery'

const Sesiones = () => {
  return (
    <>
      <div className="row">
        <div className="col-12 shadow mb-3 rounded">
          <Header />
        </div>
      </div>

      <div className="row d-flex gap-3">
        <div className="col-12 rounded glass-window shadow mb-3">
            <ZenfolioGallery />
        </div>
      </div>

      <div className="row">
        <Footer />
      </div>
    </>
  )
}

export default Sesiones