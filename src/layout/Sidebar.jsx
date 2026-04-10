import React from 'react'
import Button from '../components/Service-button'
import { useNavigate } from 'react-router-dom';



const Sidebar = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}Gallery-data.json`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error fetching gallery data:", error));
  }, []);
  return (
    <div className='sidebar d-flex flex-column gap-4 p-4' >
        <h2 className='text-light text-center margin-auto title'>Servicios</h2>
        <hr className='text-light border '/>
        <div className='d-flex flex-column gap-3  '>
          {data.map((item, index) => (
            <Button key={index} Name={item.title} />
          ))}

        </div>
    </div>
  )
}

export default Sidebar