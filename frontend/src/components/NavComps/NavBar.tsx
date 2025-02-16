import { useMediaQuery } from "@mui/material";
import NavBarBig from "./NavBarBig"
import NavBarSml from "./NavBarSml"
import { FC } from "react";

type Args = {
    isDark: boolean,
};

const NavBar: FC<Args> = ({isDark}) => {

    const isSmallScreen = useMediaQuery("(max-width:950px)");

    return (
        <div>
            {isSmallScreen ? <NavBarSml isDark={isDark} /> : <NavBarBig isDark={isDark} />}
        </div>
    )
}

export default NavBar;