import React from 'react'
import { IconContext } from "react-icons";
import './footer.css'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
        <a href='#' className='footer-logo'>Ryan Rasuman</a>

        <IconContext.Provider value={{ size: "2rem", className: "global-class-name" }}>
        <div className='footer-socials'>
            <a href='https://github.com/chromaticmoe'><AiFillLinkedin /></a>
            <a href='https://www.linkedin.com/in/ryan-rasuman/'><AiFillGithub /></a>
            <a href='https://twitter.com/chromaticmoe'><AiFillTwitterCircle /></a>
        </div>
        </IconContext.Provider>
        <div className='footer-copyright'>
            <small>&copy; RYAN RASUMAN. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer