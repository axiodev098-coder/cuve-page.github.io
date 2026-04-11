import { useState } from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Dialog from '@mui/material/Dialog';

export default function ListImages({ images = [] }) {
  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const handleOpen = (img) => {
    setSelectedImg(img);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImg(null);
  };

  return (
    <Box sx={{ width: '90vw', height: 800, overflowY: 'scroll' }}>
      
      <ImageList variant="masonry" cols={3} gap={8}>
        {images.map((item, index) => (
          <ImageListItem key={index}>
            <img
              src={item}
              alt={`img-${index}`}
              loading="lazy"
              onClick={() => handleOpen(item)}
              style={{ cursor: 'pointer' }}
            />
          </ImageListItem>
        ))}
      </ImageList>

      <Dialog open={open} onClose={handleClose} maxWidth="lg">
        <Box sx={{ p: 1 }}>
          {selectedImg && (
            <img
              src={selectedImg}
              alt="preview"
              style={{ width: '100%', height: 'auto', display: 'block',maxHeight: '80vh', objectFit: 'contain' }}
            />
          )}
        </Box>
      </Dialog>
    </Box>
  );
}