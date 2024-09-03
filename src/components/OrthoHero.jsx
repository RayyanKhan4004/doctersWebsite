import React from 'react'
import OrthoHeroImg from '../assets/OrthoHero.png'
function OrthoHero() {
  return (
    <div className='flex justify-center items-center font-latoN  md:w-[100%] mt-14 ' >
            <div className='flex flex-row max-lg:flex-col  lg:min-w-[1240px] max-w-[1240px]    ' >
                  <div className='flex items-center justify-center' > 
                    <div  className=' max-lg:text-center  max-lg:justify-center font-latoB  text-2xl   ' >
                    Bringing individualized <span className='text-theme1'> Healthcare </span> <span className='text-green-500' >Nationwide </span>
                    <div className='max-lg:w-[100%] max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center ' >
                    <p className='w-1/2 text-sm  text-[#000000B2]
' >
                    At our hospital, we are dedicated to providing exceptional medical care to our patients and their families. Our experienced team of medical professionals, cutting-edge technology, and compassionate approach make us a leader in the healthcare industry
                    </p>
                    <button className="bg-[#007E85] max-lg:mb-5  text-white rounded-sm p-1 mt-6 px-10">Appointment</button>
                    </div>
                    </div>
                 </div>
                    <div className='lg:min-w-[520px] flex justify-center items-center lg:min-h-[330px]' >
                        <img src={OrthoHeroImg} alt="img" />
                    </div>
            </div>
    </div>
  )
}

export default OrthoHero