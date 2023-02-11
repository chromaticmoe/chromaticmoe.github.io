import React from 'react'

const AboutLeftComponents = (props) => {
  return (
    <>
        <div className='about-pic'>
            <img src={props.img} alt='ryan-img' />
        </div>
        <div className='about-desc'>
            A dedicated programmer who spends his days coding and debugging.  As someone who found passion for programming and software development, I've been constantly striving to improve my skills and take on new and challenging projects. In my free time, I continue to study and pick-up new technologies, new skill sets, and new ways to tackle the daily challenges of being a programmer.  I unwind by playing video games and reading books.
        </div>
    </>
  )
}

export default AboutLeftComponents