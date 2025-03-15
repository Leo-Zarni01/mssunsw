// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import EventCard from "../EventCard";
import { Box } from '@mui/material';
// import logo from '../../assets/MSS_Logo.webp'

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { Event, UPCOMINGEVENTS } from '../eventDetailsTemplate';
import { Typography } from '@mui/material';

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
        className="eventsSwiper"
      >
        { UPCOMINGEVENTS.length === 0?
          <>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '150px',
              }}
            >
              <Box
                sx={{
                  width: 300,
                  height: 100,
                  boxShadow: 5,
                  borderRadius: "20px",
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <Typography> Stay tuned for Thingyan!!! </Typography>
              </Box>
            </Box>
          </> :
          <>
            {UPCOMINGEVENTS.slice(0, 3).map((event: Event) => (  // Always ensures six cards are displayed
              <SwiperSlide style={{ width: "300px", height: "470px"  }}>
                <EventCard key={event.id} event={event} type='upcoming' />
            </SwiperSlide>
              ))}
          </>
        }
        {/* <SwiperSlide style={{ width: "300px", height: "450px"  }}>
          <EventCard event={upComingEvent} />
        </SwiperSlide> */}
        {/* <SwiperSlide>
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
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}

export default Carousel;