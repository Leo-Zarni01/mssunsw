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
    const text = "မင်္ဂလာပါ..."
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            if (index < text.length) {
                setDisplayedText((prev) => prev + text[index]);
                setIndex((prev) => prev + 1);
            } else {
                setTimeout(() => {
                setDisplayedText("");
                setIndex(0);
                }, 300); // Pause before restarting
            }
        }, 200); // Adjust typing speed
    
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
                        // border: '1px solid black', 
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
                    {/* <img src={com_photo} alt="Image" 
                    // className="h-90 sm:h-110 md:h-150" 
                    style={{
                        width: '100%', 
                    //     // height: { xs: "20rem", sm: "30rem", md: "30rem" }, 
                    //     border: '1px solid black', 
                    //     opacity: 0.7 
                        }} 
                    /> */}
                    <Box
                        position="absolute"
                        top={{xs: "15%", sm: "17%", md: "30%"}}
                        left="50%"
                        style={{
                        transform: 'translate(-50%, -50%)',
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
                        top={{xs: "23%", sm:"28%", md: "43%"}}
                        left="50%"
                        style={{
                        transform: 'translate(-50%, -50%)',
                        }}
                    >
                        <Typography
                        // variant="h4"
                        color="#FFA700"
                        sx={{
                            // fontSize: {xs: "3rem", sm: "2rem", md: "3rem"}
                            fontSize: {xs: "1.3rem", sm:"1.8rem", md: "2.5rem"}
                        }}
                        >
                        UNSW
                        </Typography>
                    </Box>
                    <Box
                        position="absolute"
                        top={{xs: "28%", sm: "35%", md: "50%"}}
                        left="50%"
                        textAlign="center"
                        style={{
                        transform: 'translate(-50%, -50%)',
                        }}
                    >
                        <Typography
                        // variant="h4"
                        color="#FFA700"
                        sx={{
                            fontSize: {xs: "1.3rem", sm:"1.8rem", md: "2.5rem"}
                        }}
                        >
                        Myanmar Student Society
                        </Typography>
                    </Box>
            </Grid>
            <Grid size={{xs: 0.5, sm: 1.5, md: 1.5}}></Grid>
            <Grid size={{xs: 5, sm: 3, md: 3}} container 
            // sx={{ height: '40vh' }} 
            alignItems="center" 
            justifyContent="center" 
            >
                <Grid 
                textAlign="center" 
                size={{xs: 12}}
                >
                <Typography sx={{fontSize: {xs: "0.8rem", sm: "1rem", md: "1.3rem"}}}
                // variant="h6"
                 gutterBottom>
                    The Myanmar Student Society (MSS) connects Myanmar students through cultural events, support, and networking. Join our community!
                </Typography>
                <Button variant="contained" color="primary" 
                onClick={() => navigate("/about-us")}
                // size="medium"
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
                        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    }}></Box>
                </Box>
                {/* <img src={logo} alt="Image" style={{ width: '100%', height: "25rem", border: '1px solid black' }} /> */}
            </Grid>   
        </Grid>
        </ThemeProvider>

    )
}

export default HP_SS;