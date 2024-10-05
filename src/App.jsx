import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Program from './components/Program/Program'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlay from './components/VideoPlay/VideoPlay'


const App = () => {
  const [playState, setPlayState]=useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
      <Title subTitle='OUR PROGRAMS' title='What We Offer'/>
        <Program/>
       <About setPlayState={setPlayState}/>
       <Title subTitle='Gallary' title='Campus Photos'/>
       <Campus/>
       <Title subTitle='TESTIMONIALS' title='What Student Says'/>
       <Testimonials/>
       <Title subTitle='Contact Us' title='Get In Touch'/>
       <Contact/>
       <Footer/>
      </div>
      
     <VideoPlay playState={playState} setPlayState={setPlayState}/>
     
    </div>
    
  )
}

export default App