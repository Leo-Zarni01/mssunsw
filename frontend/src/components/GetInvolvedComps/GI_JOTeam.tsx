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
                    Have you ever wondered what goes on behind the scene of MSS events?
                    Join the MSS team now and create valuable friendships with your team
                    members. Bonus: MSS is AHEGS approved!
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
                    height: {xs: "15rem", sm: "9rem", md: "17rem"},
                    overflow: "auto",
                }}
                >
                    MSS elects our executive team during the AGM (Term 3) period every year.
                    Apply for a position at our executive team, where you can be a part of the
                    planning and coordinating process of MSS events.       
                </Typography>
                <Button variant="contained" color="primary" size="medium"
                sx={{
                    backgroundColor: "black",
                    color: "#FFA700",
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
                        <Typography variant="h6">Applications Opened</Typography>
                        <Typography
                        sx={{
                            color: "white",
                            fontsize: "0.01em"
                        }}
                        >Stay Tuned!!</Typography>
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
                    height: {xs: "20rem", sm: "12rem", md: "17rem"},
                    overflow: "auto",
                }}
                >
                    Subcommittee members will be recruited during the EGM period.
                    MSS members have a choice of either joining the Events Subcom or
                    Media and Publicity Subcom. Take part in facilitating MSS activities
                    and media promotion by joining our subcom!       
                </Typography>
                <Button variant="contained" color="primary" size="medium"
                onClick={() => window.open("https://tr.ee/RhTd5-vtRU", "_blank")}
                sx={{
                    backgroundColor: "black",
                    color: "#FFA700",
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
        </Grid>    
    )
}

export default GI_JOTeam;