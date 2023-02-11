import React from 'react'
import "./navbar.css"
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiCodeBlock} from 'react-icons/bi'
import {RiServiceFill} from 'react-icons/ri'
import {AiOutlineMessage} from 'react-icons/ai'
import {useState} from 'react'

const Navbar = (props) => {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav className='fade-in'>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#work" onClick={()=> setActiveNav('#work')} className={activeNav === '#work' ? 'active' : ''}><BiCodeBlock /></a>
      {/* <a href="#testimonials" onClick={()=> setActiveNav('#testimonials')} className={activeNav === '#testimonials' ? 'active' : ''}><RiServiceFill /></a> */}
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMessage /></a>
    </nav>
  )
}

export default Navbar