import { IoMenu, IoClose } from "react-icons/io5";
import { VscBriefcase } from "react-icons/vsc";
import { FaLaptopCode } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [showNav, setShowNav] = useState(false);

  const handleNav = () => {
    setShowNav(!showNav);
  };

  const handleClose = () => {
    setShowNav(!showNav);
  };

  return (
    <div
      className={`navbar flex justify-between text-white max-w-[1440px] md:h-20 ${
        showNav ? "h-screen items-start pt-[24px]" : "items-center"
      } px-5 h-20 w-full mx-auto font-mono bg-[#0a192f]/[0.85] fixed top-0 left-0 z-50 backdrop-blur-sm`}
    >
      <h1
        className="w-full text-sky-400 text-2xl md:3xl font-serif logo flex gap-1 items-center"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <i>Dcoder</i>
        <FaLaptopCode size={20} />
      </h1>

      <ul className="hidden md:grid grid-flow-col auto-cols-max gap-5 lg:gap-10 items-center text-blue-100 text-sm">
        <li data-aos="fade-down">
          <Link
            to="intro"
            className="flex gap-1 items-center cursor-pointer nav_link"
            spy={true}
            smooth={true}
            duration={500}
          >
            <span className="text-sky-400 text-lg">
              <IoCodeSlash />
            </span>
            Home
          </Link>
        </li>
        <li data-aos="fade-down" data-aos-delay="200">
          <Link
            to="about"
            className="flex gap-1 items-center cursor-pointer nav_link"
            spy={true}
            smooth={true}
            duration={500}
          >
            <span className="text-sky-400 text-lg">
              <IoCodeSlash />
            </span>
            About me
          </Link>
        </li>
        <li data-aos="fade-down" data-aos-delay="300">
          <Link
            to="projects"
            className="flex gap-1 items-center cursor-pointer nav_link"
            spy={true}
            smooth={true}
            duration={500}
          >
            <span className="text-sky-400 text-lg">
              <IoCodeSlash />
            </span>
            Projects
          </Link>
        </li>
        <li data-aos="fade-down" data-aos-delay="400">
          <Link
            to="contact"
            className="flex gap-1 items-center cursor-pointer nav_link"
            spy={true}
            smooth={true}
            duration={500}
          >
            <span className="text-sky-400 text-lg">
              <IoCodeSlash />
            </span>
            Contact me
          </Link>
        </li> 
        <li data-aos="fade-down" data-aos-delay="500">
          <button className="border-2 rounded py-2 px-4 border-sky-400 text-sky-300 flex items-center gap-2">
            View Resume <VscBriefcase />
          </button>
        </li>
      </ul>

      <div onClick={handleNav} className="z-10 block md:hidden">
        {!showNav ? (
          <IoMenu size={30} className="text-sky-400" />
        ) : (
          <IoClose size={30} className="text-sky-400" />
        )}
      </div>

      <MobileNav
        showNav={showNav}
        handleNav={handleNav}
        handleClose={handleClose}
      />
    </div>
  );
}

export default Navbar;

function MobileNav({ showNav, handleClose }) {
  return (
    <div
      className={
        showNav
          ? `flex items-center fixed w-[70%] top-0 right-0 h-screen md:hidden bg-[#0a192f] duration-500 ease-in-out`
          : `flex items-center fixed w-[70%] top-0 -right-full h-screen md:hidden bg-[#0a192f] duration-500 ease-in-out`
      }
    >
      <ul
        className={`text-center w-full grid gap-10 ${showNav ? "" : "hidden"}`}
      >
        <li>
          <Link
            to="intro"
            className="flex gap-2 items-center justify-center cursor-pointer"
            onClick={handleClose}
            spy={true}
            smooth={true}
            duration={500}
          >
            <span className="text-sky-400 text-lg">
              <IoCodeSlash />
            </span>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            className="flex gap-2 items-center justify-center cursor-pointer"
            onClick={handleClose}
            spy={true}
            smooth={true}
            duration={500}
          >
            <span className="text-sky-400 text-lg">
              <IoCodeSlash />
            </span>
            About me
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            className="flex gap-2 items-center justify-center cursor-pointer"
            onClick={handleClose}
            spy={true}
            smooth={true}
            duration={500}
          >
            <span className="text-sky-400 text-lg">
              <IoCodeSlash />
            </span>
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            className="flex gap-2 items-center justify-center cursor-pointer"
            onClick={handleClose}
            spy={true}
            smooth={true}
            duration={500}
          >
            <span className="text-sky-400 text-lg">
              <IoCodeSlash />
            </span>
            Contact
          </Link>
        </li>
        <li className="justify-center flex">
          <button
            className={`justify-center border-2 rounded py-2 px-4 border-sky-400 text-sky-300 flex items-center gap-2 w-[60%]  ${
              showNav ? "min-w-[150px] max-w-[auto]" : "w-[150px]"
            } `}
          >
            Resume
          </button>
        </li>
      </ul>
    </div>
  );
}
