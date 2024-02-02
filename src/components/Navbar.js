import React, {useState} from 'react'
import './Navbar.css'
export default function Navbar() {
    const [clicked, setClicked] = useState("false");
const handleClick=()=>{
    if(clicked==="false")
    setClicked("true");
    else
    setClicked("false");
};
  return (
    <div className="nav">
    <nav className="navbar">
        <h1>
            <a href="/" className="brand">MUACM-W</a>
        </h1>
        <div className="menu-icon" onClick={handleClick}>
    <i className={clicked==="true"? 'bx bx-x' : 'bx bx-menu'}></i>
        </div>
        <ul className={clicked==="true" ? 'nav-menu active' : 'nav-menu'}>
            <li>
                <a href="/" className="nav-item">
                    About
                </a>
            </li>
            <li>
                <a href="/" className="nav-item">
                    Events
                </a>
            </li>
            <li>
                <a href="/" className="nav-item">
                    Team
                </a>
            </li>
            <li>
                <a href="/" className="nav-item">
                    Contact
                </a>
            </li>
        </ul>
    </nav>
    </div>
  )
}
