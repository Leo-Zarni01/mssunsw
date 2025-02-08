// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import logo from '../../assets/MSS_Logo.webp'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const Carousel = () => {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        navigation={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2.5,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={logo} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Carousel;