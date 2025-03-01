import { Typography, Box, List, ListItem } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    typography: {
        fontFamily: "Poppins, sans-serif",
    },
});

const EventDateTimeLoc = () => {
  return (
    <ThemeProvider theme={theme}>
      <Typography sx={{ fontWeight: 'bold' }}> Event Details </Typography>
      
      <Box sx={{ paddingLeft: '2rem'}}>
        <List sx={{ listStyleType: 'disc' }}>
          <ListItem sx={{ display: 'list-item' }}>
            <Typography>Date: 18/07/2024 (Wednesday)</Typography>
          </ListItem>

          <ListItem sx={{ display: 'list-item' }}>
            <Typography>Time: 10:00 am</Typography>
          </ListItem>

          <ListItem sx={{ display: 'list-item' }}>
            <Typography>Location: Main Library</Typography>
          </ListItem>
        </List>
      </Box>

      <Typography sx={{ marginTop: '1rem' }}>  </Typography>
    </ThemeProvider>
  )
}

export default EventDateTimeLoc;
