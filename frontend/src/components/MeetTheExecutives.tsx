import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Typography } from "@mui/material";
import MeetTheExecutivesSlide from './MeetTheExecutivesSlide';
import "../App.css";

const MeetTheExecutives = () => {
  return (
    <>
      <Typography variant="h5" sx={{ fontWeight: 'regular', color: "#EE6055", display: "flex" , justifyContent: "center", marginTop: "3rem" }}> Meet The Executives </Typography>
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
        className="meetExecSwiper"
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