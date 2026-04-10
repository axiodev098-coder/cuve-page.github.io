import { useLocation } from "react-router-dom";
import React from "react";
import { useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { motion } from "framer-motion";
import SwiperSlider from "../components/SwiperSlider";
import ListImages from "../components/List-images";
import BasicModal from "../components/Modal";
import Sidebar from "../layout/Sidebar";

const Gallery = () => {
  const [data, setData] = React.useState([]);
  const location = useLocation();
  const service = location.state?.service; // título del servicio desde Sidebar
  const [selectedImages, setSelectedImages] = useState([]);

  React.useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}Gallery-data.json`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((err) => console.error(err));
  }, []);

  // filtrar el servicio seleccionado
  const filteredService = service
    ? data.find((item) => item.title === service)
    : null;

  // todas las imágenes de todas las categorías del servicio
  const sliderImages = filteredService
    ? filteredService.categories.flatMap((cat) => cat.images || [])
    : [];
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="row">
        <div className="col-12 shadow mb-3 rounded">
          <Header />
        </div>
      </div>

      <div className="row d-flex gap-3">
        <div className="col-10 rounded glass-window shadow mb-3">
          <h2 className="text-light text-center p-4">
            {filteredService ? filteredService.title : "Galería"}
          </h2>


          <div className="gallery row d-flex justify-content-center gap-3 p-4">
            {filteredService?.categories.map((cat, index) => (
              <motion.div
                key={index}
                className="gallery-item col-lg-3 col-md-4 col-sm-6 col-12 rounded overflow-hidden shadow"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <BasicModal open={open} onClose={() => setOpen(false)}>
  <ListImages images={selectedImages} />
</BasicModal>
                {cat.images[0] && (
                  <img
                    src={cat.images[0]}
                    alt={cat.title || cat.name}
                    className="img-fluid im rounded"
                    style={{ cursor: "pointer",width:"100%", height:"400px", objectFit:"cover"  }}

                    onClick={() => {
                      setSelectedImages(cat.images);
                      setOpen(true);
                    }}
                  />
                )}
                <div className="gallery-info p-2">
                  <h5 className="text-light">{cat.title || cat.name}</h5>
                  {cat.description && (
                    <p className="text-light opacity-75">{cat.description}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="col rounded glass-window shadow mb-3">
          <Sidebar />
        </div>
      </div>

      <div className="row">
        <Footer />
      </div>
    </>
  );
};

export default Gallery;
