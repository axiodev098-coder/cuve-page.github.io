import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'max-content',
  bgcolor: 'background.paper',
  border: '2px solid #000000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ open, onClose, children }) {
  return (
    <>
    
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <button onClick={onClose} className="cerrar">
          X
        </button>
        {children}
      </Box>
    </Modal>
    </>
  );
}