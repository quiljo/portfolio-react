import React from 'react';
import "./testimonial.css";
import Image1 from "../../assets/user1.jpg";
import Image2 from "../../assets/user2.jpg";
// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




const data=[
    {
        id:1,
        image:Image1,
        title:"Unknownymously",
        subtitle:" Basic User",
        comment:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    },
    {
        id:1,
        image:Image2,
        title:"Unknown",
        subtitle:" Premmium User",
        comment:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    },
]

const Testimonial = () =>{
    return(
       <section className="testimonial__container section">
        <h2 className="section__title">Clients & Reviews</h2>

        <Swiper className="testimonials__container grid"
         modules={[ Pagination]}
         spaceBetween={30}
         slidesPerView={1}
         loop={true}
         grabCursor={true}
         pagination={{ clickable: true }}
        >
            {data.map(({id,image, title, subtitle, comment}) => {
                return(
                    <SwiperSlide className="testimonials__item" key= {id}>
                        <div className="thumb">
                            <img src={image} alt=""/>
                        </div>
                        <h3 className="tetimonials__title">{title}</h3>
                        <span className ="subtitle">{subtitle}</span>
                        <div className="comment">{comment}</div>
                    </SwiperSlide>
                    
                )

            })}

          
            
        </Swiper>
       </section>
    )
}

export default Testimonial