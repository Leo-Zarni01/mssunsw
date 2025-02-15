import AboutTheEvent from "../components/AboutTheEvent";
import EventDateTimeLoc from "../components/EventDateTimeLoc";
import { Box } from '@mui/material';
import PastEventDetailsWovenPhotos from "../components/PastEventDetailsWovenPhotos";
import NavBar from "../components/NavComps/NavBar";

const PastEventDetails = () => {
  return (
    <>
    <NavBar />

    <PastEventDetailsWovenPhotos />

    <Box sx={{ marginTop: '4rem' }}></Box>
    <AboutTheEvent />

    <Box sx={{ marginTop: '4rem' }}></Box>
    <EventDateTimeLoc />
    </>
  )
}

export default PastEventDetails;
