import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-cube';

const CubeSlider = ({images}) => {
  return (
    <Swiper
      effect="cube"
      grabCursor={true}
      modules={[EffectCube, Autoplay]}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      className="mySwiper"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} className="img-fluid" />
        </SwiperSlide>
      ))}


    </Swiper>
  );
};

export default CubeSlider;