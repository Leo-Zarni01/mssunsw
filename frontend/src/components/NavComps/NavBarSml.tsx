import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import logo from '../../assets/MSS_Logo.webp'
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect, FC } from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const themenav = createTheme({
    typography: {
        fontFamily: "Poppins, sans-serif",
    },
});

const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about-us" },
    { label: "Events", path: "/events" },
    { label: "Our Team", path: "/team" },
    { label: "Get Involved", path: "/get-involved" },
];

type Args = {
    isDark: boolean,
};

const NavBarSml:FC<Args> = ({isDark}) => {

    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
          document.body.style.overflow = 'hidden'; // Disable scrolling
        } else {
          document.body.style.overflow = 'auto'; // Enable scrolling
        }
    
        return () => {
          document.body.style.overflow = 'auto'; // Re-enable scrolling on component unmount
        };
    }, [isOpen]);

    return (
        <ThemeProvider theme={themenav}>
        <Stack direction="row"
        spacing={2}
        sx=
        {{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: "1rem",
            py: "0.5rem"
        }}
        >
            <Stack direction="row" >
                <MenuIcon
                className="mt-3.5 sm:mt-6 md:mt-6 mr-2"
                sx={{
                    fontSize: {xs: "1.7rem", sm: "2.2rem"}
                }}
                onClick={() => setIsOpen(true)}
                ></MenuIcon>
                <img 
                    src={logo}
                    alt="MSS Logo"
                    className="w-12 sm:w-18 h-12 sm:h-18"
                />
            </Stack>
            
            <Stack direction="row" spacing={2} >
                <a href="https://www.facebook.com/mssunsw/" target="_blank">
                  {isDark ? <FaFacebook className="text-white size-6 sm:size-8 md:size-8"/> : <FaFacebook className="size-6 sm:size-8 md:size-8"/>}
                  
                </a>
                <a href="https://www.instagram.com/mssunsw/" target="_blank">
                  {isDark ? <FaInstagram className="text-white size-6 sm:size-9 md:size-9"/> : <FaInstagram className="size-6 sm:size-9 md:size-9"/>}
                </a>
                <a href="https://www.tiktok.com/@mss.unsw" target="_blank">
                  {isDark ? <FaTiktok className="text-white size-6 sm:size-8 md:size-8"/> : <FaTiktok className="size-6 sm:size-8 md:size-8"/>}
                </a>
            </Stack>
        </Stack>
        {isOpen && (
                <Box
                sx={{
                    position: "absolute",
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: "white",
                    top: 0,
                    bottom: 0,
                    display: "flex",
                    zIndex: 9999,
                    overflow: "hidden",
                    flexDirection: "column",
                    px: "0.5rem",
                    py: "0.5rem"
                }}
                >

                <Stack direction="row" >
                    <CloseIcon fontSize="medium" sx={{mt: "1.2rem", mx: "0.5rem"}}
                    onClick={() => setIsOpen(false)}
                    ></CloseIcon>
                    <img 
                        src={logo}
                        alt="MSS Logo"
                        style={{width: "3.5rem", height: "3.5rem"}}
                    />
                </Stack>
                <Stack direction="column" spacing={5} sx={{
                    pt: { xs: 2, sm: 3, md: 3 }, 
                    m: { xs: 2, sm: 3, md: 2 }, 
                }}>
                    <>
                        {navItems.map((item, index) => 
                            <Typography
                                key={index}
                                variant="subtitle1"
                                gutterBottom
                                onClick={() => navigate(item.path)}
                                sx={{ 
                                    color: "#FFA700",
                                    cursor: "pointer",
                                    borderBottom: "2px solid black",
                                    py: "1rem",
                                    transition: "color 0.3s ease", // Smooth color transition
                                    "&:hover": {
                                    color: isDark? "white" : "black", // Change color on hover
                                    }
                                }}
                            >
                                {item.label}
                            </Typography>
                        )}
                    </>
                </Stack>
                    
                </Box>
        )}
        </ThemeProvider>
        

    );
}

export default NavBarSml;
