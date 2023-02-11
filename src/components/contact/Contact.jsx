import React from 'react'
import "./contact.css"
import ContactCards from './ContactCards'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';



const Contact = (props) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_API_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section id="contact" data-aos={props.animation}>
      <h2>Contact</h2>

      <div className='container contact-container'>
        <div className='contact-options'>
          <ContactCards 
            type='Email'
            text='ryan.rasuman@outlook.com'
            link='mailto:ryan.rasuman@outlook.com'
          />
          <ContactCards 
            type='WhatsApp'
            text='+639154477334'
            link='https://wa.me/+639154477334'
            target='_blank'
          />
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact