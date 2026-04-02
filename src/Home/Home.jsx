import About from "../About/About";
import ProjectCard from "../Component/Project/ProjectCard";
import Projects from "../Component/Project/Projects";
import Profile from "./Profile1/Profile";
import About2 from "../About/About2";
import PhotoGallery from "./PhotoGallery";
import Services from "../Component/Services";
import MySkills from "../Component/MySkills";
import Contact from "../Component/Contact";

const Home = () => {
    return (
        <div className="pt-20">
            <section id="home" className="scroll-mt-24">
                <Profile />
            </section>

            <section id="about" className="scroll-mt-24">
                <About />
            </section>

            <section id="services" className="scroll-mt-24">
                <About2 />
                <Services />
            </section>

            <section id="skills" className="scroll-mt-24">
                <MySkills />
                <ProjectCard />
            </section>

            <section id="portfolio" className="scroll-mt-24">
                <Projects />
                <PhotoGallery />
            </section>

            <section id="contact" className="scroll-mt-24">
                <Contact />
            </section>
        </div>
    );
};

export default Home;