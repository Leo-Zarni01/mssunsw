import React from "react";
import { useParams } from "react-router-dom";
import Masonry from "@mui/lab/Masonry";
import { Box, createTheme, ThemeProvider, CssBaseline, Typography, IconButton } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import NavBar from "../components/NavComps/NavBar";
import Footer from "../components/Footer";
import { Event, EVENTS } from "../components/eventDetailsTemplate";
import Egg1 from "../components/EasterEggs/Egg1";

const theme = createTheme({
  palette: {
    background: {
      default: "black",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h1: {
      fontSize: "48px",
      fontWeight: "normal",
      padding: 30
    },
  },
});

const PastEventPhotoGallery = () => {
  const { id } = useParams();
  const event: Event | undefined = EVENTS.find((e) => e.id === Number(id));
  const [open, setOpen] = React.useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(0);

  const handleOpen = (src: number) => {
    setOpen(true);
    setSelectedImageIndex(src)
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handlePrevious = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? prevIndex : prevIndex - 1));
  }

  const handleNext = () => {
    if (event) {
      setSelectedImageIndex((prevIndex) => (prevIndex === event.imagesUrl.length - 1 ? event.imagesUrl.length - 1 : prevIndex + 1));
    }
  }

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!open) return;
      if (event.key === "ArrowLeft") handlePrevious();
      if (event.key === "ArrowRight") handleNext();
      if (event.key === "Escape") handleClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    }, [open]);

    
    return (
      <ThemeProvider theme={theme} >
        { !event ? <></>: <>
          <CssBaseline />
          <NavBar isDark={true}/>
          <Typography variant="h1" color="#FFA700" align="center">
              {event.name}
              < Egg1 />
          </Typography>
          <Box sx={{ width: "100%", padding: 2, }}>
              <Masonry columns={{ xs: 2, sm: 3, md: 4, lg: 5 }} spacing={2}>
                  {event.imagesUrl.map((src, index) => {
                    return (
                      <Box
                          key={index}
                          component="img"
                          src={src}
                          alt="Past Event Photos"
                          onClick={() => handleOpen(index)}
                          sx={{ width: "90%", borderRadius: 2, boxShadow: 3 }}
                      />
                  )})}
              </Masonry>
          </Box>

          <Dialog
              open = {open}
              onClose={handleClose}
              fullWidth
              maxWidth={'md'}
              sx={{
                  "& .MuiPaper-root": {
                  backgroundColor: "transparent", // Makes the dialog itself transparent
                  boxShadow: "none", // Removes default shadow
                  },
                  bgcolor: "black",
              }}
          >
              <Box position={"relative"} display={"flex"} justifyContent={"center"}>
                <IconButton
                  onClick={handlePrevious}
                  sx={{
                    position: 'absolute',
                    left: 10,
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: 'white',
                    bgcolor: "rgba(0,0,0,0.5)",
                    "&:hover": {bgcolor: "rgba(10,0,0,0.7)"},
                  }}
                >
                  <ArrowBackIos />
                </IconButton>

                <IconButton
                  onClick={handleNext}
                  sx={{
                    position: 'absolute',
                    right: 10,
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: 'white',
                    bgcolor: "rgba(0,0,0,0.5)",
                    "&:hover": {bgcolor: "rgba(10,0,0,0.7)"},
                  }}
                >
                  <ArrowForwardIos />
                </IconButton>

                <IconButton 
                  onClick={handleClose}
                  sx={{
                    position: 'absolute',
                    top: -10,
                    right: 10,
                    color: "white",
                  }}
                >
                  <CloseIcon />
                </IconButton>

                <Box
                  component={"img"}
                  src={event.imagesUrl[selectedImageIndex]}
                  alt="Large Preview"
                  sx={{
                    maxWidth: "100%",
                    maxHeight: "90vh",
                    objectFit: "contain",
                    display: "block",
                    margin: "auto",
                  }}
                />
              </Box>
            </Dialog>
            <Footer />
        </>
        }
      </ThemeProvider>
    );
};

export default PastEventPhotoGallery;
