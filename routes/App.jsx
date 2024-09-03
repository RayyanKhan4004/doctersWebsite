import React from 'react'
import Navbar from '../components/Navbar'
import HomeCoponent from '../components/HomeCoponent'
import Stats from '../components/Stats'
import Card1 from '../components/Card1'
import Hero from '../components/Hero'
import Card2 from '../components/Card2'
import Card3 from '../components/Card3'
import SearchBar from '../components/SearchBar'
import Footer from '../components/footer'
import NeurologicalDisorders from "../components/NeurologicalDisorders";
function App() {
  return (
    <div  className='max-h-screen  leading-relaxed items-center  '>
      <div className='p-6'>


    
      <Navbar/>
      <HomeCoponent/>
      <NeurologicalDisorders/>    
            <Stats/>
      <Hero/>
      <div className='text-center font-DMSans mt-[150px] ' > <h2 className='text-3xl text-[#007E85] font-bold' >Services we provide </h2>
      <p className='mb-14 text-[#555555] text-lg leading-[25px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aliquid at rem quibusdam! Quis distinctio iure corporis iste voluptates, voluptas nemo ex eaque? </p>
      </div>
      <Card1/>
      <div className='text-center font-DMSans mt-[112px]' > <h2 className='text-4xl leading-[46px]  text-[#007E85] font-bold' >Meet our previous clints </h2>
      <div className='flex justify-center items-center ' >
      <p className='w-[613px] mt-[16px] text-[#555555] text-lg leading-[25px] mb-[60px]' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aliquid at rem quibusdam! Quis distinctio iure corporis iste voluptates, voluptas nemo ex eaque? </p>
      </div>

      </div>
      <Card2/>
      <div className='text-center font-DMSans my-20' > <h2 className='text-4xl leading-[46px] mb-[16px] text-[#007E85] font-bold' >Testimonial</h2>
      <div className='flex flex-col  items-center'>
      <p className='md:w-[613px] text-lg leading-[25px] text-[#555555]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aliquid at rem quibusdam! Quis distinctio iure corporis iste voluptates, voluptas nemo ex eaque? </p>

      </div>
      </div>
      <Card3/>
      <SearchBar/>  </div>
      <Footer/>
    </div>
  )
}

export default App