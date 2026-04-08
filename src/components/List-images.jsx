import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function ListImages({ images = [] }) {
    console.log("ListImages render with images:", images);
  return (
    <Box sx={{ width: '90vw', height: 800, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {images.map((item,index) => (
          <ImageListItem key={index}>
            <img
              srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item}?w=248&fit=crop&auto=format`}
              alt={index||""}
              loading="lazy"
              maxWidth="500px"
              className='rounded'
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}