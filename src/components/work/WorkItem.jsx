import React from 'react'

const WorkItem = (props) => {
  return (
    <div className='work-item'>
        <div className='work-item-img'>
            <img src={props.img} alt="" />
        </div>
        <h3>{props.title}</h3>
        <div className='work-item-cta' >
            <a href={props.githubLink} className='btn' target='_blank'>Github</a>
            <a href={props.demoLink} className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
    </div>
  )
}

export default WorkItem