import React from 'react';
import styled from 'styled-components';

const PhotoCarousel3D = () => {
  // Array con tus imágenes - Reemplaza estas URLs con tus fotos reales
  const images = [
    'https://cuve.zenfolio.com/img/s/v-10/p3368296076-3.jpg',
    'https://cuve.zenfolio.com/img/s/v-10/p3502303896-3.jpg',
    'https://cuve.zenfolio.com/img/s/v-10/p3631091442-3.jpg',
    'https://cuve.zenfolio.com/img/s/v-10/p1271127910-3.jpg',
    'https://cuve.zenfolio.com/img/s/v-10/p1271128001-3.jpg',
    'https://cuve.zenfolio.com/img/s/v-10/p1318101683-3.jpg',
    'https://cuve.zenfolio.com/img/s/v-10/p619815332-3.jpg',
    'https://cuve.zenfolio.com/img/s/v-10/p561583337-3.jpg',
    'https://cuve.zenfolio.com/img/s/v-10/p424548024-3.jpg',
    'https://cuve.zenfolio.com/img/s/v-10/p385370165-3.jpg',
  ];

  const quantity = images.length;

  return (
    <StyledWrapper quantity={quantity}>
      <div className="wrapper">
        <div className="inner">
          {images.map((img, index) => (
            <div 
              key={index}
              className="card" 
              style={{
                '--index': index,
                '--colorCard': '142, 202, 252'
              }}
            >
              <img 
                src={img} 
                alt={`Portfolio ${index + 1}`} 
                className="img"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .wrapper {
    max-width: 100vw;
    width: 100%;
    height: 100%;
    min-height: 750px;
    position: relative;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    user-select: none;
  }

  .inner {
    --w: 130px;
    --h: 180px;
    --translateZ: calc((var(--w) + var(--h)) * 1.2);
    --rotateX: -15deg;
    --perspective: 1000px;
    position: relative;
    width: var(--w);
    height: var(--h);
    margin-top: 50px;
    z-index: 2;
    transform-style: preserve-3d;
    transform: perspective(var(--perspective));
    animation: rotating 25s linear infinite;
  }
  
  @keyframes rotating {
    from {
      transform: perspective(var(--perspective)) rotateX(var(--rotateX))
        rotateY(0);
    }
    to {
      transform: perspective(var(--perspective)) rotateX(var(--rotateX))
        rotateY(1turn);
    }
  }

  .card {
    position: absolute;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-radius: 12px;
    overflow: hidden;
    inset: 0;
    transform: rotateY(calc((360deg / ${props => props.quantity}) * var(--index)))
      translateZ(var(--translateZ));
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease;
  }

  .card:hover {
    border-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.7);
  }

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  /* Efecto de brillo sutil sobre las imágenes */
  .card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 50%,
      rgba(0, 0, 0, 0.2) 100%
    );
    pointer-events: none;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .inner {
      max-width: 100vw;
      --w: 100px;
      --h: 140px;
    }
  }
`;

export default PhotoCarousel3D;