import React from 'react'
import AboutSkillcard from './AboutSkillcard'
import CSS from '../../../../assets/css.png'
import HTML from '../../../../assets/html.png'
import JS from '../../../../assets/js.png'

const AboutSkillcardsRow = () => {
  return (
    <div className='about-skillcards-row'>
        <AboutSkillcard 
          img={HTML}
          text="HTML"
        />
        <AboutSkillcard 
          img={CSS}
          text="CSS"
        />
        <AboutSkillcard 
          img={JS}
          text="JavaScript"
        />
    </div>
  )
}

export default AboutSkillcardsRow