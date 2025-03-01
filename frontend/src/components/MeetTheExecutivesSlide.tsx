import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';
import { Executive } from './MeetTheExecutivesTemplate';

const MeetTheExecutivesSlide: React.FC<{executive: Executive}> = ({ executive }) => {
  return (
    <>
      <Grid
        container
        columnSpacing={10}
        sx={{
          paddingTop: "1rem",
          display: "flex" ,
          justifyContent: "center",
          alignItems: "center",
          }}>          
          <Grid>
            <img src={executive.imageUrl} style={{ width: '300px', maxHeight: '250px', borderRadius: '10%', marginBottom: '2rem' }} />
          </Grid>

          <Grid
            display="flex"
            justifyContent="center"
            flexDirection='column'
            alignItems="center"
          >
            <Typography sx={{ marginBottom: '2rem', textAlign: 'justify', maxWidth: '500px', width: '90%' }}>
              {executive.memory}
            </Typography>

            <Typography sx={{ fontWeight: 'bold' }}>
              {executive.name}
            </Typography>

            <Typography color='text.secondary'>
              {executive.position}
            </Typography>
          </Grid>
      </Grid>
    </>
  )
}

export default MeetTheExecutivesSlide;