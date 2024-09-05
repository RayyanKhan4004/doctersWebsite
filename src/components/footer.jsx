
import React from 'react'
import Logo from '../assets/Logo.png';
export default function Footer() {
  return (
    <div className='h-[454px] max-md:h-auto  font-DMSans bg-theme1'>
      <div className='flex justify-center items-center' >
        {/* // */}
        <div className='w-[1200px] mt-[100px]  flex max-lg:flex-col max-lg:justify-center max-lg:items-center justify-between items-start ' > 
         <div>
                <div className="text-white max-lg:mb-3 text-start">
           
                        <span className="text-3xl flex items-center font-bold">  <img className="-bottom-5 aspect-square h-14 w-14" src={Logo} alt="daf" /> Healthcare</span>
                       
                       
                     <div className=' max-lg:w-[32ch] ' >Copyright © 2022 BRIX Templates | All Rights Reserved </div>
               </div>
      </div>

      {/* //  // */}
      <div className='text-white flex max-md:flex-col h-min gap-[104px] ' >

         
        <div>
          <span className='footerheading ' >products</span>
          <ul>
            <li className='lis mt-[40px]' >features</li>
            <li className='lis' >pricing</li>
            <li  className='lis' >case studies</li>
            <li className='lis' >reviews</li>
            <li   className='lis' >updates</li>
          </ul>
        </div>

        <div>
          <span className='footerheading' >company</span>
          <ul>
          <li  className='lis mt-[40px]' >About</li>
          <li className='lis' >contact us</li>
          <li className='lis' >Carrers</li>
          <li className='lis' >Culture</li>
          <li  className='lis' >Blog</li>
          </ul>
          
          </div>


        <div>
          <span className='footerheading' >Support</span>
          <ul className='' >
            <li className='lis mt-[40px]' >Getting Started</li>
            <li className='lis' >Help Center</li>
            <li className='lis' >Server Status</li>
            <li className='lis' >Report a Bug </li>
            <li className='lis' >Chat Support</li>
          </ul>
        </div>


        <div>
          <span className='footerheading' >follow us</span>
          <ul>
            <li className='lis mt-[40px]' ><span></span> facebook </li>
            <li className='lis' ><span></span> twiter </li>
            <li className='lis' ><span></span> Instagram </li>
            <li className='lis' ><span></span> linkedin  </li>
            <li className='lis' ><span></span> YouTube </li>
          </ul>
        </div>
        
        
        </div>
        </div>
      </div>
    </div>
  )
}
