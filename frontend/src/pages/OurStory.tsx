import Typography from "@mui/material/Typography";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import Grid from '@mui/material/Grid2';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Logo from "../assets/images/Logo.png";
import { TimelineOppositeContent } from "@mui/lab";
import { FC } from "react";
import Footer from "../components/Footer";

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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar, lectus nec sagittis varius, arcu est consequat dolor, vitae dapibus erat mi id velit. Suspendisse potenti. Duis volutpat, lacus eget lacinia vehicula, erat enim luctus urna, nec vestibulum elit erat nec purus.
      </Typography>

      <Box
        bgcolor="#fff5d7"
      >
        <Grid container spacing={2}>
          <Grid size={6} padding={5}>
            <Typography variant="h1" color="#ee6055" align="center">
              Mission
            </Typography>
            <Typography variant="body1" align="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar, lectus nec sagittis varius, arcu est consequat dolor, vitae dapibus erat mi id velit. Suspendisse potenti. Duis volutpat, lacus eget lacinia vehicula, erat enim luctus urna, nec vestibulum elit erat nec purus.
            </Typography>
          </Grid>
          <Grid size={6} padding={5}>
            <Typography variant="h1" color="#8bb174" align="center">
              Vision
            </Typography>
            <Typography variant="body1" align="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar, lectus nec sagittis varius, arcu est consequat dolor, vitae dapibus erat mi id velit. Suspendisse potenti. Duis volutpat, lacus eget lacinia vehicula, erat enim luctus urna, nec vestibulum elit erat nec purus.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Typography variant="h1" align="center" color="#FFA700">
        Our Journey
      </Typography>

      <Timeline position="alternate">
        <Timelinecard
          time="2012"
          activity="MSS born"
          details="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          dotcolor="#ffd700"
        />
        <Timelinecard
          time="20xx"
          activity="Loerm ipsum"
          details="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          dotcolor="#8bb174"
        />
        <Timelinecard
          time="20xx"
          activity="Lorem ipsum"
          details="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          dotcolor="#ee6055"
        />
        <Timelinecard
          time="20xx"
          activity="Lorem ipsum"
          details="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          dotcolor="#ffd700"
        />
      </Timeline>
      <Footer />
    </ThemeProvider>
  )
}

export default OurStory;
