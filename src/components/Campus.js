import React from 'react'
import './Campus.css'
import medicaps from '../images/medicaps-img.png'
import circle from '../images/Ellipse.png'
import Heading from './Heading'

export default function Campus() {
  return (
    <>
    <div className="campus">
        <img src={circle} alt="circle" className="circle" />
        <Heading text="Glimps of" main="Campus" />
    <div className="campus-img">
        <img src={medicaps} alt="campus" />
    </div>
    </div>
    </>
  )
}
