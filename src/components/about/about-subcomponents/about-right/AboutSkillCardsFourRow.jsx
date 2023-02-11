import React from 'react'
import AboutSkillcard from './AboutSkillcard'
import MONGODB from '../../../../assets/mongodb.png'
import EXPRESSJS from '../../../../assets/expressjs.png'
import REACT from '../../../../assets/react.png'
import NODEJS from '../../../../assets/nodejs.png'

const AboutSkillcardsRow = () => {
  return (
    <div className='about-skillcards-row'>
        <AboutSkillcard 
          img={MONGODB}
          text="MongoDB"
        />
        <AboutSkillcard 
          img={EXPRESSJS}
          text="Express.js"
        />
        <AboutSkillcard 
          img={REACT}
          text="React"
        />
        <AboutSkillcard 
          img={NODEJS}
          text="Node.js"
        />
    </div>
  )
}

export default AboutSkillcardsRow