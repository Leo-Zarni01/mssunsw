import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import logo from '../assets/MSS_Logo.webp'
import Grid from '@mui/material/Grid';
import fb_logo from '../assets/facebook.png'
import insta_logo from '../assets/instagram.png'
import tiktok_logo from '../assets/tiktok.png'

const NavBar = () => {
  return (
    <Grid container spacing={2} columns={16}>
        <Grid item xs={12.5}>
            <Stack direction="row" spacing={2} sx={{ m: 2 }}>
                <img 
                    src={logo}
                    alt="MSS Logo" 
                    className="w-20 h-20" 
                />
                <Stack direction="row" spacing={7} sx={{
                    pt: { xs: 2, sm: 3, md: 3 }, 
                    m: { xs: 2, sm: 3, md: 2 }, 
                }}>
                    <Typography variant="subtitle1" gutterBottom> Home </Typography>
                    <Typography variant="subtitle1" gutterBottom> About Us </Typography>
                    <Typography variant="subtitle1" gutterBottom> Events </Typography>
                    <Typography variant="subtitle1" gutterBottom> Our Team </Typography>
                    <Typography variant="subtitle1" gutterBottom> Get Involved </Typography>
                </Stack>
            </Stack>
        </Grid>
        <Grid item xs={3.5} sx={{ display: 'flex', justifyContent: 'flex-end' }}> 
            <Stack direction="row" spacing={2} sx={{
                m: 4.5, mr: 8, mt: 5.2
            }}>
                <img 
                    src={fb_logo}
                    alt="Facebook Logo" 
                    className="w-8 h-8" 
                />
                <img 
                    src={insta_logo}
                    alt="Instagram Logo" 
                    className="w-8 h-8" 
                />
                <img 
                    src={tiktok_logo}
                    alt="Tiktok Logo" 
                    className="w-8 h-8" 
                />
            </Stack>
        </Grid>
    </Grid>
    

  );
}

export default NavBar;
