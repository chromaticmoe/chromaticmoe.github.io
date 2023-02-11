import React from 'react'
import {MdOutlineMail} from 'react-icons/md'

const ContactCards = (props) => {
  return (
    <div className='contact-option'>
        <MdOutlineMail className='contact-option-icon'/>
        <h4>{props.type}</h4>
        <h5>{props.text}</h5>
        <a href={props.link} target={props.target}>Send a message</a>
    </div>
  )
}

export default ContactCards