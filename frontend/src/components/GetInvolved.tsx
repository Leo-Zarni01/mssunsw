import GI_JoinMSS from "./GetInvolvedComps/GI_JoinMSS";
import NavBar from "./NavBar"
import { createTheme, ThemeProvider } from "@mui/material/styles";
import GI_JOTeam from "./GetInvolvedComps/GI_JOTeam";
import { motion } from "framer-motion";


const themeGetInvolved = createTheme({
    typography: {
        fontFamily: "Poppins, sans-serif",
    },
});

const GetInvolved = () => {
    return (
        <div>
            <ThemeProvider theme={themeGetInvolved}>
                <NavBar />
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
            </ThemeProvider>
        </div>     
    )
}

export default GetInvolved;