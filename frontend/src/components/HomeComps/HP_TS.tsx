import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';
import { useState } from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Carousel from './Carousel';


const theme = createTheme({
    typography: {
        fontFamily: "Poppins, sans-serif",
    },
});

const HP_TS = () => {

    const [eventState, setEventState] = useState("upcoming");

    return (
        <ThemeProvider theme={theme}>
        <Grid
        sx={{
            backgroundColor: "orange",
            height: "40rem",
            opacity: "0.3"
        }}
        >
            <Grid size={12} textAlign="center" sx={{paddingTop: "2rem"}}>
                <Typography variant="h6" onClick={() => setEventState("past")}
                sx={{
                    display: "inline",
                    color: eventState == "past" ? "green" : "black",
                    cursor: "pointer",
                    borderBottom: eventState == "past" ? "2px solid green" : "none",
                    opacity: "1"
                }}
                >
                    Past Events
                </Typography>
                <Typography variant="h6" onClick={() => setEventState("upcoming")}
                sx={{
                    display: "inline",
                    marginLeft: "4rem",
                    cursor: "pointer",
                    color: eventState == "upcoming" ? "green" : "black",
                    borderBottom: eventState == "upcoming" ? "2px solid green" : "none"
                }}
                >
                    Upcoming Events
                </Typography>
            </Grid>
            <Carousel />
        </Grid>
        </ThemeProvider>
    )
}

export default HP_TS;