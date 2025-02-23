import { Typography, Box, List, ListItem } from '@mui/material';


const EventDateTimeLoc = () => {
  return (
    <>
      <Typography sx={{ fontWeight: 'bold' }}> Event Details </Typography>
      
      <Box sx={{ paddingLeft: '2rem'}}>
        <List sx={{ listStyleType: 'disc' }}>
          <ListItem sx={{ display: 'list-item' }}>
            Date: 18/07/2024 (Wednesday)
          </ListItem>

          <ListItem sx={{ display: 'list-item' }}>
            Time: 10:00 am
          </ListItem>

          <ListItem sx={{ display: 'list-item' }}>
            Location: Main Library
          </ListItem>
        </List>
      </Box>

      <Typography sx={{ marginTop: '1rem' }}>  </Typography>
    </>
  )
}

export default EventDateTimeLoc;
