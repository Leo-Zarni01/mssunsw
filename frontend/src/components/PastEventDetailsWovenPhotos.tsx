import { Typography, Button, Box, useTheme, useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import "../App.css";
import type { Event } from "../interface";
import { supabase } from "../supabaseClient";

const PastEventDetailsWovenPhotos: React.FC<{ event: Event }> = ({ event }) => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [loadingImages, setLoadingImages] = useState(true);

  const photosRoute = window.location.href + "/photos";
  const theme = useTheme();
  const isNormalScreen = useMediaQuery(theme.breakpoints.down("xl"));

  useEffect(() => {
    async function fetchImages() {
      if (!event.image_folder_name) {
        setLoadingImages(false);
        return;
      }

      const { data, error } = await supabase.storage
        .from("events")
        .list(event.image_folder_name);

      if (error) {
        console.error("Error fetching images:", error);
        setLoadingImages(false);
        return;
      }

      const urls =
        data
          ?.filter((file) => file.name !== ".emptyFolderPlaceholder")
          .filter((file) =>
            /\.(jpg|jpeg|png|webp|gif)$/i.test(file.name)
          )
          .map((file) => {
            const { data } = supabase.storage
              .from("events")
              .getPublicUrl(`${event.image_folder_name}/${file.name}`);

            return data.publicUrl;
          }) ?? [];

      console.log("Image URLs:", urls);
      setImageUrls(urls);
      setLoadingImages(false);
    }

    fetchImages();
  }, [event.image_folder_name]);

  const imagePositionsNormal = [
    { top: "7%", left: "-2%", width: "12%", height: "32%" },
    { top: "0%", left: "12%", width: "18%", height: "28%" },
    { top: "-2%", left: "32%", width: "20%", height: "10%" },
    { top: "-8%", left: "58%", width: "17%", height: "20%" },
    { top: "0%", left: "81%", width: "15%", height: "20%" },
    { top: "10%", left: "97%", width: "12%", height: "18%" },
    { top: "12%", left: "32%", width: "19%", height: "20%" },
    { top: "15%", left: "56%", width: "20%", height: "16%" },
    { top: "48%", left: "-5%", width: "12%", height: "17%" },
    { top: "42%", left: "8%", width: "16%", height: "26%" },
    { top: "48%", left: "77%", width: "18%", height: "20%" },
    { top: "23%", left: "80%", width: "14%", height: "19%" },
    { top: "34%", left: "97%", width: "10%", height: "30%" },
    { top: "72%", left: "-12%", width: "28%", height: "38%" },
    { top: "77%", left: "19%", width: "26%", height: "30%" },
    { top: "69%", left: "50%", width: "25%", height: "20%" },
    { top: "70%", left: "77%", width: "27%", height: "35%" },
    { top: "93%", left: "48%", width: "24%", height: "14%" },
  ];

  const imagePositionsLarge = imagePositionsNormal;

  const imagePositions = isNormalScreen
    ? imagePositionsNormal
    : imagePositionsLarge;

  const ImageBox = styled(Box)({
    position: "absolute",
    transition: "all 0.3s ease",
    borderRadius: "10px",
    boxShadow: "0 10px 15px rgba(0, 0, 0, 0.5)",
  });

  if (loadingImages) {
    return (
      <Box sx={{ textAlign: "center", py: 8 }}>
        <Typography variant="h5">Loading photos...</Typography>
      </Box>
    );
  }

  if (imageUrls.length === 0) {
    return (
      <Box sx={{ textAlign: "center", py: 8 }}>
        <Typography variant="h5">{event.name}</Typography>
        <Typography>No photos found.</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: {
          xs: "400px",
          sm: "500px",
          md: "600px",
        },
        bgcolor: "white",
        overflow: "hidden",
        "@keyframes fadeInUp": {
          "0%": {
            opacity: 0,
            transform: "perspective(1000px) rotateY(5deg) translateY(30px)",
          },
          "100%": {
            opacity: 1,
            transform: "perspective(1000px) rotateY(5deg) translateY(0)",
          },
        },
      }}
    >
      {imagePositions.map((pos, index) => {
        const imageUrl = imageUrls[index % imageUrls.length];

        return (
          <ImageBox
            key={index}
            sx={{
              top: pos.top,
              left: pos.left,
              width: pos.width,
              height: pos.height,
              opacity: 0,
              animation: "fadeInUp 0.9s ease forwards",
              animationDelay: `${index * 0.04}s`,
              transform: "perspective(1000px) rotateY(5deg)",
              "&:hover": {
                transform:
                  "perspective(1000px) rotateY(0deg) translateY(-10px)",
              },
            }}
          >
            <Box
              sx={{
                height: "100%",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "8px 8px 24px rgba(0, 0, 0, 0.2)",
                border: "4px solid white",
              }}
            >
              <Box
                component="img"
                src={imageUrl}
                alt={`MSS ${index + 1}`}
                onLoad={() => console.log("Loaded:", imageUrl)}
                onError={() => console.log("Failed:", imageUrl)}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Box>
          </ImageBox>
        );
      })}

      <Box
        sx={{
          position: "absolute",
          top: "49%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          zIndex: 10,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            mb: 2,
            color: "black",
          }}
        >
          {event.name}
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "black",
            color: "#FFA700",
            padding: "10px 14px",
            fontSize: { xs: "0.7rem", sm: "0.9rem" },
            "&:hover": {
              backgroundColor: "#333333",
            },
          }}
        >
          <a
            href={photosRoute}
            style={{
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Explore More Photos
          </a>
        </Button>
      </Box>
    </Box>
  );
};

export default PastEventDetailsWovenPhotos;