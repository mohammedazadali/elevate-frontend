import React, { useState } from 'react'
import './Nav.css'
import logo from '../../assets/logo.png'
import navbtn from '../../assets/button.png'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

function Nav() {
   const[isOpen,setIsOpen]=useState(false)
   function handelmenu(){
    setIsOpen(!isOpen)
   }
  return (
    <>
    <nav>
        <img src={logo} className="logo" />
        <ul className={`nav-links poppins ${isOpen && 'active'}`}>
            <li className="navlink"><Link activeClass='active' to='home' spy={true} smooth={true} offset={-70} duration={500}>Home<hr /></Link></li>
            <li className="navlink"><Link activeClass='active' to='about' spy={true} smooth={true} offset={-70} duration={500}>About<hr /></Link></li>
            <li className="navlink"><Link activeClass='active' to='hiw' spy={true} smooth={true} offset={-70} duration={500}>How it works<hr /></Link></li>
            <li className="navlink"><Link activeClass='active' to='blog' spy={true} smooth={true} offset={-70} duration={500}>Blog<hr /></Link></li>
        </ul>
        <span onClick={handelmenu} className='nav-bar'>{isOpen?<FontAwesomeIcon icon={faTimes}/>:<FontAwesomeIcon icon={faBars}/>}</span>
        <img src={navbtn} className='nav-btn'/>
    </nav>
    </>
  )
}

export default Nav