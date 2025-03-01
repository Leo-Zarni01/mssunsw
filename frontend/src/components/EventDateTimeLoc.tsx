import { Typography, Box, List, ListItem } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from 'react';
import { Event } from './eventDetailsTemplate';

const theme = createTheme({
    typography: {
        fontFamily: "Poppins, sans-serif",
    },
});

const EventDateTimeLoc: React.FC<{event: Event}> = ({ event }) => {
  return (
    <ThemeProvider theme={theme}>
      <Typography sx={{ fontWeight: 'bold' }}> Event Details </Typography>
      
      <Box sx={{ paddingLeft: '2rem'}}>
        <List sx={{ listStyleType: 'disc' }}>
          <ListItem sx={{ display: 'list-item' }}>
            <Typography>Date: {event.date} </Typography>
          </ListItem>

          <ListItem sx={{ display: 'list-item' }}>
            <Typography>Time: {event.time} </Typography>
          </ListItem>

          <ListItem sx={{ display: 'list-item' }}>
            <Typography>Location: {event.location}</Typography>
          </ListItem>
        </List>
      </Box>

      <Typography sx={{ marginTop: '1rem' }}>  </Typography>
    </ThemeProvider>
  )
}

export default EventDateTimeLoc;
