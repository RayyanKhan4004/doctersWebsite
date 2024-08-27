import React from 'react'
import { BotoxCard } from '../data/allImpData'
function Botoxcards() {
  return (
    

    <div>

        <div className='flex items-center justify-center' >
          <div>
        <h2><span className='text-xl text-black ' >Features</span> <span className='text-xl text-theme1' >Services</span> </h2>
        <div className='grid grid-cols-3 max-w-[1200px] justify-items-center gap-3 ' >

        {BotoxCard.map((curr ,i , all)=> {
            return <div className='relative cursor-pointer hover:overflow-hidden rounded-xl ' > <img src={curr.img} alt={curr.txt} className='rounded-xl hover:scale-110  ' />  
            <div className='absolute  BotoxCard left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-transparent hover:bg-[#016a704d] w-[100%] h-[100%]  rounded-lg   z-[3]' ></div>
            <div className='absolute z-[5] text-white text-lg left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 '  >{curr.txt.toUpperCase()}</div>
            
            </div>
        })}
</div>
        </div>
       
        </div>
    </div>
  )
}

export default Botoxcards