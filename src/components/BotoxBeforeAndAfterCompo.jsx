import React from 'react'
import BotoxBeforeAndAfterImg from '../assets/Botox after and before.png'
function BotoxBeforeAndAfterCompo() {
  return (
    <div className='' >
        <div className='' >

        </div>
        <div className='flex justify-center items-center' >
            <div> 
            <div className='flex justify-center item-center flex-col' >
            <h3 className='text-xl font-bold'>
                Before <span className='text-theme1' >And</span> After
            </h3>
            <p>Familiarize yourself with the works of our masters. All procedures are performed by experienced masters of our clinic.</p>
        </div>
                <img className='w-[1150px] md:h-[588px] rounded-md' src={BotoxBeforeAndAfterImg} alt="BotoxBeforeAndAfterImg" />
            </div>
        </div>
    </div>
  )
}
export default BotoxBeforeAndAfterCompo