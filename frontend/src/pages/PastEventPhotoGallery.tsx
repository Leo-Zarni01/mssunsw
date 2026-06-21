import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Masonry from "@mui/lab/Masonry";
import {
  Box,
  createTheme,
  ThemeProvider,
  CssBaseline,
  Typography,
  IconButton,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";

import NavBar from "../components/NavComps/NavBar";
import Footer from "../components/Footer";
import type { Event } from "../interface";
import { supabase } from "../supabaseClient";

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
      padding: 30,
    },
  },
});

const PastEventPhotoGallery = () => {
  const { id } = useParams();

  const [event, setEvent] = useState<Event | null>(null);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const [open, setOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    async function fetchEventAndImages() {
      if (!id) {
        setLoading(false);
        return;
      }

      const { data: eventData, error: eventError } = await supabase
        .from("events")
        .select("*")
        .eq("id", Number(id))
        .eq("past", true)
        .single();

      if (eventError || !eventData) {
        console.error("Error fetching event:", eventError);
        setLoading(false);
        return;
      }

      setEvent(eventData);

      if (!eventData.image_folder_name) {
        setLoading(false);
        return;
      }

      const { data: files, error: storageError } = await supabase.storage
        .from("events")
        .list(eventData.image_folder_name);

      if (storageError) {
        console.error("Error fetching images:", storageError);
        setLoading(false);
        return;
      }

      const urls =
        files
          ?.filter((file) => file.name !== ".emptyFolderPlaceholder")
          .filter((file) => /\.(jpg|jpeg|png|webp|gif)$/i.test(file.name))
          .map((file) => {
            const { data } = supabase.storage
              .from("events")
              .getPublicUrl(`${eventData.image_folder_name}/${file.name}`);

            return data.publicUrl;
          }) ?? [];

      setImageUrls(urls);
      setLoading(false);
    }

    fetchEventAndImages();
  }, [id]);

  const handleOpen = (index: number) => {
    setSelectedImageIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePrevious = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - 1
    );
  };

  const handleNext = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === imageUrls.length - 1 ? prevIndex : prevIndex + 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (keyboardEvent: KeyboardEvent) => {
      if (!open) return;

      if (keyboardEvent.key === "ArrowLeft") handlePrevious();
      if (keyboardEvent.key === "ArrowRight") handleNext();
      if (keyboardEvent.key === "Escape") handleClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, imageUrls.length]);

  if (loading) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar isDark={true} />
        <Typography color="#FFA700" align="center" sx={{ py: 8 }}>
          Loading photos...
        </Typography>
      </ThemeProvider>
    );
  }

  if (!event) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar isDark={true} />
        <Typography color="#FFA700" align="center" sx={{ py: 8 }}>
          Event not found.
        </Typography>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar isDark={true} />

      <Typography variant="h1" color="#FFA700" align="center">
        {event.name}
      </Typography>

      {imageUrls.length === 0 ? (
        <Typography color="white" align="center" sx={{ py: 8 }}>
          No photos found.
        </Typography>
      ) : (
        <Box sx={{ width: "100%", padding: 2 }}>
          <Masonry columns={{ xs: 2, sm: 3, md: 4, lg: 5 }} spacing={2}>
            {imageUrls.map((src, index) => (
              <Box
                key={src}
                component="img"
                src={src}
                alt={`${event.name} photo ${index + 1}`}
                onClick={() => handleOpen(index)}
                sx={{
                  width: "90%",
                  borderRadius: 2,
                  boxShadow: 3,
                  cursor: "pointer",
                  display: "block",
                }}
              />
            ))}
          </Masonry>
        </Box>
      )}

      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="md"
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "transparent",
            boxShadow: "none",
          },
          bgcolor: "black",
        }}
      >
        <Box position="relative" display="flex" justifyContent="center">
          <IconButton
            onClick={handlePrevious}
            disabled={selectedImageIndex === 0}
            sx={{
              position: "absolute",
              left: 10,
              top: "50%",
              transform: "translateY(-50%)",
              color: "white",
              bgcolor: "rgba(0,0,0,0.5)",
              "&:hover": { bgcolor: "rgba(10,0,0,0.7)" },
            }}
          >
            <ArrowBackIos />
          </IconButton>

          <IconButton
            onClick={handleNext}
            disabled={selectedImageIndex === imageUrls.length - 1}
            sx={{
              position: "absolute",
              right: 10,
              top: "50%",
              transform: "translateY(-50%)",
              color: "white",
              bgcolor: "rgba(0,0,0,0.5)",
              "&:hover": { bgcolor: "rgba(10,0,0,0.7)" },
            }}
          >
            <ArrowForwardIos />
          </IconButton>

          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: -10,
              right: 10,
              color: "white",
              zIndex: 10,
            }}
          >
            <CloseIcon />
          </IconButton>

          {imageUrls[selectedImageIndex] && (
            <Box
              component="img"
              src={imageUrls[selectedImageIndex]}
              alt="Large Preview"
              sx={{
                maxWidth: "100%",
                maxHeight: "90vh",
                objectFit: "contain",
                display: "block",
                margin: "auto",
              }}
            />
          )}
        </Box>
      </Dialog>

      <Footer />
    </ThemeProvider>
  );
};

export default PastEventPhotoGallery;