import { Swiper, SwiperSlide } from 'swiper/react';
import { EVENTS } from "../eventDetailsTemplate";
import EventCard from "../EventCard";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// const upComingEvent: Event =
// {
//   id: 1,
//   name: "Fresher Welcome",
//   date: "TBD",
//   time: "TBD",
//   location: "TBD",
//   imageUrl: "TBD",
// }

const PastCarousel = () => {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        navigation={true}
        slidesPerView={'auto'}
        loop={true}
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
        {/* <SwiperSlide style={{ width: "300px", height: "450px"  }}>
          <EventCard event={upComingEvent} />
        </SwiperSlide> */}
        {EVENTS.slice(0, 3).map((event: any) => (  // Always ensures six cards are displayed
            <SwiperSlide style={{ width: "300px", height: "450px"  }}>
                <EventCard key={event.id} event={event} />
            </SwiperSlide>
        ))}
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

export default PastCarousel;