import { Button, Typography, Grid } from '@mui/material';

const GI_JoinMSS = () => {
    return (
        <Grid textAlign="center">
            <Typography variant="h5"
            sx={{
                marginTop: "0.5rem"
            }}
            >
                Join MSS
            </Typography>
            <Typography
            sx={{
                margin: "2rem",
                mx: "6rem",
            }}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                eprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                pariatur. Excepteur sint deserunt mollit anim id est laborum.      
            </Typography>
            <Button variant="contained" color="primary" size="medium"
            sx={{
                backgroundColor: "black",
                color: "orange",
                marginTop: "0.6rem",
                px: "1.5rem",
                py: "0.7rem",
                borderRadius: "11px",
                textTransform: "none",
                fontSize: "0.95rem"
            }}
            >
                    Be a Member Today!
            </Button>
        </Grid>     
    )
}

export default GI_JoinMSS;