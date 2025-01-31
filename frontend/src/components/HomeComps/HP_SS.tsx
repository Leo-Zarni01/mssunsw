import Grid from '@mui/material/Grid2';
import logo from '../../assets/MSS_Logo.webp'
import { Button , Typography, Box } from '@mui/material';
import { motion } from "framer-motion"
import { useEffect, useState } from "react";
import "@fontsource/poppins";
import { createTheme, ThemeProvider } from "@mui/material/styles";


export const theme = createTheme({
    typography: {
        fontFamily: "Poppins, sans-serif",
    },
});


const HP_SS = () => {

    const text = "Mingalar Par";
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);

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
                    <img src={logo} alt="Image" style={{ width: '100%', height: "600px", border: '1px solid black' }} />
                    <Box
                        position="absolute"
                        top="25%"
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
                            <Typography variant="h2" color="black">
                                {displayedText}
                            </Typography>
                        </motion.div>
                    </Box>
                    <Box
                        position="absolute"
                        top="35%"
                        left="50%"
                        style={{
                        transform: 'translate(-50%, -50%)',
                        }}
                    >
                        <Typography
                        variant="h4"
                        color="black"
                        >
                        UNSW
                        </Typography>
                    </Box>
                    <Box
                        position="absolute"
                        top="40%"
                        left="50%"
                        style={{
                        transform: 'translate(-50%, -50%)',
                        }}
                    >
                        <Typography
                        variant="h4"
                        color="black"
                        >
                        Myanmar Student Society
                        </Typography>
                    </Box>
            </Grid>
            <Grid size={1.5}></Grid>
            <Grid size={3} container 
            sx={{ height: '40vh' }} 
            alignItems="center" 
            justifyContent="center" 
            >
                <Grid 
                item 
                textAlign="center" 
                xs={12} 
                >
                <Typography variant="h6" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </Typography>
                <Button variant="contained" color="primary" size="medium"
                sx={{
                    backgroundColor: "black",
                    color: "orange",
                    marginTop: 4,
                    paddingRight: 4,
                    paddingLeft: 4,
                    borderRadius: "11px"
                }}
                >
                    Who We Are
                </Button>
                </Grid>
            </Grid>
            <Grid size={1.5} sx={{height: "550px"}}></Grid>
            <Grid size={6}>
                <img src={logo} alt="Image" style={{ width: '100%', height: "550px", border: '1px solid black' }} />
            </Grid>   
        </Grid>
        </ThemeProvider>

    )
}

export default HP_SS;