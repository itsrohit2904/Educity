import React from 'react'
import './Contact.css'
import message_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c144a4ec-abb1-4ce5-a9d3-22a108c3f56d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={message_icon} alt="" /></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex magnam minus molestias beatae odit perferendis consequatur atque assumenda aperiam suscipit quam amet, necessitatibus deserunt nisi nihil dolores voluptas repellendus commodi unde dignissimos natus voluptates modi enim. Nulla pariatur optio eligendi.</p>
        <ul>
            <li><img src={mail_icon} alt="" />Contact@rpatil.com </li>
            <li><img src={phone_icon} alt="" />9172242343 </li>
            <li><img src={location_icon} alt="" />Address </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit} >
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter Your Name' required />
            <label>Phone Number</label>
            <input type='tel' name='Phone' placeholder='Enter Your Mobile' required/>
            <label>Write Your Message Here</label>
            <textarea name='message' rows="6" placeholder='Enter Your Message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit <img src={white_arrow} alt="" /></button>

        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
