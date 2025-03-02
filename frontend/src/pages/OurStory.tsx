import Typography from "@mui/material/Typography";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import Grid from '@mui/material/Grid2';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Logo from "../assets/MSS_Logo.webp";
import { TimelineOppositeContent } from "@mui/lab";
import { FC } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavComps/NavBar";
import Egg1 from "../components/EasterEggs/Egg1"

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
    h1: {
      fontSize: "48px",
      fontWeight: "normal",
      padding: 30
    },
    body1: {
      fontSize: "20px",
      fontWeight: "normal",
      padding: 5
    },
    body2: {
      padding: 5
    }
  },
});

type SomeComponentProps = { time: string, activity: string, details: string, dotcolor: string };

const Timelinecard: FC<SomeComponentProps> = ({ time, activity, details, dotcolor }) => {
  return (
    <TimelineItem>
      <TimelineOppositeContent
        variant="body2"
      >
        {time}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot
          sx={{ backgroundColor: dotcolor }}
        />
        <TimelineConnector
          sx={{ height: 90 }}
        />
      </TimelineSeparator>
      <TimelineContent>
        <Box
          sx={{ mt: -3 }}
        >
          <Typography variant="body1">{activity}</Typography>
          <Typography variant="body2">{details}</Typography>
        </Box>

      </TimelineContent>
    </TimelineItem>
  )
}

const OurStory = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar isDark={false}/>
      <Typography variant="h1" align="center" color="#FFA700">
        Our Story
      </Typography>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <img src={Logo} alt="MSS Logo" style={{ width: "300px", borderRadius: "10px" }} />
      </Box>

      <Typography variant="body1" align="center" padding={5}>
      The Myanmar Students' Society is a university-based cultural organization dedicated to fostering a strong sense of community and vibrant environment among Burmese students. It serves as a home away from home, offering cultural events, social gatherings, and support networks to celebrate Myanmar’s culture.
      </Typography>

      <Box
        bgcolor="#fff5d7"
      >
        <Grid container spacing={1} columns={{xs: 4, lg: 12}}>
          <Grid size={{xs: 4, lg: 6}} padding={5}>
            <Typography variant="h1" color="#ee6055" align="center">
              Mission
            </Typography>
            <Typography variant="body1" align="center">
            Our mission is aimed at building a supportive and inclusive community for Burmese students through celebrating Myanmar’s rich culture. MSS aims to foster meaningful connections, memories and create a comfortable, familiar environment for Myanmar students.
            </Typography>
          </Grid>
          <Grid size={{xs: 4, lg: 6}} padding={5}>
            <Typography variant="h1" color="#8bb174" align="center">
              Vision
            </Typography>
            <Typography variant="body1" align="center">
            Our vision is to grow the reach of our society and create more meaningful events for our MSS’ members.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Typography variant="h1" align="center" color="#FFA700">
        Our Journey
      </Typography>

      <Egg1 />
      <Timeline position="alternate">
        <Timelinecard
          time="2012"
          activity="MSS born"
          details="Ko Thu Ya founded MSS"
          dotcolor="#ffd700"
        />
        <Timelinecard
          time="2022"
          activity="Thadingyut Festival"
          details="our biggest event yet! UNSW Myanmar Student Society x International Markets"
          dotcolor="#8bb174"
        />
        <Timelinecard
          time="2022"
          activity="Won 2022 Club Cultural Award"
          details="MSS won 2022 Club Cultural Award for promoting artistic or ethnocultural expression within the UNSW community"
          dotcolor="#ee6055"
        />
        <Timelinecard
          time="2023"
          activity="AHEGS Approved"
          details="AHEGS stands for the Australian Higher Education Graduation Statement. It is a document issued to graduates detailing their academic achievements and extracurricular activities alongside their graduation statement."
          dotcolor="#ffd700"
        />
        <Timelinecard
          time="2024 onwards"
          activity="More Events for the fun"
          details="Stay Tuned to connect with fellow Burmese students"
          dotcolor="#ffd700"
        />
      </Timeline>
      <Footer />
    </ThemeProvider>
  )
}

export default OurStory;
