import React from 'react'
import Heading from './Heading'
import './Contact.css'
import logoVideo from '../images/logo-rotate.mp4'
import HorizontalRule from './HorizontalRule.js'

export default function Contact() {
  return (
   <>
   <div className="contact-div">
    <Heading text="Any Quries?" main="Contact us" />
   <div className="contact-container">
    <div className="contact-left">
    <div className="contact-link">
    <i className='contact-icon bx bxl-whatsapp'></i>
    <div className='contact-link-a'>
    <a href="https://api.whatsapp.com/send?phone=9630328492" target="_blank" rel="noreferrer">+91-9630328492</a>
    </div>
    </div>
    <div className="contact-link">
    <i className='contact-icon bx bx-envelope'></i>
    <div className='contact-link-a'>
    <a href="mailto:info.acmw@gmail.com" target="_blank" rel="noreferrer">info.acmw@gmail.com</a>
    </div>
    </div>
    <div className="contact-link">
    <i className='contact-icon bx bxs-map'></i>
    <div className='contact-link-a'>
    <a href="https://g.page/medi-caps-university-indore?share" target="_blank" rel="noreferrer">Medicaps University</a>
    </div>
    </div>

    </div>
    <div className="contact-right">
    <video src={logoVideo} autoPlay muted loop  preLoad="auto" ></video>
    <div className="contact-social">
        <a href="/" className="contact-a" target="_blank" rel="noreferrer"><i className='bx bxl-instagram-alt' ></i></a>
        <a href="/" className="contact-a" target="_blank" rel="noreferrer"><i className='bx bxl-linkedin' ></i></a>
        <a href="/" className="contact-a" target="_blank" rel="noreferrer"><i className='bx bxl-youtube' ></i></a>
        <a href="/" className="contact-a" target="_blank" rel="noreferrer"><i className='bx bxl-discord-alt' ></i></a>
        <a href="/" className="contact-a" target="_blank" rel="noreferrer"><i className='bx bxl-twitter' ></i></a>
    </div>
    </div>
   </div>
   <HorizontalRule />
   </div>
   
   </>
  )
}
