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
      <div className='font-poppins'>  
       
          
             
          <Navbar style='pb-6' />
          <BotoxHero/>
          <dir className='p-6 m-0' >
          <Botoxcards/> 

          <BotoxOvrlappingImgCompo/>
          <BotoxBeforeAndAfterCompo/>
          </dir>
          <Footer/> 
      </div>
    )
  }
}

export default Botox