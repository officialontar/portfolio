import { Link, } from "react-router-dom";
import '../../src/style.css'
// import {imgbgfresh} from '../assets/300x300_41.5KB.jpg'
import img2 from '../assets/300x300_41.5KB.jpg'
const Navbar = () => {
    const navOptions = <>
        <li className="nav a"><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Sercices">Services</Link></li>
        <li><Link to="/MySkill">Skills</Link></li>
        <li><Link to="/Profile">Protfolio</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
    </>
    return (
        <div>
            <div className="body navbar shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn  btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className=" menu menu-sm dropdown-content bg-gray-800 text-white rounded-box z-1 mt-3 w-52 p-2 shadow nav">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">The ONTAR</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" menu menu-horizontal px-1 nav">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <img className="rounded-full h-12 w-12" src={img2} alt="300x300_41.5KB.jpg" />
                    {/* <a className="btn">Button</a> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;