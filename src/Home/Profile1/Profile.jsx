import React, { useState } from 'react';
// import './style.css';
import '../../../src/style.css';
import "../../../src/Herosection.css";
import { FaFacebook, FaInstagram, FaTelegram, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import profileImage from '../../assets/FB_IMG_1730311683013.jpg';
import { FaXTwitter } from 'react-icons/fa6';
const Profile = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <>
            {/* <nav>
        <div className="logo">daisyUI</div>
        <div className="menu">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Skills</a>
          <a href="#">Portfolio</a>
          <a href="#">Contact</a>
        </div>
      </nav> */}

            <div className=" flex flex-col lg:flex-row text-center lg:text-left space-x-32 container mx-auto container mx-auto px-4 py-10  items-center ">
                <div className="pl-7 mr-44 left lg:w-1/2 w-full text-center lg:text-left ">
                    <h1 className="text-3xl md:text-4xl font-bold text-white typewriter line1 typewriter line1">Hi! I Am MD. ANISUJJAMAN ONTAR</h1>
                    <h2 className="typewriter line2">and I'm Web Developer</h2>
                    <p className="typewriter line3">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
                        id nisi. I am student at Eminence College. My department is
                        Computer Science & Engineering.
                    </p>

                    <p className='typewriter line4'><b>Email:</b> officialontar@gamil.com</p>
                    <p className='typewriter line5'><b>Bhance:</b> bhance.net/officialontar</p>

                    <div className="btns">
                        <a href="https://drive.google.com/file/d/19Pea2TXfWynJ5jLGrMRRVIoe9cvLVP8i/view?usp=sharing" target="_blank" rel="noopener noreferrer" >
                            <button className="btn-download" >Download My CV</button></a>
                        <a href="https://wa.me/8801319541875" target="_blank" rel="noopener noreferrer" >
                            <button className="btn-start">Get Started</button></a>
                    </div>

                    <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 mt-6 justify-items-start">
                       <a href="https://www.linkedin.com/in/officalontar" target='_blank'><button className="git btn btn-outline rounded-2xl m-1"><FaLinkedinIn /></button></a>
                       <a href="https://x.com/officialontar" target='_blank'><button className="git btn btn-outline rounded-2xl m-1"><FaXTwitter /></button></a>
                        <a href="https://github.com/officialontar" target='_blank'><button className="git btn btn-outline rounded-2xl m-1"><FaGithub /></button></a>
                       <a href="https://www.facebook.com/officialontar" target='_blank'> <button className="git btn btn-outline rounded-2xl m-1"><FaFacebook /></button></a>
                        <a href="https://www.instagram.com/officialontar" target='_blank'><button className="git btn btn-outline rounded-2xl m-1"><FaInstagram /></button></a>
                        <a href="https://t.me/officialontar" target='_blank'><button className="git btn btn-outline rounded-2xl m-1"><FaTelegram /></button></a>                      
                    </div>
                </div>

              

                <div className="lg:pl-24 lg:right mt-10 mr-24">
                    <div className="profile-pic-wrapper relative   ">
                        <div className="gradient-ring "></div>
                        <img
                            src={profileImage}
                            alt="Profile"
                            className="profile-pic "  
                            />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;


// import React from 'react';
// import '../../../src/style.css';
// import '../../../src/Herosection.css';
// import { FaFacebook, FaInstagram, FaTelegram, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
// import profileImage from '../../assets/bgfresh.png';

// const Profile = () => {
//     return (
//         <div className="container mx-auto px-4 py-10 flex flex-col lg:flex-row items-center gap-10">
//             {/* Left Section */}
//             <div className="lg:w-1/2 w-full text-center lg:text-left space-y-5">
//                 <h1 className="text-3xl md:text-4xl font-bold text-white typewriter line1">Hi! I am AmirHamza</h1>
//                 <h2 className="text-xl md:text-2xl font-semibold text-cyan-400 typewriter line2">and I'm Web Developer</h2>

//                 <p className="text-gray-400 typewriter line3">
//                     Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
//                     excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
//                     id nisi. I am student at Faridpur Polytechnic Institute. My department is
//                     Computer Science and Technology.
//                 </p>

//                 <p className='text-yellow-400 typewriter line4'><b>Email:</b> md9407510@gamil.com</p>
//                 <p className='text-yellow-400 typewriter line5'><b>Bhance:</b> bhance.net/hamza</p>

//                 <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-4">
//                     <button className="btn bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition">Download My CV</button>
//                     <button className="btn bg-cyan-500 text-white px-6 py-2 rounded-xl hover:bg-cyan-600 transition">Get Started</button>
//                 </div>

//                 <div className="grid grid-cols-3 gap-4 mt-6 place-items-center">
//                     <a href="https://www.facebook.com/md.amirhamza.517625" target="_blank" rel="noopener noreferrer">
//                         <button className="btn btn-outline text-white hover:bg-blue-500 rounded-full"><FaFacebook /></button>
//                     </a>
//                     <a href="https://www.instagram.com/mz.44336?igsh=MWxrZXM3MzB4cjhmOQ==" target="_blank" rel="noopener noreferrer">
//                         <button className="btn btn-outline text-white hover:bg-pink-500 rounded-full"><FaInstagram /></button>
//                     </a>
//                     <button className="btn btn-outline text-white hover:bg-sky-500 rounded-full"><FaTelegram /></button>
//                     <button className="btn btn-outline text-white hover:bg-blue-400 rounded-full"><FaTwitter /></button>
//                     <a href="https://www.linkedin.com/in/md-hamza-2a0417318" target="_blank" rel="noopener noreferrer">
//                         <button className="btn btn-outline text-white hover:bg-blue-700 rounded-full"><FaLinkedinIn /></button>
//                     </a>
//                     <a href="https://github.com/amirhamza645028" target="_blank" rel="noopener noreferrer">
//                         <button className="btn btn-outline text-white hover:bg-gray-700 rounded-full"><FaGithub /></button>
//                     </a>
//                 </div>
//             </div>

//             {/* Right Section */}
//             <div className="lg:w-1/2 w-full flex justify-center mt-10 lg:mt-0">
//                 <div className="relative">
//                     <div className="gradient-ring absolute inset-0 rounded-full border-4 border-gradient-to-r from-green-400 via-blue-500 to-purple-600"></div>
//                     <img
//                         src={profileImage}
//                         alt="Profile"
//                         className="profile-pic relative z-10 rounded-full w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 object-cover mx-auto shadow-lg"
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Profile;
