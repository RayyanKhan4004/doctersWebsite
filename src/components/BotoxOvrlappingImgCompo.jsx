import React from 'react'
import Botox2 from '../assets/Botox2.png'
function BotoxOvrlappingImgCompo() {
  return (
    <div className='flex justify-center mb-[100px] items-center'>
        <div className='flex  max-md:flex-col-reverse justify-between lg:w-[1170px]  items-center h-[528px] ' >
            <div className='  ' >
                <img className=''  src={Botox2} alt="overlapping img" />
            </div>
            <div className='text-center flex  flex-col justify-center items-center' >
                <h3 className=' md:w-[40ch]  text-xl text-center' >Ask your doctor
                    if they have BOTOX®
                    samples available</h3>
                    <p className='text-sm text-center w-[40ch]' >*Only your physician can determine if BOTOX® is appropriate
                    for you. Sample availability may vary by provider or location.</p>
            </div>
        </div>
    </div>
  )
}

export default BotoxOvrlappingImgCompo