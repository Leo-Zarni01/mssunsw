import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import logo from '../../assets/MSS_Logo.webp';
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from "@mui/material/styles";
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
    { label: "About Us", path: "/aboutus" },
    { label: "Events", path: "/events" },
    { label: "Our Team", path: "/team" },
    { label: "Get Involved", path: "/getinvolved" },
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
                <a href="https://www.facebook.com/mssunsw/" target="_blank">
                  <FaFacebook size={30} />
                </a>
                <a href="https://www.instagram.com/mssunsw/" target="_blank">
                  <FaInstagram size={33} />
                </a>
                <a href="https://www.tiktok.com/@mss.unsw" target="_blank">
                  <FaTiktok size={28} />
                </a>
            </Stack>
        </Stack>
        </ThemeProvider>
        

    );
}

export default NavBarBig;
