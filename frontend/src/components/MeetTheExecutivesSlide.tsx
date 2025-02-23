import Grid from '@mui/material/Grid2';
import nileyar from '../assets/images/NileYar.jpeg';
import { Typography } from '@mui/material';

const MeetTheExecutivesSlide = () => {
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
          <img src={nileyar} style={{ width: '300px', maxHeight: '250px', borderRadius: '10%', marginBottom: '2rem' }} />
        </Grid>

        <Grid display="flex" justifyContent="center">
          <Typography sx={{ marginBottom: '2rem', textAlign: 'justify', maxWidth: '500px', width: '90%' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar, lectus nec sagittis varius, arcu est consequat dolor, vitae dapibus erat mi id velit. Suspendisse potenti. Duis volutpat, lacus eget lacinia vehicula, erat enim luctus urna, nec vestibulum elit erat nec purus.
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default MeetTheExecutivesSlide;