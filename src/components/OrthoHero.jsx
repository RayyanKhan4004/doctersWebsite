import React from 'react'
import OrthoHeroImg from '../assits/OrthoHero.png'
function OrthoHero() {
  return (
    <div className='flex justify-center items-center w-[100%] mt-14 ' >
            <div className='flex flex-row max-lg:flex-col  min-w-[1200px] max-w-[1240px]    ' >
                  <div className='flex items-center justify-center' > 
                    <div  className='font-latoB max-lg:text-center  max-lg:justify-center text-2xl   ' >
                    Bringing individualized <span className='text-theme1'> Healthcare </span> <span className='text-green-500' >Nationwide </span>
                    <div className='max-lg:w-[100%] max-lg:flex max-lg:justify-center ' >
                    <p className='w-1/2 text-sm  ' >
                    At our hospital, we are dedicated to providing exceptional medical care to our patients and their families. Our experienced team of medical professionals, cutting-edge technology, and compassionate approach make us a leader in the healthcare industry
                    </p>
                    </div>
                    </div>
                 </div>
                    <div className='min-w-[520px] flex justify-center items-center min-h-[330px]' >
                        <img src={OrthoHeroImg} alt="img" />
                    </div>
            </div>
    </div>
  )
}

export default OrthoHero