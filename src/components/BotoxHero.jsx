import React from 'react'
import heroBotox from '../assets/BotoxHero.png'
function BotoxHero() {
  return (
    <div>         
         <div className='w-[100%] flex items-center justify-evenly max-lg:p-6 max-lg:flex-col-reverse flex-row max-lg:h-auto h-[528px] bg-[#016A70]  ' >
    <div className='text-3xl text-white '> Where can i find a <span className='font-bold' >specialist?</span> 
    <p className='w-[40ch] text-sm ' > BOTOX® Specialists are doctors 
        who are experienced in treating Chronic Migraine with BOTOX® to prevent headaches and migraine attacks
         before they even start.*</p>

         <div className='mt-6' >

         <button className='bg-theme1 p-1 font-LexendTara typoBotoxHeroBtn text-white w-[210px] h-[51px] rounded-lg max-lg:mb-3' >appointment</button>
         <button className='bg-transparent font-LexendTara typoBotoxHeroBtn text-white border-2 p-1 border-white    rounded-md sm:ml-2 w-[210px] h-[51px]' >Learn More </button>

         </div>
    </div>
    <div className='relative ' >
        <img className='w-[595px] h-[350px] ' src={ heroBotox} alt="HeroBotox" />
        <div className='w-32 h-20 max-sm:w-16 max-sm:h-10 max-sm:rounded-md absolute bg-white rounded-xl max-xl:right-5 -top-5 -right-5 ' >
        </div>

         <div className='w-32 max-sm:w-16 max-sm:h-10 max-sm:rounded-md h-20 absolute bg-theme1 rounded-xl max-xl:right-1 top-0 -right-10 ' >
        </div>
    </div>

</div></div>
  )
}

export default BotoxHero