import { Swiper, SwiperSlide } from 'swiper/react';
import { Event, EVENTS } from "../eventDetailsTemplate";
import EventCard from "../EventCard";

import './styles.css';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';


const PastCarousel = () => {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        navigation={true}
        slidesPerView={'auto'}
        // loop={true}
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
        
        {EVENTS.slice(0, 6).map((event: Event) => (  // Always ensures six cards are displayed
            <SwiperSlide style={{ width: "300px", height: "470px"  }}>
                <EventCard key={event.id} event={event} type='past' />
            </SwiperSlide>
        ))}
        
      </Swiper>
    </>
  );
}

export default PastCarousel;