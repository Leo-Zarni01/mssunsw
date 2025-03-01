import { CardMedia, Grid2 as Grid, Box } from '@mui/material';
import '../App.css';
import AboutTheEvent from '../components/AboutTheEvent';
import EventRegistrationForm from '../components/EventRegistrationForm';
import Footer from '../components/Footer';
import EventDateTimeLoc from '../components/EventDateTimeLoc';
import NavBar from '../components/NavComps/NavBar';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useParams } from 'react-router-dom';
import { UPCOMINGEVENTS } from '../components/eventDetailsTemplate';

const theme = createTheme({
    typography: {
        fontFamily: "Poppins, sans-serif",
    },
});

// const styleTitle = {
//   width: '100vw',
//   height: 100,
//   bgcolor: 'rgb(255, 167, 0, 0.23)',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   fontWeight: 'bold',
// }

const UpcomingEventDetails = () => {
  const { id } = useParams();
  const event = UPCOMINGEVENTS.find((e) => e.id === Number(id));

  return (
    <ThemeProvider theme={theme}>
    { !event ? <></> : 
      <>
      <NavBar isDark={false} />
      {/* <Box sx={styleTitle}>
        <Typography> {event.name} </Typography>
      </Box> */}
      <CardMedia
        component="img"
        image={event.imageUrl}
        sx={{
          height: {xl: '1200px'},
        }}
      />

      {/* <Box sx={{ marginTop: '4rem', marginLeft: '2rem' }}>
        <AboutTheEvent event={event}/>
      </Box>

      <Box sx={{ marginTop: '4rem', marginLeft: '2rem' }}>
        <EventDateTimeLoc event={event}/>
      </Box> */}

      <Grid container spacing={{xs: 0, sm: 10}} sx={{ padding: '0 3rem 1rem 3rem' }}>
        <Grid size={{xs: 12, sm: 6}}>
          <Box sx={{ marginTop: '4rem' }}></Box>
          <AboutTheEvent event={event}/>

          <Box sx={{ marginTop: '4rem' }}></Box>
          <EventDateTimeLoc event={event}/>
        </Grid>
        
        <Grid size={{xs: 12, sm: 6}}>
          <Box sx={{ marginTop: '2rem' }}></Box>
          <EventRegistrationForm />
        </Grid>
      </Grid>

      <Footer />
      </>
    }
    </ThemeProvider>
  );
}

export default UpcomingEventDetails;
