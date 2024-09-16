import React from "react";
import Logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./styles/styles.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
function Navbar({style}) {
  useEffect(()=>{
    Aos.init({duration: 1000});
  }, [])
  const navigate = useNavigate();
  const [showMenu , setShowMenu] = useState(false);
  const linksCss = `flex items-center flex-col lg:flex-row  p-6  lg:right-10 ${
    showMenu
      ? "  max-lg:bg-white rounded-lg  h-[50vh]  z-30 text-center top-0  justify-center items-center  right-0  max-lg:min-w-[100vw]"
      : " sm:hidden max-sm:hidden   lg:flex max-lg:flex "
  }`;
  const nav = `w-[100%] lg:max-w-[1400px] flex  flex-col justify-between lg:flex-row rounded-md z-20  ${style} ${showMenu? 'px-0': "px-6"} `
  const h1 =
    "tabs letterSpacing  mx-4 hover:text-[#007E85] hover:border-b-2 hover:border-[#007E85] transition duration-500 cursor-pointer focus:text-[#007E85] focus:border-b-2";
  // fx
  function goToOrtho() {
    navigate("/ortho");
  }
  function goToBotox() {
    navigate("/botox");
  }
  return (
    <div  data-aos='fade-down' className="nav flex  lg:justify-center w-[100%]">
      <nav className={nav}  >
        <div
          className="flex flex-row cursor-pointer mb-4 items-center md:mb-0 m mlg:mr-16"
          onClick={() => {
            navigate("/");
          }}
        >
          <img className="" src={Logo} alt="daf" />
          <p className="letterSpacing text-[#007E85]  text-2xl font-semibold">Health</p>
          <p className="letterSpacing text-green-600   tracking-wider  text-2xl font-semibold">
            care
          </p>
        </div>

        <div className={linksCss}>
          <h1
            className={`${h1} heading mb-2Y md:mb-0`}
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </h1>
          <h1 className={h1} onClick={goToOrtho}>
            Orthotist
          </h1>
          <h1 className={h1} onClick={goToBotox}>
            Botox
          </h1>
          <h1 className={h1}>Equipments</h1>
          <h1 className={h1}>Locations</h1>
          <h1 className={h1}>HomeServices</h1>
        </div>
        <span
          onClick={() => setShowMenu((showMenu) => !showMenu)}
          className=" lg:hidden max-lg:absolute right-[24px] z-40 bg-gradient-to-r from-[#007E85] to-[#6EAB36] text-white cursor-pointer p-2 rounded-lg "
        >
          Menu
        </span>
      </nav>
    </div>
  );
}

export default Navbar;