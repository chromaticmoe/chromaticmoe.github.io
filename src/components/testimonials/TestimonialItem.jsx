import React from 'react'
import { SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const TestimonialItem = (props) => {
  return (
    <div className='testimonial'>
        <div className='client-img'>
            <img src={props.img} alt='client-img' />
        </div>
        <h5 className='client-name'>{props.name}</h5>
        <small className='client-review'>{props.review}</small>
    </div>
  )
}

export default TestimonialItem