import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Typography } from "@mui/material";

import MeetTheExecutivesSlide from './MeetTheExecutivesSlide';


const MeetTheExecutives = () => {
  return (
    <>
      <Typography variant="h6" sx={{ color: "#EE6055", display: "flex" , justifyContent: "center" }}> Meet The Executives </Typography>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide style={{ height: '100%' }}> <MeetTheExecutivesSlide /> </SwiperSlide>
        <SwiperSlide style={{ height: '100%' }}> <MeetTheExecutivesSlide /> </SwiperSlide>
        <SwiperSlide style={{ height: '100%' }}> <MeetTheExecutivesSlide /> </SwiperSlide>
        <SwiperSlide style={{ height: '100%' }}> <MeetTheExecutivesSlide /> </SwiperSlide>
        <SwiperSlide style={{ height: '100%' }}> <MeetTheExecutivesSlide /> </SwiperSlide>

      </Swiper>
    </>
  )
}

export default MeetTheExecutives;