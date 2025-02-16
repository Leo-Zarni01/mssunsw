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

const images = [

    "https://cdn.pixabay.com/photo/2013/07/03/20/47/view-142994_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/02/04/20/32/man-7768120_1280.jpg",
    "https://cdn.pixabay.com/photo/2025/01/19/16/04/love-9344644_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/12/18/12/14/mosque-9275264_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/12/12/09/50/animal-9262352_1280.jpg",
    "https://cdn.pixabay.com/photo/2025/01/26/20/33/robin-9361610_1280.jpg",
    "https://cdn.pixabay.com/photo/2025/01/22/15/57/hills-9352436_1280.jpg",
    "https://cdn.pixabay.com/photo/2025/01/20/20/11/shrine-9348003_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/10/14/07/03/nail-art-5653459_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/12/23/07/48/heavenly-bamboo-9286035_1280.jpg",
    "https://cdn.pixabay.com/photo/2025/01/17/16/06/building-9340309_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/11/14/02/40/red-plum-4625194_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/08/15/17/19/strawberries-7388436_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/06/01/05/58/sign-8032702_1280.jpg",
    "https://cdn.pixabay.com/photo/2025/01/17/16/06/building-9340309_1280.jpg",
    "https://cdn.pixabay.com/photo/2025/01/20/20/11/shrine-9348003_1280.jpg",
    "https://cdn.pixabay.com/photo/2025/01/12/15/57/diver-9328628_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/06/07/14/45/winter-8814783_1280.jpg",
]

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
    const { eventId } = useParams();
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
        setSelectedImageIndex((prevIndex) => (prevIndex === images.length - 1 ? images.length - 1 : prevIndex + 1));
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
            <CssBaseline />
            <NavBar isDark={true}/>
            <Typography variant="h1" color="#FFA700" align="center">
                Fresher Welcome "{eventId}"
            </Typography>
            <Box sx={{ width: "100%", padding: 2, }}>
                <Masonry columns={{ xs: 2, sm: 3, md: 4, lg: 5 }} spacing={2}>
                    {images.map((src, index) => (
                    <Box
                        key={index}
                        component="img"
                        src={src}
                        alt="Past Event Photos"
                        onClick={() => handleOpen(index)}
                        sx={{ width: "100%", borderRadius: 2, boxShadow: 3 }}
                    />
                    ))}
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
                        src={images[selectedImageIndex]}
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
        </ThemeProvider>
        
        
    );
};

export default PastEventPhotoGallery;
