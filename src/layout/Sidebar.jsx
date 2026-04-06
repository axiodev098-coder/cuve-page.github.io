import React from 'react'
import Button from '../components/Service-button'

const Sidebar = () => {
  return (
    <div>
        <h2 className='text-light text-center margin-auto'>Servicios</h2>
        <hr className='text-light border '/>
        <div className='d-flex flex-column gap-3  '>
            <Button Name={'Fotografia'} link={"#"}/>
            <Button Name={'Video'} link={"#"}/>
            <Button Name={'Bordados'} link={"#"}/>
            <Button Name={'Impresiones'} link={"#"}/>
            <Button Name={'Paginas Web'} link={"#"}/>
            <Button Name={'Sublimacion'} link={"#"}/>
            <Button Name={'Grabados laser'} link={"#"}/>

        </div>
    </div>
  )
}

export default Sidebar