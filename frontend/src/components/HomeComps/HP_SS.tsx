import Grid from '@mui/material/Grid2';
import logo from '../../assets/MSS_Logo.webp'
import { Button , Typography, Box } from '@mui/material';



const HP_SS = () => {
    return(
        <Grid container >
            <Grid size={12}>
                {/* <Box position="relative" display="inline-block" sx={{ width: '100%'}}> */}
                    <img src={logo} alt="Image" style={{ width: '100%', height: "600px", border: '1px solid black' }} />
                    <Box
                        position="absolute"
                        top="25%"
                        left="50%"
                        style={{
                        transform: 'translate(-50%, -50%)',
                        }}
                    >
                        <Typography
                        variant="h2"
                        color="black"
                        >
                        Mingalar Par
                        </Typography>
                    </Box>
                    <Box
                        position="absolute"
                        top="35%"
                        left="50%"
                        style={{
                        transform: 'translate(-50%, -50%)',
                        }}
                    >
                        <Typography
                        variant="h4"
                        color="black"
                        >
                        UNSW
                        </Typography>
                    </Box>
                    <Box
                        position="absolute"
                        top="40%"
                        left="50%"
                        style={{
                        transform: 'translate(-50%, -50%)',
                        }}
                    >
                        <Typography
                        variant="h4"
                        color="black"
                        >
                        Myanmar Student Society
                        </Typography>
                    </Box>
                {/* </Box> */}
            </Grid>
            <Grid size={1.5}></Grid>
            <Grid size={3} container 
            sx={{ height: '40vh' }} // Full height of the viewport
            alignItems="center" // Vertical centering
            justifyContent="center" >
                <Grid 
                    item 
                    textAlign="center" 
                    xs={12} // Takes up the full width
                >
                <Typography variant="h6" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </Typography>
                <Button variant="contained" color="primary" size="medium"
                sx={{
                    backgroundColor: "black",
                    color: "orange",
                    marginTop: 4,
                    paddingRight: 4,
                    paddingLeft: 4,
                    borderRadius: "11px"
                }}
                >
                    Who We Are
                </Button>
                </Grid>
            </Grid>
            <Grid size={1.5} sx={{height: "550px"}}></Grid>
            <Grid size={6}>
                <img src={logo} alt="Image" style={{ width: '100%', height: "550px", border: '1px solid black' }} />
            </Grid>   
        </Grid>

    )
}

export default HP_SS;