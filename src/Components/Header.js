import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Linkedin from '../assets/ui/Linkedin.png'
import Github from '../assets/ui/Github.png'
import Logo from '../assets/ui/Logo.png'

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleClass = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="container mx-auto md:flex justify-between py-2 max-width">
      <div className="flex justify-between items-center py-2 md:py-10">
        <NavLink to="/">
          <img className="w-15" src={Logo} alt="logo" />
        </NavLink>
      </div>
      <nav className={` ${!isOpen ? "hidden" : null} text-center md:flex justify-between`}>
        <ul className="font-primary  md:flex items-center  md:space-x-5 md:mr-10">
          <li className="pb-1 md:pb-0">
            <NavLink to="/" onClick={toggleClass}>
              Home
            </NavLink>
          </li>
          <li className="pb-1 md:pb-0">
            <NavLink to="/about" onClick={toggleClass}>
              About
            </NavLink>
          </li>
          <li className="pb-1 md:pb-0">
            <NavLink to="/technologies" onClick={toggleClass}>
              Technologies
            </NavLink>
          </li>
          <li className="pb-1 md:pb-0">
            <NavLink to="/projects" onClick={toggleClass}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={toggleClass}>
              Contact
            </NavLink>
          </li>
        </ul>
        <ul className="flex justify-evenly items-center my-5 md:my-0 md:space-x-5 md:mr-5">
          <li>
            <a href="https://www.linkedin.com/in/biswajit-deori-5266521b4/">
              <img src={Linkedin} alt="Linkdin"/>
            </a>
          </li>
          <li>
            <a href="https://github.com/BiswajitDeori" >
            <img src={Github} alt="Github"/>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
