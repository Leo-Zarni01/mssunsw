import NavBar from "../components/NavComps/NavBar"
import HP_SS from "../components/HomeComps/HP_SS"
import HP_TS from "../components/HomeComps/HP_TS";
import MeetTheExecutives from "../components/MeetTheExecutives";
import Footer from "../components/Footer";

const HomePage = () => {


    return (
        <div>
            <NavBar />
            <HP_SS />
            <HP_TS />
            <MeetTheExecutives />
            <Footer />
        </div>     
    )
}

export default HomePage;