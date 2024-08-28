
import React from 'react';
import AllImpinfo from '../data/allImpData'; // Assuming correct import path

function Card1({ data }) {
  return (
    <div className="max-w-sm p-6  bg-white  border relative w-[391px] h-[460px] border-gray-200 rounded-3xl shadow items-center ">
      <a className='flex justify-center' href="#">
        <img className="rounded-t-lg w-[344px] h-[220px]  " src={data.image} alt={data.name} />
      </a>
      <div className="">
        <a href="#">
          <h5 className="my-2 text-2xl font-bold  text-[#007E85] ">{data.name}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.description || 'Brief description'}</p>
        {/* Add a button or link here if needed */}
        <a href="#" className="inline-flex items-center te text-xl text-center text-[#007E85]  focus:outline-none absolute left-[32px]m bottom-[50px] font-bold   ">
             Read more    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
      </div>
    </div>
  );
}

function CardGrid() {
  return (
    <div className='w-[100%] items-center  justify-center flex'>
    <div className="grid grid-cols-1 gap-7 gap-y-2 justify-items-center mt-5  md:grid-cols-2  xl:grid-cols-3">
      {AllImpinfo.map((item) => (
        <Card1 key={item.id} data={item} />
      ))}
    </div>
    </div>
  );
}

export default CardGrid;
