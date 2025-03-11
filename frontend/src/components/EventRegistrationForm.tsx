import { Card, Button, Box, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    typography: {
        fontFamily: "Poppins, sans-serif",
    },
});

// const styleTextField = {
//   width: '100%',
//   marginBottom: '1rem',
// }

const EventRegistrationForm = () => {
  const handleButtonClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSeqU9ohMxV-NuLtjuiX_p7u2Z-BmBY5AX7SkgjySHgKa-NNiQ/viewform');
  }
  
  return (
    <ThemeProvider theme={theme}>
      <Card variant='outlined' sx={{ borderRadius: '16px', boxShadow: 3, margin: 'auto'}} >
        <Typography variant='h6' sx={{ color: '#FFA700', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1.5rem'}}>
          Register for the Event
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100px',
          }}
        >
          <Button sx={{ color: '#FFA700', backgroundColor: '#000000' }} onClick={handleButtonClick}> Register Now! </Button>
        </Box>

        {/* <CardContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <TextField label="First Name" required sx={styleTextField} />
            <TextField label="Last Name" required sx={styleTextField} />
            <TextField label="Phone Number" required sx={styleTextField} />
            <TextField label="zID" required helperText="Please enter NIL if you are not UNSW student" sx={styleTextField} />
            <TextField label="Emergency Contact (Name)" required sx={styleTextField} />
            <TextField label="Emergency Contact (Contact Number)" required sx={styleTextField} />
            <TextField label="Questions and Comments"
              multiline
              rows={4}
              sx={styleTextField} />

            <Button variant="contained" sx={styleButton}> Register Now! </Button>
          </Box>
        </CardContent> */}
      </Card>
    </ThemeProvider>
  )
}

export default EventRegistrationForm;
