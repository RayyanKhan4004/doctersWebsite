
import React from 'react';
import { Equipments } from '../data/allImpData'; // Assuming you saved the array as 'Equipments' in allImpData.js

function EquipmentsCards() {
  return (
    <div>
      <div className='flex items-center justify-center'>
        <div>
          <h2 className='text-3xl font-latoB font-bold mb-6'>
            <span className=' text-black'>Features</span> <span className=' text-theme1'>Services</span>
          </h2>
          <div className='grid grid-cols-3 max-w-[1200px] justify-items-center gap-3'>
            {Equipments.map((curr, i) => (
              <div key={i} className='relative cursor-pointer hover:overflow-hidden rounded-xl'>
                <img src={curr.img} alt={curr.disp} className='rounded-xl brightness-50	  w-[350px] h-[400px]  hover:scale-110' />
                <div className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-transparent hover:bg-[#016a704d] w-[100%] h-[100%] rounded-lg z-[3]'></div>
                <div className='absolute z-[5] text-white text-lg left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'>
                  {curr.disp.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EquipmentsCards;
