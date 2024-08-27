import React from "react";
import Logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./styles/styles.css";
function Navbar() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const linksCss = `flex items-center flex-col  lg:flex-row  max-lg:absolute lg:right-10 ${
    showMenu
      ? "       absolute z-40 max-lg:bg-gray-400/20 h-[100vh] text-center   max-lg:min-w-[100vw] m ax-lg:top-[15%]"
      : " sm:hidden max-sm:hidden  md:hidden lg:flex max-lg:flex NAV-ANI"
  }`;
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
    <div className="nav flex  lg:justify-center w-[100%]">
      <nav className="w-[100%] lg:max-w-[1400px] flex  flex-col justify-between lg:flex-row rounded-md z-20 ">
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
            className={`${h1} heading mb-2 md:mb-0`}
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
          className=" lg:hidden   max-lg:absolute right-0 z-40 bg-gradient-to-r from-[#007E85] to-[#6EAB36] text-white cursor-pointer p-2 rounded-lg"
        >
          Menu
        </span>
      </nav>
    </div>
  );
}

export default Navbar;

// import React from 'react'
// import Logo from '../assits/Logo.png';
// import { useState } from 'react';
// function Navbar() {

//   return (
//     <nav className='flex  h-12   flex-row justify-evenly max-w-[1200px] ' >
//      <div className='flex flex-row' >
//        <div className='' >
//       <img src={Logo} alt="logo" />
//       </div>
//       <div className='flex flex-row'>
//       <div className='text-[#007E85] mt-2 tracking-wider text-3xl font-bold'>Health</div>
//                <div className='text-green-600  mt-2 tracking-wider text-3xl font-bold'>care</div>
//       </div>
//       </div>
//      <ul className='flex float-right gap-7' >
//       <li>Home</li>
//       <li>Orthotist</li>
//       <li>Botox</li>
//       <li>Equipments</li>
//       <li>Locations</li>
//       <li>HomeServices</li>

//      </ul>
//     </nav>
//   )
// }

// export default Navbar
