import AboutTheEvent from "../components/AboutTheEvent";
import EventDateTimeLoc from "../components/EventDateTimeLoc";
import { Box } from '@mui/material';
import PastEventDetailsWovenPhotos from "../components/PastEventDetailsWovenPhotos";
import NavBar from "../components/NavComps/NavBar";
import Footer from "../components/Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useParams } from 'react-router-dom';
// import { EVENTS } from "../components/eventDetailsTemplate";
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import type { Event } from "../interface";

const theme = createTheme({
    typography: {
        fontFamily: "Poppins, sans-serif",
    },
});



const PastEventDetails = () => {
  const { id } = useParams();
  // const event = EVENTS.find((e) => e.id === Number(id));
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
      .eq("past", true)
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

        <PastEventDetailsWovenPhotos event={event} />

        <Box sx={{ padding: '5rem 4rem 0 4rem'}}>
          <AboutTheEvent event={event} />
        </Box>
        
        <Box sx={{ padding: '5rem 4rem 0 4rem'}}>
          <EventDateTimeLoc event={event} />
        </Box>

        <Footer />
      </>
      }
    </ThemeProvider>
  )
}

export default PastEventDetails;
