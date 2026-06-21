import { CardMedia, Grid2 as Grid, Box } from '@mui/material';
import '../App.css';
import AboutTheEvent from '../components/AboutTheEvent';
import EventRegistrationForm from '../components/EventRegistrationForm';
import Footer from '../components/Footer';
import EventDateTimeLoc from '../components/EventDateTimeLoc';
import NavBar from '../components/NavComps/NavBar';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import type { Event } from "../interface";
// import { UPCOMINGEVENTS } from '../components/eventDetailsTemplate';

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
  // const event = UPCOMINGEVENTS.find((e) => e.id === Number(id));
  const [event, setEvent] = useState<Event | null>(null);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvent();
  }, [id]);

  async function fetchEvent() {
    if (!id) return;

    const { data, error } = await supabase
      .from("events")
      .select("*")
      .eq("id", Number(id))
      .single();

    if (error) {
      console.error("Error fetching event:", error);
      setEvent(null);
    } else {
      setEvent(data);
    }

    // setLoading(false);
  }

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
        image={event.cover_image ?? "/placeholder-image.jpg"}
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
