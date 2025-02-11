import { useMediaQuery } from "@mui/material";
import NavBar from "./NavBar"
import HP_SS from "./HomeComps/HP_SS"
import HP_TS from "./HomeComps/HP_TS";
import NavBarSml from "./NavBarSml";

const HomePage = () => {

    const isSmallScreen = useMediaQuery("(max-width:950px)");

    return (
        <div>
            {isSmallScreen ? <NavBarSml /> : <NavBar />}
            <HP_SS />
            <HP_TS />
        </div>     
    )
}

export default HomePage;