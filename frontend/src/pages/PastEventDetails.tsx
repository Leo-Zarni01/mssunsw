import AboutTheEvent from "../components/AboutTheEvent";
import EventDateTimeLoc from "../components/EventDateTimeLoc";
import { Box } from '@mui/material';
import PastEventDetailsWovenPhotos from "../components/PastEventDetailsWovenPhotos";
import NavBar from "../components/NavComps/NavBar";
import Footer from "../components/Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    typography: {
        fontFamily: "Poppins, sans-serif",
    },
});

const PastEventDetails = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar isDark={false} />

      <PastEventDetailsWovenPhotos />

      <Box sx={{ padding: '5rem 4rem 0 4rem'}}>
        <AboutTheEvent />
      </Box>
      
      <Box sx={{ padding: '5rem 4rem 0 4rem'}}>
        <EventDateTimeLoc />
      </Box>

      <Footer />
    </ThemeProvider>
  )
}

export default PastEventDetails;
