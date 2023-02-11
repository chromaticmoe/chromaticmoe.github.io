import React from 'react'
import "./work.css"
import WorkItem from './WorkItem'
import works from './works'

const Work = (props) => {
  return (
    <section id="work" data-aos={props.animation}>
      <h2>Work</h2>

      <div className='container works-container'>
      {works.map((worksList) => {
        return (
          <WorkItem 
            key={worksList.id}
            id={worksList.id}
            title={worksList.title}
            img={worksList.img}
            githubLink={worksList.github}
            demoLink={worksList.demo}
          />
          )
        }
      )}
      </div>
    </section>
  )
}

export default Work