import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-creative';

const SwiperSlider = ({ images = [] }) => {
  return (
    <Swiper
      grabCursor={true}
      effect="creative"
      modules={[EffectCreative, Autoplay]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: ['-120%', 0, -500],
          rotate: [0, 0, -20],
        },
        next: {
          shadow: true,
          translate: ['120%', 0, -500],
          rotate: [0, 0, 20],
        },
      }}
      className="mySwiper"
    >
      {images.map((img, i) => (
        <SwiperSlide key={i}>
          <img src={img} loading='lazy' className="img-fluid w-100" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperSlider;