import { Swiper, SwiperSlide } from 'swiper/react';
// import { Event, EVENTS } from "../eventDetailsTemplate";
import EventCard from "../EventCard";
import './styles.css';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import type { Event } from "../../interface";
import { supabase } from "../../supabaseClient";
import { useEffect, useState } from "react";

const PastCarousel = () => {

  const [pastEvents, setPastEvents] = useState<Event[]>([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPastEvents();
  }, []);

  async function fetchPastEvents() {
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .eq("past", true)
      .order("date", { ascending: false })
      .limit(6);

    if (error) {
      console.error("Error fetching past events:", error);
    } else {
      setPastEvents(data ?? []);
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
        
        {pastEvents.slice(0, 6).reverse().map((event: Event) => (  // Always ensures six cards are displayed
            <SwiperSlide style={{ width: "300px", height: "470px"  }}>
                <EventCard key={event.id} event={event} type='past' />
            </SwiperSlide>
        ))}
        
      </Swiper>
    </>
  );
}

export default PastCarousel;