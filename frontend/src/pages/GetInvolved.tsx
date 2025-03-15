import GI_JoinMSS from "../components/GetInvolvedComps/GI_JoinMSS";
import NavBar from "../components/NavComps/NavBar"
import { createTheme, ThemeProvider } from "@mui/material/styles";
import GI_JOTeam from "../components/GetInvolvedComps/GI_JOTeam";
import GI_Bft from "../components/GetInvolvedComps/GI_Bft";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const themeGetInvolved = createTheme({
    typography: {
        fontFamily: "Poppins, sans-serif",
    },
});

const GetInvolved = () => {
    return (
        <div>
            <ThemeProvider theme={themeGetInvolved}>
                <NavBar isDark={false}/>
                <motion.div
                initial={{ opacity: 0, y: 50 }} // Start hidden and below
                animate={{ opacity: 1, y: 0 }} // Fade in and move up
                transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <GI_JoinMSS />
                </motion.div>
                <motion.div
                initial={{ opacity: 0, y: 50 }} // Start hidden and below
                animate={{ opacity: 1, y: 0 }} // Fade in and move up
                transition={{ duration: 0.8, delay:0.5, ease: "easeOut" }}
                >
                    <GI_JOTeam />
                </motion.div>  
                <motion.div
                initial={{ opacity: 0, y: 50 }} // Start hidden and below
                animate={{ opacity: 1, y: 0 }} // Fade in and move up
                transition={{ duration: 0.8, delay:1, ease: "easeOut" }}
                >
                    <GI_Bft />
                </motion.div> 
                <motion.div
                initial={{ opacity: 0, y: 50 }} // Start hidden and below
                animate={{ opacity: 1, y: 0 }} // Fade in and move up
                transition={{ duration: 0.8, delay:1, ease: "easeOut" }}
                >
                    <Footer />
                </motion.div> 
            </ThemeProvider>
        </div>     
    )
}

export default GetInvolved;