import React from 'react'

function OrthoFindDoctor() {
  return (
    <div className='flex justify-center mt-8 ' >
        <div className=' max-w-[1440px]  flex justify-evenly  bg-white max-lg:p-5 lg:max-h-[200px] lg:min-h-[192px] rounded-lg lg:min-w-[1200px] ' >
                  <div className='  ' >

                    <div className='w-[237px] h-[46px] ' >
                      <h3 className='font-sans text-3xl mt-6 font-DMSans font-bold text-center    leading-[46px]' >Find A Doctor</h3>

                    </div>
                         <div className='flex max-lg:flex-col  gap-14 mt-6 ' >
                      <input type="text" className=' justify-center flex min-h-[66px] min-w-[296px] rounded-md border-theme1 border-[1px]  ' placeholder='Name' />
                      <input type="text" className='min-h-[66px] min-w-[296px] rounded-md border-theme1 border-[1px] ' placeholder='speciality' />
                <label class="inline-flex items-center cursor-pointer">
                <span class="ms-3 text-md font-medium text-gray-900 dark:text-gray-300">Available</span>
          <input type="checkbox" value="" class="sr-only peer"/>
                  <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full   after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">

                  </div>
            
                </label>
                <button className='h-[66px] bg-theme1 text-white min-w-[201px] leading-relaxed rounded-md ' > Search</button>
                      </div>
                      {/*  */}
                      

                  </div>
                  </div>
    </div>
  )
}

export default OrthoFindDoctor