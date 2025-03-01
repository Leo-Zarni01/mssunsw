import { Typography } from '@mui/material';
import { Event } from './eventDetailsTemplate';

const AboutTheEvent: React.FC<{event: Event}> = ({ event }) => {
  return (
    <>
      <Typography sx={{ fontWeight: 'bold' }}> About the event </Typography>
      <Typography sx={{ marginTop: '1rem', textAlign: 'justify' }}> {event.description} </Typography>
    </>
  )
}

export default AboutTheEvent;
