import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';
import { ExecProps } from '../TeamMembers';

const MeetTheExecutivesSlide: React.FC<{executive: ExecProps}> = ({ executive }) => {
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
            <img src={executive.imageUrl} style={{ width: '280px', maxHeight: '280px', borderRadius: '10%', marginBottom: '2rem' }} />
          </Grid>

          <Grid
            display="flex"
            justifyContent="center"
            flexDirection='column'
            alignItems="center"
          >
            <Typography sx={{ marginBottom: '2rem', textAlign: 'justify', width: {xs: '80%', xl: '90%'}, maxWidth: '500px', }}>
              {executive.memory}
            </Typography>

            <Typography sx={{ fontWeight: 'bold' }}>
              {executive.name}
            </Typography>

            <Typography color='text.secondary'>
              {executive.title}
            </Typography>
          </Grid>
      </Grid>
    </>
  )
}

export default MeetTheExecutivesSlide;