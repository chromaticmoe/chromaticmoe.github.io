import React from 'react'
import "./testimonials.css"
import clients from './clients'
import TestimonialItem from './TestimonialItem'
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2>Testimonials</h2>

      <Swiper 
        className='container testimonials-container' 
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
      {clients.map(({name, review, img, id}) => {
        return (

            <SwiperSlide key={id} className='testimonial'>
                <div className='client-img'>
                    <img src={img} alt='client-img' />
                </div>
                <h5 className='client-name'>{name}</h5>
                <small className='client-review'>{review}</small>
            </SwiperSlide>
            
        )
      })}
      </Swiper>
    </section>
  )
}

export default Testimonials