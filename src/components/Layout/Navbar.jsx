import React from 'react'
import { Link } from 'react-scroll'


const Navbar = () => {
  return (
    <nav className="fixed w-full bg-black text-white backdrop-blur z-40 shadow-sm">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="font-bold text-2xl">Pavan Pawar</div>
        <div className="space-x-4 hidden md:flex">
          <Link to="home" smooth className="cursor-pointer">
            Home
          </Link>
          <Link to="about" smooth className="cursor-pointer">
            About
          </Link>
          <Link to="projects" smooth className="cursor-pointer">
            Projects
          </Link>
          <Link to="contact" smooth className="cursor-pointer">
            Contact
          </Link>
        </div>
        <a href="/Pavan_Pawar_CV.pdf" className="ml-4 px-3 py-1 border rounded">
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
