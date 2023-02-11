import React from 'react'
import "./header.css"


const Header = (props) => {

  function clickButton(event){
    props.whenClick(event.target.getAttribute("href"))

  }

  return (
    <header className='container header-container fade-in'>
      <div className='greeting'>Hi, I'm <span className='my-name'>Ryan</span>.</div>
      <div className='greeting-desc'>a Full Stack Developer</div>
      <a onClick={clickButton} className='btn btn-primary view-work' href="#about">View my portfolio ↓</a>
    </header>
  )
}

export default Header