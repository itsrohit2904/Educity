import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {
    const slider=useRef();
    let tx=0;
    const slideForward=()=>{
        if(tx>-50){
            tx-=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward=()=>{
        if(tx<0){
            tx+=25;
        }
        slider.current.style.transform = `translateX(${tx}%)` 
        
    }

  return (
    <div className='testimonials'>
        <img src={next_icon} className='next-btn' onClick={slideForward}/>
        <img src={back_icon} className='back-btn'onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider} >
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Dakota Johnson</h3>
                                <span>Bhusawal</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint quia enim praesentium voluptas fugiat molestias, deleniti corrupti atque ipsa veritatis omnis cumque repellendus eaque vel tempora reiciendis perspiciatis laborum.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Mike tyson</h3>
                                <span>Bhusawal</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint quia enim praesentium voluptas fugiat molestias, deleniti corrupti atque ipsa veritatis omnis cumque repellendus eaque vel tempora reiciendis perspiciatis laborum.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Selena Gomez</h3>
                                <span>Bhusawal</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint quia enim praesentium voluptas fugiat molestias, deleniti corrupti atque ipsa veritatis omnis cumque repellendus eaque vel tempora reiciendis perspiciatis laborum.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Dyane Johnson</h3>
                                <span>Bhusawal</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint quia enim praesentium voluptas fugiat molestias, deleniti corrupti atque ipsa veritatis omnis cumque repellendus eaque vel tempora reiciendis perspiciatis laborum.</p>
                    </div>
                </li>
            </ul>

        </div>
    </div>
  )
}

export default Testimonials