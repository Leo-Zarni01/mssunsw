import {
  Typography,
  Button,
  Box,
  useTheme,
  useMediaQuery,
  Skeleton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { Event } from "./eventDetailsTemplate";
import { useSupabaseGallery } from "../hooks/useSupabaseGallery";

const CDNURL = import.meta.env.VITE_CDN_URL + "events/";

const ImageBox = styled(Box)({
  position: "absolute",
  transition: "all 0.3s ease",
  borderRadius: "10px",
  boxShadow: "0 10px 15px rgba(0, 0, 0, 0.5)",
});

const SkeletonImageBox = styled(Box)({
  position: "absolute",
  borderRadius: "10px",
  overflow: "hidden",
});

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

const imagePositionsLarge = [
  { top: "7%", left: "-2%", width: "13%", height: "32%" },
  { top: "0%", left: "12%", width: "18%", height: "30%" },
  { top: "-2%", left: "32%", width: "20%", height: "10%" },
  { top: "-8%", left: "55%", width: "17%", height: "20%" },
  { top: "0%", left: "77%", width: "18%", height: "20%" },
  { top: "10%", left: "97%", width: "12%", height: "18%" },
  { top: "12%", left: "32%", width: "19%", height: "20%" },
  { top: "15%", left: "54%", width: "20%", height: "16%" },
  { top: "48%", left: "-5%", width: "12%", height: "17%" },
  { top: "42%", left: "8%", width: "16%", height: "26%" },
  { top: "48%", left: "77%", width: "18%", height: "20%" },
  { top: "23%", left: "80%", width: "14%", height: "19%" },
  { top: "34%", left: "97%", width: "10%", height: "30%" },
  { top: "72%", left: "-12%", width: "28%", height: "38%" },
  { top: "75%", left: "19%", width: "26%", height: "30%" },
  { top: "69%", left: "50%", width: "25%", height: "20%" },
  { top: "70%", left: "77%", width: "27%", height: "35%" },
  { top: "93%", left: "48%", width: "24%", height: "14%" },
];

const PastEventDetailsWovenPhotos: React.FC<{ event: Event }> = ({ event }) => {
  const photosRoute = window.location.href + "/photos";
  const theme = useTheme();
  const isNormalScreen = useMediaQuery(theme.breakpoints.down("xl"));

  const { images, loading } = useSupabaseGallery({
    bucket: "events",
    folder: event.folderName,
    limit: 100,
    offset: 2
  });

  const imagePositions = isNormalScreen
    ? imagePositionsNormal
    : imagePositionsLarge;

  return (
    <Box sx={{ position: "relative", width: "100vw", height: "600px" }}>
      {imagePositions.map((pos, index) => {
        const image = images[index % images.length];

        if (loading) {
          return (
            <SkeletonImageBox
              key={index}
              sx={{ top: pos.top, left: pos.left, width: pos.width, height: pos.height }}
            >
              <Skeleton
                variant="rectangular"
                width="100%"
                height="100%"
                animation="wave"
              />
            </SkeletonImageBox>
          );
        }

        if (!image) return null;

        return (
          <ImageBox
            key={index}
            sx={{ top: pos.top, left: pos.left, width: pos.width, height: pos.height }}
          >
            <Box
              component="img"
              src={`${CDNURL}${event.folderName}/${image.name}`}
              // src={`${CDNURL}${event.folderName}/${image.name}?width=800&quality=200`}
              alt={event.name}
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </ImageBox>
        );
      })}

      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          {event.name}
        </Typography>

        <Button variant="contained" sx={{ mt: 2 }}>
          <a href={photosRoute}>Explore More Photos</a>
        </Button>
      </Box>
    </Box>
  );
};

export default PastEventDetailsWovenPhotos;
