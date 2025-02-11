import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import logo from '../assets/MSS_Logo.webp'
import fb_logo from '../assets/facebook.png'
import insta_logo from '../assets/instagram.png'
import tiktok_logo from '../assets/tiktok.png'
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect } from "react";

const themenav = createTheme({
    typography: {
        fontFamily: "Poppins, sans-serif",
    },
});

const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/aboutus" },
    { label: "Events", path: "/events" },
    { label: "Our Team", path: "/team" },
    { label: "Get Involved", path: "/getinvolved" },
];

const logoItems = [
    { label: fb_logo, text: "Facebook Logo" },
    { label: insta_logo, text: "Instagram Logo" },
    { label: tiktok_logo, text: "Tiktok Logo" }
];



const NavBarSml = () => {

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
            py: "1rem"
        }}
        >
            <Stack direction="row" >
                <MenuIcon fontSize="large" sx={{mt: "1rem", mr: "0.5rem"}}
                onClick={() => setIsOpen(true)}
                ></MenuIcon>
                <img 
                    src={logo}
                    alt="MSS Logo"
                    style={{width: "4rem", height: "4rem"}}
                />
            </Stack>
            
            <Stack direction="row" spacing={2} >
                <>
                    {logoItems.map((item) => (
                        <img 
                            src={item.label}
                            alt={item.text}
                            className="w-8 h-8" 
                        />
                    ))}
                </>
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
                                    color: "orange",
                                    cursor: "pointer",
                                    borderBottom: "2px solid black",
                                    py: "1rem",
                                    transition: "color 0.3s ease", // Smooth color transition
                                    "&:hover": {
                                    color: "black", // Change color on hover
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
