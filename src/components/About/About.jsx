import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} className='about-img'/>
            <img src={play_icon} className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITTY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea sed ratione debitis quia laborum, maiores consequuntur, odit distinctio delectus eaque vero iure aliquam eum dolorum ipsum at unde, voluptatibus inventore! Iusto sit ducimus, quidem consequatur quis repellat? Architecto, ea rerum?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit accusantium, nisi iste labore minus temporibus omnis ipsa qui veritatis aperiam recusandae doloremque autem sequi officia libero eos. Sunt, esse enim!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque optio sequi, magni reprehenderit mollitia ipsum totam hic excepturi quasi architecto saepe nobis a magnam autem sed eum, velit veniam illo.</p>
        </div>

    </div>
  )
}

export default About