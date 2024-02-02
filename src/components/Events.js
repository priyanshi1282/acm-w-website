import React, {useState} from 'react'
import './Events.css'
import Heading from "./Heading";
import left_semi_circle from '../images/semi-circle.png';
import right_semi_circle from '../images/semi-circle-right.png';
import { EventsData } from './EventsData';

export default function Events({slides}) {
  const [currentEvent, setCurrentEvent] = useState(0);
  const length= slides.length;

  const nextSlide=()=>{
    setCurrentEvent(currentEvent===length-1? 0: currentEvent+1)
  }

  const prevSlide=()=>{
setCurrentEvent(currentEvent===0?length-1:currentEvent-1)
  }
  console.log(currentEvent)

  // if array is empty, return null, else it will throw error
  if(!Array.isArray(slides) || slides.length<=0){
    return null;
  }




  // main html
  return (
    <div className="event-div">
        <Heading text="Take a look on our" main="Events" className="event-heading" />
        <img src={left_semi_circle} alt="" className="semicircle-left" />
        <img src={right_semi_circle} alt="" className="semicircle-right" />

        {/* slider main div */}
        <div className="event-slider-div">
        <i className='next bx bxs-right-arrow' onClick={nextSlide}></i>
        <i className='prev bx bxs-left-arrow' onClick={prevSlide}></i>
    {EventsData.map((slide,index)=>{
      return(
        <div className={index===currentEvent ? 'event-slider active':'event-slider'} key={index}>
          {index===currentEvent && (
            <div>
            <img src={slide.image} alt="event" className='event-image' />
            <h1 className='event-title'>{slide.eventTitle}</h1>
            <p className='event-date'> {slide.eventDate} </p>
            <a href={slide.eventLink} className='event-link' >Know More</a>
            </div>
          )}
          
        </div>
      )
    })}

            
        </div>
    </div>
  )
}
