import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiFillCode } from "react-icons/ai";
import Who from "./Who"
import Projects from "./Projects"
import Contact from "./Contact"

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(true);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      closeNav();
    }
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-full mx-auto px-4 text-white">
      <div className="flex flex-row justify-center items-center h-full">
        <h1 className="text-2xl md:text-3xl text-white mr-4">
          .Dev
        </h1>
        <AiFillCode size={30}/>
      </div>
      <ul className="hidden md:flex">
        <li className="p-4 hover:cursor-pointer">Home</li>
        <li className="p-4 hover:cursor-pointer" onClick={() => scrollToSection("who")}>Who</li>
        <li className="p-4 hover:cursor-pointer" onClick={() => scrollToSection("projects")}>Projects</li>
        <button id="button" className="p-4 hover:cursor-pointer" onClick={() => scrollToSection("contact")}>Contact</button>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 ease-in-out duration-500 z-50 bg-black"
            : "fixed left-[-100%] z-0"
        }
      >
        {/* <div className="flex flex-col justify-center items-center m-2 mt-4">
          <h1 className="text-3xl text-white">Abdul.Dev</h1>
        </div> */}
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600 hover:cursor-pointer">
            Home
          </li>
          <li className="p-4 border-b border-gray-600 hover:cursor-pointer" onClick={() => scrollToSection("who")}>
            Who
          </li>
          <li className="p-4 border-b border-gray-600 hover:cursor-pointer" onClick={() => scrollToSection("projects")}>
            Projects
          </li>
          <li className="p-4 border-b border-gray-600 hover:cursor-pointer" onClick={() => scrollToSection("contact")}>
            Conatct
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
