import com_photo from '../../assets/IMG_8771.png'
import tst_photo from '../../assets/IMG_6714.png'
import { Button , Typography, Box, Grid2 as Grid } from '@mui/material';
import { motion } from "framer-motion"
import { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";


const theme = createTheme({
    typography: {
        fontFamily: "Poppins, sans-serif",
    },
});


const HP_SS = () => {
    const text = "မ င်္ဂ လာ ပါ . . ."
    const words = text.split(" ");
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            if (index < words.length) {
                setDisplayedText((prev) => (prev ? prev + " " + words[index] : words[index]));
                setIndex((prev) => prev + 1);
            } else {
                setTimeout(() => {
                setDisplayedText("");
                setIndex(0);
                }, 300); 
            }
        }, 200); 
    
        return () => clearInterval(interval);
    }, [index]);


    return(
        <ThemeProvider theme={theme}>
        <Grid container >
            <Grid size={12}>
                    <Box
                    sx={{
                        width: '100%', 
                        height: { xs: "22rem", sm: "30rem", md: "46rem" }, 
                        opacity: 0.8,
                        backgroundImage: `url(${com_photo})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        }} >
                        <Box sx={{
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        }}></Box>
                    </Box>
                    <Box
                        position="absolute"
                        top={{xs: "15%", sm: "17%", md: "30%"}}
                        left="50%"
                        textAlign="center"
                        style={{
                        transform: 'translate(-50%, -50%)',
                        width: "100%"
                        }}
                    >
                        <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        >
                            <Typography color="#FFA700"
                            sx={{
                                fontSize: {xs: "2.3rem", sm: "3.4rem", md: "4rem"}
                            }}
                            >
                                {displayedText}
                            </Typography>
                        </motion.div>
                    </Box>
                    <Box
                        position="absolute"
                        top={{xs: "23%", sm:"28%", md: "45%"}}
                        left="50%"
                        style={{
                        transform: 'translate(-50%, -50%)',
                        }}
                    >
                        <Typography
                        color="#FFA700"
                        sx={{
                            fontSize: {xs: "1.3rem", sm:"1.8rem", md: "3.5rem"}
                        }}
                        >
                        UNSW
                        </Typography>
                    </Box>
                    <Box
                        position="absolute"
                        top={{xs: "30%", sm: "35%", md: "55%"}}
                        left="50%"
                        textAlign="center"
                        style={{
                        transform: 'translate(-50%, -50%)',
                        width: "100%"
                        }}
                    >
                        <Typography
                        color="#FFA700"
                        sx={{
                            fontSize: {xs: "1.3rem", sm:"1.8rem", md: "3.5rem"}
                        }}
                        >
                        Myanmar Students' Society
                        </Typography>
                    </Box>
            </Grid>
            <Grid size={{xs: 0.5, sm: 1.5, md: 1.5}}></Grid>
            <Grid size={{xs: 5, sm: 3, md: 3}} container 
            alignItems="center" 
            justifyContent="center" 
            >
                <Grid 
                textAlign="center" 
                size={{xs: 12}}
                >
                <Typography sx={{fontSize: {xs: "0.8rem", sm: "1rem", md: "1.3rem"}}}
                 gutterBottom>
                    The Myanmar Student Society (MSS) brings Myanmar students together through vibrant cultural events, support networks, and meaningful connections. Be part of our community today!
                </Typography>
                <Button variant="contained" color="primary" 
                onClick={() => navigate("/about-us")}
                sx={{
                    fontSize: {xs: "0.8rem", sm: "1rem", md: "1.2rem"},
                    backgroundColor: "black",
                    color: "#FFA700",
                    marginTop: 4,
                    paddingRight: 4,
                    paddingLeft: 4,
                    borderRadius: "11px",
                    width: { xs: "10rem", sm: "10.5rem", md: "14rem" }
                }}
                >
                    Who We Are
                </Button>
                </Grid>
            </Grid>
            <Grid size={{xs: 0.5, sm: 1.5, md: 1.5}} sx={{height: {xs: "20rem", sm: "27rem", md: "35rem"}}}></Grid>
            <Grid size={6}>
                <Box
                sx={{
                    width: '100%', 
                    height: { xs: "20rem", sm: "27rem", md: "35rem" }, 
                    opacity: 0.9,
                    backgroundImage: `url(${tst_photo})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    }} >
                    <Box sx={{
                        width: '100%',
                        height: '100%',
                    }}></Box>
                </Box>
            </Grid>   
        </Grid>
        </ThemeProvider>

    )
}

export default HP_SS;