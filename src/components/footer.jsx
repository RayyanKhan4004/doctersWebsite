
import React from 'react';
import Logo from '../assets/Logo.png';

function Footer() {
  return (
    <div>
      <div className="bg-gray-100">
        <div className="pt-20 px-4 sm:px-6 bg-[#007E85] text-white justify-items-center grid md:grid-cols-5">
          <div className="  mb-4 md:mb-0 lg:mr-16">
           
            <span className="text-3xl mt-2 flex justify-center items-center font-bold">  <img className="-bottom-5 aspect-square h-14 w-14" src={Logo} alt="daf" /> Healthcare</span>
            
            
            <div className=' sm:w-[32ch] ml-[5rem]' >Copyright © 2022 BRIX Templates | All Rights Reserved </div>
          </div>

          <div className="p-5">
            <div className=" font-bold uppercase text-white mb-5 text-lg ">Home</div>
            <a className="my-3 block" href="/#">Services <span className="text-teal-600 text-xs p-1"></span></a>
            <a className="my-3 block" href="/#">Products <span className="text-teal-600 text-xs p-1"></span></a>
            <a className="my-3 block" href="/#">About Us <span className="text-teal-600 text-xs p-1"></span></a>
            <a className="my-3 block" href="/#">Pricing <span className="text-teal-600 text-xs p-1"></span></a>
          </div>
          <div className="p-5">
            <div className="font-bold uppercase text-white mb-5 text-lg">Resources</div>
            <a className="my-3 block" href="/#">Documentation <span className="text-teal-600 text-xs p-1"></span></a>
            <a className="my-3 block" href="/#">Tutorials <span className="text-teal-600 text-xs p-1"></span></a>
          </div>
          <div className="p-5">
            <div className="font-bold uppercase text-white mb-5 text-lg">Support</div>
            <a className="my-3 block" href="/#">Help Center <span className="text-teal-600 text-xs p-1"></span></a>
            <a className="my-3 block" href="/#">Privacy Policy <span className="text-teal-600 text-xs p-1"></span></a>
            <a className="my-3 block" href="/#">Conditions <span className="text-teal-600 text-xs p-1"></span></a>
          </div>
          <div className="p-5">
            <div className="font-bold uppercase text-white mb-5 text-lg">Social Media</div>
            {/* Replace with your actual social media icons and links */}
            <a className="my-3 block" href="/#"><i className="fab fa-facebook"></i> Facebook</a>
            <a className="my-3 block" href="/#"><i className="fab fa-twitter"></i> Twitter</a>
            <a className="my-3 block" href="/#"><i className="fab fa-instagram"></i> Instagram</a>
            <a className="my-3 block" href="/#"><i className="fab fa-linkedin"></i> LinkedIn</a>
            <a className="my-3 block" href="/#"><i className="fab fa-youtube"></i> YouTube</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;