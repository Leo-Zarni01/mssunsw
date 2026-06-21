import { Swiper, SwiperSlide } from 'swiper/react';
import EventCard from "../EventCard";
import './styles.css';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
// import { Event, UPCOMINGEVENTS } from '../eventDetailsTemplate';
import StayTuned from '../StayTuned';
import { Box } from '@mui/material';
import type { Event } from "../../interface";
import { supabase } from "../../supabaseClient";
import { useEffect, useState } from "react";

const Carousel = () => {

  const [presentEvents, setPresentEvents] = useState<Event[]>([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPastEvents();
  }, []);

  async function fetchPastEvents() {
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .eq("past", false)
      .order("date", { ascending: false })
      .limit(6);

    if (error) {
      console.error("Error fetching past events:", error);
    } else {
      setPresentEvents(data ?? []);
    }

    // setLoading(false);
  }

  // if (loading) {
  //   return <p className="text-center">Loading past events...</p>;
  // }

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
        { presentEvents.length === 0?
          <Box sx={{ marginTop: '150px'}}>
            <StayTuned></StayTuned>
          </Box> :
          <>
            {presentEvents.slice(0, 3).map((event: Event) => (  // Always ensures six cards are displayed
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