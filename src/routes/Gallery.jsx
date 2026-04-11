import { useLocation } from "react-router-dom";
import React from "react";
import { useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { motion } from "framer-motion";
import Sidebar from "../layout/Sidebar";
import {
  Dialog,
  IconButton,
  Box,
  Typography,
  useTheme,
  alpha
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Gallery = () => {
  const [data, setData] = React.useState([]);
  const location = useLocation();
  const service = location.state?.service;
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [expandedImage, setExpandedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  React.useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}Gallery-data.json`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((err) => console.error(err));
  }, []);

  const filteredService = service
    ? data.find((item) => item.title === service)
    : null;

  const handleImageClick = (image, index) => {
    setExpandedImage(image);
    setCurrentImageIndex(index);
  };

  const handleCloseExpanded = () => {
    setExpandedImage(null);
  };

  const handleNextImage = () => {
    if (selectedCategory && currentImageIndex < selectedCategory.images.length - 1) {
      const newIndex = currentImageIndex + 1;
      setCurrentImageIndex(newIndex);
      setExpandedImage(selectedCategory.images[newIndex]);
    }
  };

  const handlePrevImage = () => {
    if (selectedCategory && currentImageIndex > 0) {
      const newIndex = currentImageIndex - 1;
      setCurrentImageIndex(newIndex);
      setExpandedImage(selectedCategory.images[newIndex]);
    }
  };

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

          {/* GALERÍA MEJORADA - Solo esto cambia */}
          <div className="gallery row d-flex justify-content-center gap-3 p-4">
            {filteredService?.categories.map((cat, index) => (
              <motion.div
                key={index}
                className="gallery-item col-lg-3 col-md-4 col-sm-6 col-12 rounded overflow-hidden shadow"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                style={{ cursor: "pointer" }}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat.images[0] && (
                  <div style={{ position: "relative" }}>
                    <img
                      src={cat.images[0]}
                      alt={cat.title || cat.name}
                      className="img-fluid rounded"
                      style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                        transition: "transform 0.3s ease"
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                      onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: 10,
                        right: 10,
                        background: "rgba(0,0,0,0.7)",
                        borderRadius: "20px",
                        padding: "4px 12px",
                        backdropFilter: "blur(4px)"
                      }}
                    >
                      <span style={{ color: "white", fontSize: "12px", fontWeight: "bold" }}>
                        📷 {cat.images.length}
                      </span>
                    </div>
                  </div>
                )}
                <div className="gallery-info p-2">
                  <h5 className="text-light">{cat.title || cat.name}</h5>
                  {cat.description && (
                    <p className="text-light opacity-75" style={{ fontSize: "14px", margin: 0 }}>
                      {cat.description}
                    </p>
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

      {/* MODAL DE GALERÍA - Versión mejorada sin espacios */}
      <Dialog
        open={!!selectedCategory}
        onClose={() => setSelectedCategory(null)}
        maxWidth="xl"
        fullWidth
        PaperProps={{
          sx: {
            bgcolor: "background.default",
            borderRadius: { xs: 0, sm: 3 },
            m: { xs: 0, sm: 2 },
            maxHeight: "90vh"
          }
        }}
      >
        {selectedCategory && (
          <Box sx={{ p: { xs: 2, sm: 3, md: 4 }, height: "100%", overflow: "auto" }}>
            {/* Header */}
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3, flexWrap: "wrap", gap: 2 }}>
              <Box>
                <Typography variant="h4" sx={{ fontWeight: 700 }}>
                  {selectedCategory.title || selectedCategory.name}
                </Typography>
                {selectedCategory.description && (
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                    {selectedCategory.description}
                  </Typography>
                )}
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                  {selectedCategory.images.length} {selectedCategory.images.length === 1 ? "imagen" : "imágenes"}
                </Typography>
              </Box>

              <IconButton onClick={() => setSelectedCategory(null)}>
                <CloseIcon />
              </IconButton>
            </Box>

            {/* Masonry Layout - Sin espacios vacíos */}
            <Box sx={{ 
              columnCount: { xs: 1, sm: 2, md: 3, lg: 4 },
              columnGap: 2,
              "& > div": {
                breakInside: "avoid",
                marginBottom: 2
              }
            }}>
              {selectedCategory.images.map((img, i) => (
                <div key={i}>
                  <img
                    src={img}
                    alt={`${selectedCategory.title} - ${i + 1}`}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                      borderRadius: "12px",
                      cursor: "pointer",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease"
                    }}
                    onClick={() => handleImageClick(img, i)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.02)";
                      e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </div>
              ))}
            </Box>
          </Box>
        )}
      </Dialog>

      {/* MODAL PARA VER IMAGEN EN GRANDE */}
      <Dialog
        open={!!expandedImage}
        onClose={handleCloseExpanded}
        maxWidth="xl"
        fullWidth
        PaperProps={{
          sx: {
            bgcolor: "transparent",
            boxShadow: "none",
            overflow: "hidden"
          }
        }}
      >
        <Box
          sx={{
            position: "relative",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "rgba(0,0,0,0.95)",
            cursor: "pointer"
          }}
          onClick={handleCloseExpanded}
        >
          {/* Botón cerrar */}
          <IconButton
            onClick={handleCloseExpanded}
            sx={{
              position: "absolute",
              top: 20,
              right: 20,
              color: "white",
              bgcolor: "rgba(0,0,0,0.5)",
              zIndex: 10,
              "&:hover": { bgcolor: "rgba(0,0,0,0.8)" }
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Botón anterior */}
          {selectedCategory && currentImageIndex > 0 && (
            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                handlePrevImage();
              }}
              sx={{
                position: "absolute",
                left: 20,
                top: "50%",
                transform: "translateY(-50%)",
                color: "white",
                bgcolor: "rgba(0,0,0,0.5)",
                zIndex: 10,
                "&:hover": { bgcolor: "rgba(0,0,0,0.8)" }
              }}
            >
              <ArrowBackIosNewIcon />
            </IconButton>
          )}

          {/* Botón siguiente */}
          {selectedCategory && currentImageIndex < selectedCategory.images.length - 1 && (
            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                handleNextImage();
              }}
              sx={{
                position: "absolute",
                right: 20,
                top: "50%",
                transform: "translateY(-50%)",
                color: "white",
                bgcolor: "rgba(0,0,0,0.5)",
                zIndex: 10,
                "&:hover": { bgcolor: "rgba(0,0,0,0.8)" }
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          )}

          {/* Imagen expandida */}
          <Box
            sx={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              overflow: "auto",
              cursor: "pointer"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={expandedImage}
              alt="Imagen expandida"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
                borderRadius: 8,
                boxShadow: "0 10px 40px rgba(0,0,0,0.3)"
              }}
            />
          </Box>

          {/* Contador */}
          {selectedCategory && (
            <Typography
              variant="body2"
              sx={{
                position: "absolute",
                bottom: 20,
                left: "50%",
                transform: "translateX(-50%)",
                color: "white",
                bgcolor: "rgba(0,0,0,0.6)",
                px: 2,
                py: 0.5,
                borderRadius: 20,
                zIndex: 10
              }}
            >
              {currentImageIndex + 1} / {selectedCategory.images.length}
            </Typography>
          )}
        </Box>
      </Dialog>

      <div className="row">
        <Footer />
      </div>
    </>
  );
};

export default Gallery;