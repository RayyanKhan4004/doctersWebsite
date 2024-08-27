import React from 'react'

function SearchBar() {
  return (
    <div>
      <h2 className='text-[28px] text-[#333333] text-center font-bold  mt-[112px] mb-0 '>Subscribe our newslatter</h2>
      
      <div class="flex flex-1 items-center justify-center p-6 pt-0 ">
    <div class="w-full max-w-lg">
        <form class="mt-5 sm:flex sm:items-center">
            <input id="q" name="q" class="inline md:w-[420px] md:h-[55px] rounded-3xl border  border-gray-300 bg-white py-2 pl-3 pr-3 leading-5 placeholder-gray-500 focus:border-[#007E85] focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#007E85] sm:text-sm" placeholder="Keyword" type="search" value=""/><button type="submit" class="mt-3 md:h-[55px] md:w-[116px] inline-flex w-full items-center justify-center rounded-3xl border border-transparent bg-[#007E85]  px-4 py-2 font-medium text-white shadow-sm hover:bg-[#007E85] focus:outline-none focus:ring-2 focus:ring-[#007E85] focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Subscribe</button>
        </form>
    </div>
</div></div>
  )
}

export default SearchBar