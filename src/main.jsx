

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import React from 'react'
import * as ReactDOM from "react-dom/client";

import './index.css'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Main/Main';
import { BiHome } from 'react-icons/bi';
import Profile from './Home/Profile1/Profile';
import Navbar from './Home/Navber';
import Services from './Component/Services';
import MySkills from './Component/MySkills';
import Contact from './Component/Contact';
import ProtfoliodashBoard from './Component/ProtfoliodashBoard';
import Home from './Home/Home';
import About from './About/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/Profile',
        element:<Profile></Profile>
      },
      {
        path:'/About',
        element:<About></About>
      },
      {
        path:'/Navber',
        element:<Navbar></Navbar>
      },
      {
        path:'/Sercices',
        element:<Services></Services>
      },
      {
        path:'/MySkill',
        element:<MySkills></MySkills>
      },
      {
        path:'/Contact',
        element:<Contact></Contact>
      },
      {
        path:'ProtfoliodashBoard',
        element:<ProtfoliodashBoard></ProtfoliodashBoard>
      }
    ]
  },
]);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className='max-w-7xl mx-auto'> 
       <RouterProvider router={router} />
    </div>
   
  </React.StrictMode>
);
