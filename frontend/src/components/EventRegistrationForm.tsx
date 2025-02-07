import { Card, TextField, CardContent, Button, Box, Typography } from '@mui/material';

const styleTextField = {
  width: '100%',
  marginBottom: '1rem',
}

const styleButton = {
  color: '#FFA700',
  backgroundColor: '#000000',
}

const EventRegistrationForm = () => {
  return (
    <>
      <Card variant='outlined' sx={{ borderRadius: '16px', boxShadow: 3, margin: 'auto' }} >
        <Typography sx={{ color: '#FFA700', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1.5rem'}}>
          Event Registration Form
        </Typography>

        <CardContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <TextField label="First Name" required sx={styleTextField}/>
            <TextField label="Last Name" required sx={styleTextField}/>
            <TextField label="Phone Number" required sx={styleTextField}/>
            <TextField label="zID" required helperText="Please enter NIL if you are not UNSW student" sx={styleTextField}/>
            <TextField label="Emergency Contact (Name)" required sx={styleTextField}/>
            <TextField label="Emergency Contact (Contact Number)" required sx={styleTextField}/>
            <TextField label="Questions and Comments"
              multiline
              rows={4}
              sx={styleTextField}/>

            <Button variant="contained" sx={styleButton}> Register Now! </Button>
          </Box>
        </CardContent>     
      </Card>
    </>
  )
}

export default EventRegistrationForm;