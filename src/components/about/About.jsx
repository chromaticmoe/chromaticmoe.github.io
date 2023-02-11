import React from 'react'
import "./about.css"
import AboutPic from "../../assets/about-pic.png"
import AboutSkillcardsRow from './about-subcomponents/about-right/AboutSkillcardsRow'
import AboutSkillcardsFourRow from './about-subcomponents/about-right/AboutSkillCardsFourRow'
import AboutSkillcardsLastRow from './about-subcomponents/about-right/AboutSkillCardsLastRow'
import AboutLeftComponents from './about-subcomponents/about-left/AboutLeftComponents'

const About = (props) => {
  return (
    <section id="about" data-aos={props.animation}>
      <h2>About</h2>
  
      <div className='container about-container'>
        <div className='about-left'>
          <AboutLeftComponents 
            img={AboutPic}
          />
        </div>
        <div className='about-right'>
          <div className='about-content'>
            <AboutSkillcardsRow />
            <AboutSkillcardsFourRow />
            <AboutSkillcardsLastRow />
          </div>
        </div>
      </div>

    </section>
  )
}

export default About