import React from 'react'



const AboutSkillcard = (props) => {
  return (
    <div className='about-skillcard'>
        <img className='skillcard-img' src={props.img} alt='about-skillcard' />
        <div>{props.text}</div>
    </div>
  )
}

export default AboutSkillcard