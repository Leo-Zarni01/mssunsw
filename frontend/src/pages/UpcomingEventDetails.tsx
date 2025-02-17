import { CardMedia, Grid2 as Grid, Box } from '@mui/material';
import '../App.css';
import thadingyut from '../assets/images/img-thadingyut.jpg';
import AboutTheEvent from '../components/AboutTheEvent';
import EventRegistrationForm from '../components/EventRegistrationForm';
import Footer from '../components/Footer';
import EventDateTimeLoc from '../components/EventDateTimeLoc';

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
    // event name {title}
    // event poster or image
    // About the event  // component
    // event details    // component
    // registration form    

    <>
      {/* navigation */}
      <Box sx={{ margin: '1rem' }}> Nav Bar </Box>

      {/* title */}
      <Box sx={styleTitle}> Event Theme: Fresher Welcome </Box>

      {/* event poster */}
      <CardMedia
        component="img"
        height="400"
        width="50"
        image={thadingyut}
      />

      {/* About the event */}
      <Grid container spacing={10} sx={{ padding: '0 3rem 0 3rem' }}>
        <Grid size={6}>
          <Box sx={{ marginTop: '4rem' }}></Box>
          <AboutTheEvent />

          <Box sx={{ marginTop: '4rem' }}></Box>
          <EventDateTimeLoc />
        </Grid>
        <Grid size={6}>
          <Box sx={{ marginTop: '2rem' }}></Box>
          <EventRegistrationForm />
        </Grid>
      </Grid>

      {/* footer */}
      <Footer />
    </>
  );
}

export default UpcomingEventDetails;
