import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
const Carrousel = ({ images,space,slide,delay }) => {
  return (
    <Swiper
      spaceBetween={space}
      slidesPerView={slide}
      modules={[Autoplay]}
      autoplay={{
        delay: delay,
        disableOnInteraction: false,
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}

    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img className="img-fluid rounded shadow z-index-1" src={image} alt={`Slide ${index + 1}`} loading="lazy" decoding="async" width="100%" height="600" onContextMenu={(e)=>e.preventDefault()} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carrousel;
