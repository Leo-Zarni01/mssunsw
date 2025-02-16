import NavBar from "../components/NavComps/NavBar"
import HP_SS from "../components/HomeComps/HP_SS"
import HP_TS from "../components/HomeComps/HP_TS";

const HomePage = () => {


    return (
        <div>
            <NavBar isDark={false}/>
            <HP_SS />
            <HP_TS />
        </div>     
    )
}

export default HomePage;