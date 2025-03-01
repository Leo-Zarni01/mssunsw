import { CardMedia, Grid2 as Grid, Box } from '@mui/material';
import '../App.css';
import thadingyut from '../assets/images/img-thadingyut.jpg';
import AboutTheEvent from '../components/AboutTheEvent';
import EventRegistrationForm from '../components/EventRegistrationForm';
import Footer from '../components/Footer';
import EventDateTimeLoc from '../components/EventDateTimeLoc';
import NavBar from '../components/NavComps/NavBar';

const styleTitle = {
  width: '100vw',
  height: 100,
  bgcolor: 'rgb(255, 167, 0, 0.23)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 'bold',
}

const UpcomingEventDetails = () => {
  return (   
    <>
      <NavBar isDark={false} />
      <Box sx={styleTitle}> Event Theme: Fresher Welcome </Box>
      <CardMedia
        component="img"
        height="400"
        width="50"
        image={thadingyut}
      />

    <Grid container spacing={{xs: 0, sm: 10}} sx={{ padding: '0 3rem 1rem 3rem' }}>
      <Grid size={{xs: 12, sm: 6}}>
        <Box sx={{ marginTop: '4rem' }}></Box>
        <AboutTheEvent />

        <Box sx={{ marginTop: '4rem' }}></Box>
        <EventDateTimeLoc />
      </Grid>
      
      <Grid size={{xs: 12, sm: 6}}>
        <Box sx={{ marginTop: '2rem' }}></Box>
        <EventRegistrationForm />
      </Grid>
    </Grid>

      <Footer />
    </>
  );
}

export default UpcomingEventDetails;
