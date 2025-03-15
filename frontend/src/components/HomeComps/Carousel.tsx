import { Swiper, SwiperSlide } from 'swiper/react';
import EventCard from "../EventCard";
import './styles.css';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { Event, UPCOMINGEVENTS } from '../eventDetailsTemplate';
import StayTuned from '../StayTuned';
import { Box } from '@mui/material';

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
          <Box sx={{ marginTop: '150px'}}>
            <StayTuned></StayTuned>
          </Box> :
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