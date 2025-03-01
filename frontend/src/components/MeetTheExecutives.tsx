import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Typography } from "@mui/material";
import MeetTheExecutivesSlide from './MeetTheExecutivesSlide';
import "../App.css";
import { executives } from './MeetTheExecutivesTemplate';

const MeetTheExecutives = () => {
  return (
    <>
      <Typography variant="h5" sx={{ fontWeight: 'regular', color: "#EE6055", display: "flex" , justifyContent: "center" }}> Meet The Executives </Typography>
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
        {executives.map((item) => (
          <SwiperSlide style={{ height: '100%' }}> <MeetTheExecutivesSlide executive={item} /> </SwiperSlide>
        ))};
      </Swiper>
    </>
  )
}

export default MeetTheExecutives;