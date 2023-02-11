import React from 'react'
import AboutSkillcard from './AboutSkillcard'
import GIT from '../../../../assets/git.png'
import JAVA from '../../../../assets/java.png'
import CPLUSPLUS from '../../../../assets/c++.png'


const AboutSkillcardsLastRow = () => {
  return (
    <div className='about-skillcards-row'>
        <AboutSkillcard 
            img={GIT}
            text="Git"
        />
        <AboutSkillcard 
            img={JAVA}
            text="Java"
        />
        <AboutSkillcard 
            img={CPLUSPLUS}
            text="C++"
        />
    </div>
  )
}

export default AboutSkillcardsLastRow