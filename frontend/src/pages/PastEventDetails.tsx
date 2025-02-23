import AboutTheEvent from "../components/AboutTheEvent";
import EventDateTimeLoc from "../components/EventDateTimeLoc";
import { Box } from '@mui/material';
import PastEventDetailsWovenPhotos from "../components/PastEventDetailsWovenPhotos";
import NavBar from "../components/NavComps/NavBar";
import Footer from "../components/Footer";
import { styled } from '@mui/material/styles';

const Background = styled(Box)({
  backgroundColor: '#ffffff',
});

const PastEventDetails = () => {
  return (
    <>
      <Background>
        <NavBar />

        <PastEventDetailsWovenPhotos />

        <Box sx={{ padding: '5rem 4rem 0 4rem'}}>
          <AboutTheEvent />
        </Box>
        
        <Box sx={{ padding: '5rem 4rem 0 4rem'}}>
          <EventDateTimeLoc />
        </Box>

        <Footer />
      </Background>
    </>
  )
}

export default PastEventDetails;
