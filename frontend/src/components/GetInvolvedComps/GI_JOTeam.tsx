import { Typography, Button, Stack } from '@mui/material';
import Grid from '@mui/material/Grid2';


const GI_JOTeam = () => {
    return (
        <Grid container textAlign="center" 
        sx={{
            border: '1px solid black',
            borderRadius: "40px",
            marginTop: "4rem",
            mx: "1rem"
        }}
        >
            <Grid size={12}
            sx={{
                my: "2rem"
            }}
            >
                <Typography variant="h5"
                sx={{
                    marginTop: "0.5rem"
                }}
                >
                    Join Our Team
                </Typography>
                <Typography
                sx={{
                    margin: "1rem",
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
            </Grid>
            <Grid size={{xs: 12, md: 6}}
            sx={{
                my: "2rem"
            }}
            >
                <Typography variant="h5">
                    Directors
                </Typography>
                <Typography
                sx={{
                    margin: "1rem",
                    mx: "6rem",
                    height: "11rem",
                    overflow: "auto",
                }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  
                    pariatur. Excepteur sint deserunt mollit anim id est laborum.      
                </Typography>
                <Button variant="contained" color="primary" size="medium"
                sx={{
                    backgroundColor: "black",
                    color: "orange",
                    marginTop: "0.6rem",
                    px: "3.5rem",
                    py: "0.7rem",
                    borderRadius: "11px",
                    textTransform: "none",
                    fontSize: "0.95rem",
                }}
                >
                    <Stack>
                        <Typography variant="h6">Applications Opened</Typography>
                        <Typography
                        sx={{
                            color: "white",
                            fontsize: "0.01em"
                        }}
                        >Click here to apply!!</Typography>
                    </Stack>
                </Button>
            </Grid>
            <Grid size={{xs: 12, md: 6}}
            sx={{
                my: "2rem"
            }}
            >
                <Typography variant="h5">
                    Subcommittee
                </Typography>
                <Typography
                sx={{
                    margin: "1rem",
                    mx: "6rem",
                    height: "11rem",
                    overflow: "auto",
                }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  
                    pariatur. Excepteur sint deserunt mollit anim id est laborum.      
                </Typography>
                <Button variant="contained" color="primary" size="medium"
                sx={{
                    backgroundColor: "black",
                    color: "orange",
                    marginTop: "0.6rem",
                    px: "3.5rem",
                    py: "0.7rem",
                    borderRadius: "11px",
                    textTransform: "none",
                    fontSize: "0.95rem",
                    opacity: "0.6"
                }}
                >
                    <Stack>
                        <Typography variant="h6">Applications Closed</Typography>
                        <Typography
                        sx={{
                            color: "white",
                            fontsize: "0.01em"
                        }}
                        >Stay Tuned!!</Typography>
                    </Stack>
                </Button>
            </Grid>
        </Grid>    
    )
}

export default GI_JOTeam;