import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
const Navbar = () => {
  const [active, setActive] = useState()
  const {pathname} = useLocation()
  useEffect(()=>{
    setActive(pathname)
  },[pathname])
  return (
    <nav className="sticky top-0 z-100 border border-b-gray-800 shadow-lg ">
      <div className="bg-black flex flex-row items-center    pt-4 pb-4 pr-6 pl-6 text-white">
        <div className="flex flex-row items-center gap-3">
          <div className="font-bold text-2xl text-[#00b4ff] animate-zoom" >AM</div>
          <div>
            <h1 className="text-sm font-semibold">Ashutosh Maran</h1>
            <div className="font-thin text-xs text-[#9aa0a6]">Software Developer</div>
          </div>
        </div>

        <div className=" flex gap-7 ml-35  ">
          <div
        className={`h-1 absolute top-12 bg-[#00b4ff] 
              transition-all duration-300 ease-in-out 
              shadow-[0_0_15px_3px_#00b4ff] rounded-full animate-underline

          ${ active=="/home" ? "translate-x-2 w-8 " : active=="/projects" ? "translate-x-20 w-12 ml-1" : active=="/gallery"? "translate-x-44 w-10 ml-0":active=="/skills"?"translate-x-63.5 w-7 ml-0.5":active=="/Certificates"?"translate-x-80 w-17 ml-2.5":active=="/blog"?"translate-x-100 w-9 ml-10.5":active=="/resume"?"translate-x-120 w-12 ml-9.5":active=="/about"?"translate-x-150 w-15 ml-2":active=='/contact'?"translate-x-175 w-12 ml-3.5":"translate-x-2 w-8"}`}
      ></div>
         <NavLink to="/home">
  {({ isActive }) => (
    <div className="transition-transform hover:scale-110 ">
      <span
        className={`transition-transform duration-200  
          ${isActive ? "text-[#00b4ff] hover:[text-shadow:0_0_10px_#00b4ff]" : "text-white hover:[text-shadow:0_0_10px_#ffffff]"}`}
      >
        Home
      </span>

    </div>
  )}
</NavLink>



            <NavLink  to="/projects">
        {({ isActive }) => (
    <div className="transition-transform hover:scale-110 ">
      <span
        className={`transition-transform duration-200 hover:scale-200 
          ${isActive ? "text-[#00b4ff] hover:[text-shadow:0_0_10px_#00b4ff]" : "text-white hover:[text-shadow:0_0_10px_#ffffff]"}`}
      >
        Projects
      </span>

    </div>
  )}
      
        </NavLink>
            <NavLink className="text-amber-200" to="/gallery">
       {({ isActive }) => (
    <div className="transition-transform hover:scale-110 ">
      <span
        className={`transition-transform duration-200 hover:scale-200 
          ${isActive ? "text-[#00b4ff] hover:[text-shadow:0_0_10px_#00b4ff]" : "text-white hover:[text-shadow:0_0_10px_#ffffff]"}`}
      >
         Gallery
      </span>

    </div>
  )}
        </NavLink>


            <NavLink  to="/skills">
         {({ isActive }) => (
    <div className="transition-transform hover:scale-110 ">
      <span
        className={`transition-transform duration-200 hover:scale-200 
          ${isActive ? "text-[#00b4ff] hover:[text-shadow:0_0_10px_#00b4ff]" : "text-white hover:[text-shadow:0_0_10px_#ffffff]"}`}
      >
         Skills
      </span>
    </div>
  )}
        </NavLink>
            <NavLink  to="/Certificates">
         {({ isActive }) => (
    <div className="transition-transform hover:scale-110 ">
      <span
        className={`transition-transform duration-200 hover:scale-200 
          ${isActive ? "text-[#00b4ff] hover:[text-shadow:0_0_10px_#00b4ff]" : "text-white hover:[text-shadow:0_0_10px_#ffffff]"}`}
      >
        Certificates
      </span>
    </div>
  )}
        </NavLink>
            <NavLink  to="/blog">
       {({ isActive }) => (
    <div className="transition-transform hover:scale-110 ">
      <span
        className={`transition-transform duration-200 hover:scale-200 
          ${isActive ? "text-[#00b4ff] hover:[text-shadow:0_0_10px_#00b4ff]" : "text-white hover:[text-shadow:0_0_10px_#ffffff]"}`}
      >
        Blogs
      </span>
    </div>
  )}
        </NavLink>
            <NavLink  to="/resume">
           {({ isActive }) => (
    <div className="transition-transform hover:scale-110 ">
      <span
        className={`transition-transform duration-200 hover:scale-200 
          ${isActive ? "text-[#00b4ff] hover:[text-shadow:0_0_10px_#00b4ff]" : "text-white hover:[text-shadow:0_0_10px_#ffffff]"}`}
      >
         Resume
      </span>
    </div>
  )}
        </NavLink>
            <NavLink  to="/about">
          {({ isActive }) => (
    <div className="transition-transform hover:scale-110 ">
      <span
        className={`transition-transform duration-200 hover:scale-200 
          ${isActive ? "text-[#00b4ff] hover:[text-shadow:0_0_10px_#00b4ff]" : "text-white hover:[text-shadow:0_0_10px_#ffffff]"}`}
      >
         About Me
      </span>

    </div>
  )}
        </NavLink>
            <NavLink to="/contact">
           {({ isActive }) => (
    <div className="transition-transform hover:scale-110 ">
      <span
        className={`transition-transform duration-200 hover:scale-200 
          ${isActive ? "text-[#00b4ff] hover:[text-shadow:0_0_10px_#00b4ff]" : "text-white hover:[text-shadow:0_0_10px_#ffffff]"}`}
      >
         Contact
      </span>

    </div>
  )} 
        </NavLink>

        </div>

      
      </div>
    </nav>
  );
};

export default Navbar;
