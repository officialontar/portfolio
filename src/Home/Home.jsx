import About from "../About/About";
import ProjectCard from "../Component/Project/ProjectCard";
import Projects from "../Component/Project/Projects";
import Profile from "./Profile1/Profile";
import About2 from "../About/About2";
import PhotoGallery from "./PhotoGallery";
// import ProtfoliodashBoard from "../Component/ProtfoliodashBoard";
// import Banner from "./Banner";
 
const Home = () => {
    return (
        <div>
            {/* <ProtfoliodashBoard></ProtfoliodashBoard> */}
            <Profile></Profile>
            {/* <Banner></Banner> */}
            <About></About>
            <About2></About2>
            <ProjectCard></ProjectCard>
            <Projects></Projects>
            <PhotoGallery></PhotoGallery>
        </div>
    );
};

export default Home;