import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import OrthoFindDoctor from '../components/OrthoFindDoctor'
import OrthoHero from '../components/OrthoHero'
import SearchBar from '../components/SearchBar.jsx'
import RatingCard from '../components/RatingCard.jsx'
import { ratingData } from '../data/allImpData.js'
function OrthoRoute() {
  return (
    <div className="h-screen w-full">
        <Navbar />
    <div className="h-[733px] ortho1 flex items-center md:h-1/2">
      <div className='ml-7'><h2 className='text-5xl text-white font-bold' >
      Bringing individualized  <br /><span className='text-[#007E85] ' >Healthcare</span>  
        </h2> 
        <br />
        <button className='bg-[#007E85] p-2 px-4 text-xl text-white rounded-lg border-2 border-[#007E85] ' >Appointments</button> 
        <button className='bg-transparent text-white text-xl border-2 ml-3 p-2 px-7 rounded-lg' >Learn More</button>
        </div>
    </div>
    <OrthoFindDoctor />
    <OrthoHero/>
    <div className='flex items-center mt-10 justify-center' >
    <div className='' >
      <h2 className='text-2xl font-bold text-theme1 text-center ' >what our customers say</h2>
    <p className='md:w-[80ch] text-center' >Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p></div>
    </div>
    <div className='flex justify-center items-center' >
    <div className="grid grid-cols-1 max-w-[1000px] md:grid-cols-2 lg:grid-cols-3 mt-7 gap-x-9 gap-y-12 ">
      {ratingData.map((data) => (
        <RatingCard
          key={data.name}
          avatar={data.avatar}
          name={data.name}
          title={data.title}
          review={data.review}
          rating={data.rating}
          
        />
      ))}
    </div>
    </div>
    <SearchBar/>
    <Footer/> 
  </div>
  )
}

export default OrthoRoute