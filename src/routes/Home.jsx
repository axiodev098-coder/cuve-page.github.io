import React, { Suspense, lazy } from 'react'
import Loading from '../components/Loading'

const Header = lazy(() => import('../layout/Header'))
const Hero = lazy(() => Promise.all([import('../layout/Hero'), new Promise(resolve => setTimeout(resolve, 2500))]).then(([module]) => module))
const Main = lazy(() => import('../layout/Main'))
const Sidebar = lazy(() => import('../layout/Sidebar'))
const Footer = lazy(() => import('../layout/Footer')) 
const Home = () => {
  return (
    <Suspense fallback={<Loading />}>
      <>
        {/* Header */}
        <div className="row ">
          <div className="col-12  shadow  mb-3 rounded ">
            <Header />
          </div>
        </div>

        {/* Hero */}
        <div className="row">
          <div className="col-12   mb-3 ">
            <Suspense fallback={<Loading />}>
              <Hero />
            </Suspense>
          </div>
        </div>

        {/* Main content + sidebar */}
        <div className="row d-flex gap-3">
          <div className="col-lg-10 col-12 rounded glass-window shadow  mb-3">
            <Main />
          </div>
          <div className="col  shadow rounded mb-3 glass-window">
            <Sidebar />
          </div>
        </div>

        {/* Footer */}
        <div className="row ">
          <Footer />
        </div>
      </>
    </Suspense>
  )
}
export default Home