import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import BotoxHero from '../components/BotoxHero'
import Footer from '../components/footer'
import Botoxcards from '../components/Botoxcards'
import BotoxOvrlappingImgCompo from '../components/BotoxOvrlappingImgCompo'
import BotoxBeforeAndAfterCompo from '../components/BotoxBeforeAndAfterCompo'
export class Botox extends Component {
  render() {
    return (
      <div>     
          <Navbar/>
          <BotoxHero/>
          <Botoxcards/> 
          <div className='flex justify-center' ><button className='text-theme1 w-52 h-12 border-theme1 bg-transparent mt-4  border-2 rounded-md ' >View More</button></div>
          <BotoxOvrlappingImgCompo/>
          <BotoxBeforeAndAfterCompo/>
          <Footer/> 
      </div>
    )
  }
}

export default Botox