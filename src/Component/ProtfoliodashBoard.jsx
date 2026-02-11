import { Link } from "react-router-dom";
import ProtfolioTittle from "./ProtfolioTittle";

const ProtfoliodashBoard = () => {
    const navOptions = <>
        <li><Link to="/">All</Link></li>
        <li><Link to="/About">E-commerce</Link></li>
        <li><Link to="/Services">Educational</Link></li>
        <li><Link to="/Skills">web-App</Link></li>
        <li><Link to="/Protfolio">Top10</Link></li>
       
    </>
    return (
        <div>
            <ProtfolioTittle
                subHeading={"WHAT I WILL DO FOR YOU"}
                heading={"MY letest Project"}
            >
            </ProtfolioTittle>
            <div className="mx-auto text-center md:w-4/12 my-8">

                <div>
                    <div className="navbar bg-base-100 shadow-sm">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                    {navOptions}
                                </ul>
                            </div>
                            
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                {navOptions}
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ProtfoliodashBoard;