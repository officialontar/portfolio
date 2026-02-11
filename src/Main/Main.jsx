import About from "../About/About";
import HeroSection from "../HeroSecton/HeroSection";
import Navbar from "../Home/Navber";
import Profile from "../Home/Profile1/Profile";

import { useEffect } from 'react';
// import ReactDOM from 'react-dom/client';

import '../../src/index.css';

import AOS from 'aos';
import 'aos/dist/aos.css'
import Contact from "../Component/Contact";
import MySkills from "../Component/MySkills";
import Services from "../Component/Services";
import ProtfoliodashBoard from "../Component/ProtfoliodashBoard";
import { Outlet } from "react-router-dom";
import Footer from "../Home/Footer";

 
const Main = () => {
    useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
    return (
        <div>
           <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>


           {/* <Profile></Profile>
           { <HeroSection></HeroSection> 
           <About></About>
           <Contact></Contact>
           <MySkills></MySkills>
           <Services></Services>
           <ProtfoliodashBoard></ProtfoliodashBoard> */}
        </div>
    );
};

export default Main;