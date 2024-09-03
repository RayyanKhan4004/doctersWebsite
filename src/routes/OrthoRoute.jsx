import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import OrthoFindDoctor from '../components/OrthoFindDoctor'
import OrthoHero from '../components/OrthoHero'
import SearchBar from '../components/SearchBar.jsx'
import RatingCard from '../components/RatingCard.jsx'
import { Equipments, ratingData } from '../data/allImpData.js'
import Aftar from '../components/Aftar.jsx'
import doctor2 from "../assets/Dr Mukhlis ul Rehman.png";
import  EquipmentsCard  from '../components/EquipmentsCard.jsx'
function OrthoRoute() {
  return (
    <div className="h-screen w-full">
  

      <div className='pt-[24px] px-6'>

        <Navbar />
      </div>
    <div className="h-[733px] ortho1  flex items-center mdh-1/2">
      <div className='ml-7'><h2 className='text-5xl font-latoB  text-white font-extrabold' >
      Bringing individualized  <br /><span className='text-[#007E85] ' >Healthcare</span>  
        </h2> 
        <br />
        <button className='bg-[#007E85]  h-[51px]  w-[210px] text-[20px]  leading-6  tracking-tighter  text-white rounded-lg border-2 border-[#007E85] font-LexendTara ' >  Appointments</button> 
        <button className='bg-transparent text-white text-xl  sm:ml-3 h-[51px]  w-[210px] text-[20px]  leading-6  tracking-tighter   border-2 rounded-lg font-LexendTara ' >Learn More</button>
        </div>
    </div>   
    {/* p-6 */}
     <div className='p-6' >

{/* /  2nd doctor component  / */}
<div className="flex  flex-col mt-20  justify-center items-center">
        <div className="flex lg:flex-row-reverse flex-col-reverse w-[100%] max-w-[1380px] items-center justify-between  main-box,m gap-[2rem]">
        <div className="max-w-[657px]">
  <h3 className="font font-semibold size40">
    Providing Quality{" "}
    <span className="text-[#007E85]">Healthcare</span> for A
    <br /> <span className="text-green-600">Brighter </span>
    and <span className="text-green-600">Healthy </span>
    future
  </h3>
  <div style={{ marginTop: "30px" }} className="w-[587] text-sm">
    <p
      style={{
        fontFamily: "Lato",
        fontSize: "20px",
        color: "#474747",
        letterSpacing: "1px",
        fontWeight: "lighter",
        opacity: 0.8,
      }}
    >
      At our hospital, we are dedicated to providing exceptional
      medical care to our patients and their families. Our experienced
      team of medical professionals, cutting-edge technology, and
      compassionate approach make us a leader in the healthcare
      industry.
    </p>
    <p
      style={{
        fontFamily: "Lato",
        fontSize: "20px",
        color: "#474747",
        letterSpacing: "1px",
        fontWeight: "lighter",
        opacity: 0.8,
        marginTop: "20px",
      }}
    >
Dr. Mukhlis ul Rehman, Doctor of Physical Therapy and Neuromuscular Physical Therapist, is part of our esteemed team. With over 4 years of experience, Dr. Rehman specializes in Electrotherapy, Hijama (Cupping Therapy), Pediatric Physical Therapy, Sports Physiotherapy, and Stroke Rehabilitation. He is also a member of the Pakistan Physical Therapy Association. His dedication to patient care and clinical excellence ensures our patients receive the best possible treatment.
    </p>
  </div>
  <button
              style={{
                width: "252px",
                height: "51px",
                borderRadius: "8px",
                marginTop: "80px",
                fontFamily: "LT",
              }}
              className="bg-[#007E85]  text-white letterSpacing "
            >
              Appointment
            </button>
</div>

          <div className="  flex justify-center relative flex-row ">
            <div className="z-[11] translate-y-[70%]">
              <Aftar />
            </div>
            <img
              className="relative sm:min-w-[526px] sm:min-h-[626px]  sm:h-[526px] sm:w-[626px] -top-10"
              src={doctor2}
              alt="Dr Mukhlis ul Rehman"
             
            />
            <div
              style={{ borderRadius: 10, alignItems: "center" }}
              className="text-[#000000] Lato absolute max-sm:right-0 max-sm:top-5  right-[85px] top-[110px] p-2 hover:scale-105 z-[12] bg-white rounded-sm"
            >
              <span
                style={{ fontWeight: "bolder", fontSize: 22, color: "#007E85" }}
              >
                24/7
              </span>
              services
            </div>
          </div>
        </div>
      </div>
<EquipmentsCard/>
    <OrthoFindDoctor />
    <OrthoHero/>
    <div className='flex items-center mt-10 justify-center' >
    <div className='' >
      <h2 className='text-2xl font-bold text-theme1 text-center ' >what our customers say</h2>
    <p className='md:w-[80ch] text-center' >Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p></div>
    </div>
    <div className='flex justify-center items-center' >
    <div className="grid xl:grid-cols-3 gap-7    justify-items-center  max-w-[1000px] md:grid-cols-2 lg:grid-cols-3 mt-7 gap-x-9 gap-y-12 ">
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
    </div>
    <Footer/> 
  </div>
  )
}

export default OrthoRoute