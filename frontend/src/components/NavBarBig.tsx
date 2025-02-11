import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import logo from '../assets/MSS_Logo.webp'
import fb_logo from '../assets/facebook.png'
import insta_logo from '../assets/instagram.png'
import tiktok_logo from '../assets/tiktok.png'
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from "@mui/material/styles";


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


const NavBarBig = () => {

    const navigate = useNavigate();

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
            {/* Home logo and tabs */}
            <Stack direction="row" spacing={2} sx={{ m: 2 }}>
                <img 
                    src={logo}
                    alt="MSS Logo" 
                    className="w-20 h-20" 
                />
                <Stack direction="row" spacing={7} sx={{
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
            </Stack>
            {/* Social media logo */}
            <Stack direction="row" spacing={2}>
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
        </ThemeProvider>
        

    );
}

export default NavBarBig;
