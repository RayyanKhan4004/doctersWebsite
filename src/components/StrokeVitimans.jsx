import React from 'react'
import StrkeVitimans from '../assets/BotoxVitimans.png'
function StrokeVitimans() {
  return (
    <div  className='flex  justify-center mt-6 '>
        <div className='lg:w-[1140px]' >

        <div className='text-centerl' >
            <h1 className='font-poppins text-4xl font-semibold leading-10 text-left ' >Stroke <span className='text-theme1 ' >victims</span> to access Botox on PBS for lower limb <span className='text-theme1' >spasticity</span>
            </h1>
            <p className='text-lg font-medium leading-5 text-left font-poppins text-[#474747]  ' >STROKE patients and those who have suffered traumatic brain or spinal cord injuries will save thousands of dollars for Botox through the Pharmaceutical Benefits Scheme, to treat involuntary muscle movements, or spasticity, in their lower limbs.</p>
        </div>
        <div>
            <img className='md:h-[671px] mt-3' src={StrkeVitimans} alt="" />
        </div>

        </div>
    </div>
  )
}

export default StrokeVitimans