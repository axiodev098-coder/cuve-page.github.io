import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Dialog,
  IconButton,
  Box,
  Fade,
  Zoom,
  useTheme,
  alpha,
  TextField,
  Button,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Badge,
  AppBar,
  Toolbar,
  Checkbox
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SearchIcon from "@mui/icons-material/Search";
import DownloadIcon from "@mui/icons-material/Download";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function ZenfolioGallery() {
  const theme = useTheme();
  const [data, setData] = useState({});
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [expandedImage, setExpandedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [sessionCode, setSessionCode] = useState("");
  const [filteredGallery, setFilteredGallery] = useState(null);
  const [error, setError] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [productType, setProductType] = useState("");
  const [showSelectionMode, setShowSelectionMode] = useState(false);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}galerias.json`)
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.error("Error cargando JSON:", err));
  }, []);

  const handleSearch = () => {
    if (!sessionCode.trim()) {
      setError(true);
      return;
    }

    let cleanCode = sessionCode.trim();
    if (!cleanCode.toLowerCase().startsWith('p')) {
      cleanCode = 'p' + cleanCode;
    }

    const galleryEntry = Object.entries(data).find(([title, galeria]) => {
      return galeria.sessionCode === cleanCode;
    });

    if (galleryEntry) {
      setFilteredGallery(galleryEntry[1]);
      setError(false);
      setSelectedImages([]);
      setProductType("");
      setShowSelectionMode(false);
    } else {
      setFilteredGallery(null);
      setError(true);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleReset = () => {
    setSessionCode("");
    setFilteredGallery(null);
    setError(false);
    setSelectedImages([]);
    setProductType("");
    setShowSelectionMode(false);
  };

  const toggleImageSelection = (image, index) => {
    if (selectedImages.find(img => img.url === image)) {
      setSelectedImages(selectedImages.filter(img => img.url !== image));
    } else {
      if (selectedImages.length < 120) {
        setSelectedImages([...selectedImages, { url: image, index: index }]);
      } else {
        alert("⚠️ Solo puedes seleccionar un máximo de 120 imágenes.");
      }
    }
  };

  const isImageSelected = (image) => {
    return selectedImages.some(img => img.url === image);
  };

  const extractImageId = (url) => {
    const match = url.match(/p(\d+)-3\./);
    return match ? `p${match[1]}` : "ID no disponible";
  };

  const generatePDF = () => {
    if (!productType) {
      alert("❌ Por favor, selecciona un tipo de producto.");
      return;
    }

    if (selectedImages.length === 0) {
      alert("❌ Por favor, selecciona al menos una imagen.");
      return;
    }

    const gallery = currentGallery;
    if (!gallery) {
      alert("❌ Error: No se encontró la galería.");
      return;
    }

    try {
      const doc = new jsPDF();
      
      // Título
      doc.setFontSize(20);
      doc.setTextColor(0, 0, 0);
      doc.text("Resumen de Selección de Fotos", 14, 20);
      
      // Información del cliente
      doc.setFontSize(12);
      doc.setTextColor(80, 80, 80);
      doc.text(`Código de sesión: ${gallery.sessionCode}`, 14, 35);
      doc.text(`Cliente: ${gallery.title}`, 14, 45);
      doc.text(`Tipo de producto: ${productType}`, 14, 55);
      doc.text(`Fecha: ${new Date().toLocaleDateString()}`, 14, 65);
      doc.text(`Total de fotos seleccionadas: ${selectedImages.length} / 120`, 14, 75);
      
      // Tabla de imágenes seleccionadas
      const tableData = selectedImages.map((img, idx) => [
        idx + 1,
        `Foto ${img.index + 1}`,
        extractImageId(img.url),
        img.url
      ]);
      
      autoTable(doc, {
        startY: 85,
        head: [["#", "Nombre", "ID de Foto", "URL"]],
        body: tableData,
        theme: "striped",
        headStyles: { fillColor: [25, 118, 210], textColor: 255 },
        styles: { fontSize: 8, cellPadding: 2 },
        columnStyles: {
          0: { cellWidth: 10 },
          1: { cellWidth: 30 },
          2: { cellWidth: 40 },
          3: { cellWidth: 80 }
        }
      });
      
      // Guardar PDF
      doc.save(`seleccion_${gallery.sessionCode}_${productType}.pdf`);
      alert(`✅ PDF generado correctamente con ${selectedImages.length} imágenes.`);
    } catch (error) {
      console.error("Error generando PDF:", error);
      alert("❌ Error al generar el PDF. Por favor, intenta nuevamente.");
    }
  };

  const handleImageClick = (image, index) => {
    if (showSelectionMode) {
      toggleImageSelection(image, index);
    } else {
      setExpandedImage(image);
      setCurrentImageIndex(index);
    }
  };

  const handleCloseExpanded = () => {
    setExpandedImage(null);
  };

  const handleNextImage = () => {
    const gallery = selectedGallery || filteredGallery;
    if (gallery && currentImageIndex < gallery.images.length - 1) {
      const newIndex = currentImageIndex + 1;
      setCurrentImageIndex(newIndex);
      setExpandedImage(gallery.images[newIndex]);
    }
  };

  const handlePrevImage = () => {
    const gallery = selectedGallery || filteredGallery;
    if (gallery && currentImageIndex > 0) {
      const newIndex = currentImageIndex - 1;
      setCurrentImageIndex(newIndex);
      setExpandedImage(gallery.images[newIndex]);
    }
  };

  const currentGallery = selectedGallery || filteredGallery;

  return (
    <Container maxWidth="xl" sx={{ py: 6, px: { xs: 2, sm: 3, md: 4 } }}>
      
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 800,
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: 1
          }}
        >
          Sesiones de Clientes
        </Typography>
        <Typography variant="body1" className="text-white" sx={{ maxWidth: 600, mx: "auto" }}>
          Ingresa tu código de sesión para ver tus fotos
        </Typography>
        <Typography variant="caption" className="text-white
        " sx={{ mt: 1, display: "block" }}>
          Ejemplo: p94092549
        </Typography>
      </Box>

      {/* INPUT DE BÚSQUEDA */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 6 }}>
        <Paper
          elevation={3}
          sx={{
            p: 2,
            display: "flex",
            gap: 2,
            alignItems: "center",
            borderRadius: 3,
            bgcolor: alpha(theme.palette.background.paper, 0.8),
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          <TextField
            label="Código de sesión"
            variant="outlined"
            value={sessionCode}
            onChange={(e) => setSessionCode(e.target.value)}
            onKeyPress={handleKeyPress}
            error={error}
            helperText={error ? "Código no encontrado. Verifica el código e intenta nuevamente." : ""}
            placeholder="Ej: p98095549"
            sx={{ minWidth: 280 }}
            autoFocus
            
          />
          <Button
            variant="contained"
            onClick={handleSearch}
            startIcon={<SearchIcon />}
            sx={{ height: 56 }}
          >
            Buscar
          </Button>
          {filteredGallery && (
            <Button
              variant="outlined"
              onClick={handleReset}
              sx={{ height: 56 }}
            >
              Limpiar
            </Button>
          )}
        </Paper>
      </Box>

      {/* GALERÍA ENCONTRADA */}
      {filteredGallery && !selectedGallery && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Fade in timeout={300}>
            <Card
              sx={{
                cursor: "pointer",
                borderRadius: 4,
                overflow: "hidden",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                maxWidth: 450,
                width: "100%",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: theme.shadows[20],
                  "& .card-media": {
                    transform: "scale(1.05)"
                  }
                }
              }}
              onClick={() => setSelectedGallery(filteredGallery)}
            >
              <Box sx={{ position: "relative", overflow: "hidden" }}>
                <CardMedia
                  component="img"
                  height="320"
                  image={filteredGallery.images[0]}
                  className="card-media"
                  sx={{
                    transition: "transform 0.6s ease",
                    objectFit: "cover"
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
                    p: 2
                  }}
                >
                  <Typography variant="caption" sx={{ color: "white", fontWeight: 500 }}>
                    {filteredGallery.images.length} {filteredGallery.images.length === 1 ? "foto" : "fotos"}
                  </Typography>
                </Box>
              </Box>

              <CardContent sx={{ bgcolor: "background.paper" }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {filteredGallery.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                  Código: {filteredGallery.sessionCode}
                </Typography>
              </CardContent>
            </Card>
          </Fade>
        </Box>
      )}

      {/* MENSAJE CUANDO NO HAY BÚSQUEDA */}
      {!filteredGallery && !selectedGallery && (
        <Box sx={{ textAlign: "center", mt: 8 }}>
          <Typography variant="h6" color="text.white" className="text-light" sx={{ fontWeight: 500 }}>
            🔍 Ingresa tu código de sesión para comenzar
          </Typography>
          <Typography variant="body2" color="text.secondary" className="text-light" sx={{ mt: 1 }}>
            El código fue proporcionado por el fotógrafo después de tu sesión
          </Typography>
        </Box>
      )}

      {/* MODAL DE GALERÍA */}
      <Dialog
        open={!!currentGallery}
        onClose={() => {
          setSelectedGallery(null);
          setFilteredGallery(null);
          setSessionCode("");
          setShowSelectionMode(false);
        }}
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
        {currentGallery && (
          <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
            
            {/* Header con selector y botones */}
            <AppBar position="sticky" color="default" sx={{ p: 2, borderBottom: 1, borderColor: "divider" }}>
              <Toolbar sx={{ flexWrap: "wrap", gap: 2, justifyContent: "space-between" }}>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    {currentGallery.title}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {currentGallery.images.length} imágenes | Código: {currentGallery.sessionCode}
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", gap: 2, alignItems: "center", flexWrap: "wrap" }}>
                  <Button
                    variant={showSelectionMode ? "contained" : "outlined"}
                    color={showSelectionMode ? "primary" : "secondary"}
                    onClick={() => setShowSelectionMode(!showSelectionMode)}
                  >
                    {showSelectionMode ? "Modo Selección Activado" : "Activar Selección"}
                  </Button>

                  {showSelectionMode && (
                    <>
                      <FormControl sx={{ minWidth: 150 }} size="small">
                        <InputLabel>Tipo de producto</InputLabel>
                        <Select
                          value={productType}
                          onChange={(e) => setProductType(e.target.value)}
                          label="Tipo de producto"
                        >
                          <MenuItem value="impresas">📷 Impresas</MenuItem>
                          <MenuItem value="digitales">💻 Digitales</MenuItem>
                          <MenuItem value="canva">🖼️ Canva</MenuItem>
                          <MenuItem value="marco">🖼️ Marco</MenuItem>
                          <MenuItem value="album">📕 Álbum</MenuItem>
                        </Select>
                      </FormControl>

                      <Badge badgeContent={selectedImages.length} color="primary">
                        <Button
                          variant="contained"
                          color="success"
                          startIcon={<DownloadIcon />}
                          onClick={generatePDF}
                          // Botón siempre activo; las validaciones están dentro de la función
                        >
                          Descargar PDF
                        </Button>
                      </Badge>

                      <Typography variant="body2" color="text.secondary" sx={{ minWidth: 80 }}>
                        {selectedImages.length}/120 seleccionadas
                      </Typography>
                    </>
                  )}

                  <IconButton
                    onClick={() => {
                      setSelectedGallery(null);
                      setFilteredGallery(null);
                      setSessionCode("");
                      setShowSelectionMode(false);
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </Box>
              </Toolbar>
            </AppBar>

            {/* Masonry Layout con selección */}
            <Box sx={{ 
              p: { xs: 2, sm: 3, md: 4 },
              overflow: "auto",
              columnCount: { xs: 1, sm: 2, md: 3, lg: 4 },
              columnGap: 2,
              "& > div": {
                breakInside: "avoid",
                marginBottom: 2
              }
            }}>
              {currentGallery.images.map((img, i) => (
                <Zoom in timeout={i * 50} key={i}>
                  <div style={{ position: "relative" }}>
                    <Card
                      sx={{
                        borderRadius: 3,
                        overflow: "hidden",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        position: "relative",
                        "&:hover": {
                          transform: "scale(1.02)",
                          boxShadow: theme.shadows[8]
                        }
                      }}
                      onClick={() => handleImageClick(img, i)}
                    >
                      {showSelectionMode && (
                        <Box
                          sx={{
                            position: "absolute",
                            top: 10,
                            right: 10,
                            zIndex: 2,
                            bgcolor: "rgba(255,255,255,0.9)",
                            borderRadius: "50%",
                            p: 0.5
                          }}
                        >
                          <Checkbox
                            checked={isImageSelected(img)}
                            onChange={() => toggleImageSelection(img, i)}
                            onClick={(e) => e.stopPropagation()}
                            icon={<CheckCircleIcon sx={{ color: "gray" }} />}
                            checkedIcon={<CheckCircleIcon sx={{ color: "#4caf50" }} />}
                          />
                        </Box>
                      )}
                      <img
                        src={img}
                        alt={`Imagen ${i + 1}`}
                        loading="lazy"
                        style={{
                          width: "100%",
                          height: "auto",
                          display: "block",
                          transition: "transform 0.3s ease"
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                        onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                      />
                    </Card>
                    {showSelectionMode && isImageSelected(img) && (
                      <Typography
                        variant="caption"
                        sx={{
                          position: "absolute",
                          bottom: 10,
                          left: 10,
                          bgcolor: "rgba(76,175,80,0.9)",
                          color: "white",
                          p: 0.5,
                          borderRadius: 1,
                          fontSize: "10px"
                        }}
                      >
                        ✓ Seleccionada
                      </Typography>
                    )}
                  </div>
                </Zoom>
              ))}
            </Box>
          </Box>
        )}
      </Dialog>

      {/* MODAL PARA VER IMAGEN EN GRANDE (solo cuando no está en modo selección) */}
      <Dialog
        open={!!expandedImage && !showSelectionMode}
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

          {currentGallery && currentImageIndex > 0 && (
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

          {currentGallery && currentImageIndex < currentGallery.images.length - 1 && (
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

          {currentGallery && (
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
              {currentImageIndex + 1} / {currentGallery.images.length}
            </Typography>
          )}
        </Box>
      </Dialog>
    </Container>
  );
}