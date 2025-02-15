import { useMediaQuery } from "@mui/material";
import NavBarBig from "./NavBarBig"
import NavBarSml from "./NavBarSml"



const NavBar = () => {

    const isSmallScreen = useMediaQuery("(max-width:950px)");

    return (
        <div>
            {isSmallScreen ? <NavBarSml /> : <NavBarBig />}
        </div>     
    )
}

export default NavBar;