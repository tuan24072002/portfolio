import React from 'react'
import './Testimonials.scss'
import data from './DataTestimonials'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Testimonials = () => {
    return (
        <section className="testimonials container section">
            <h2 className="section_title">Clients & Reviews</h2>
            <Swiper className="testimonials_container grid"
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                grabCursor={true}
                autoplay={true}
                pagination={{ clickable: true }}>
                {
                    data.map(({ id, image, title, subtitle, comment }) => {
                        return (
                            <SwiperSlide className="testimonials_item" key={id}>
                                <div className="thumb">
                                    <img src={image} alt="" />
                                </div>
                                <h3 className="testimonials_title">{title}</h3>
                                <span className='subtitle'>{subtitle}</span>
                                <div className="comment">{comment}</div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials