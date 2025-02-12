import AboutTheEvent from "../components/AboutTheEvent";
import EventDateTimeLoc from "../components/EventDateTimeLoc";
import { Box, Typography } from '@mui/material';
import PastEventDetailsWovenPhotos from "../components/PastEventDetailsWovenPhotos";

const PastEventDetails = () => {
  return (
    <>
    {/* Nav Bar */}
    <Typography> NavBar </Typography>
    <Box sx={{ marginTop: '4rem' }}></Box>

    <PastEventDetailsWovenPhotos />

    <Box sx={{ marginTop: '4rem' }}></Box>
    <AboutTheEvent />

    <Box sx={{ marginTop: '4rem' }}></Box>
    <EventDateTimeLoc />
    </>
  )
}

export default PastEventDetails;
