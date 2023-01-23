import React from 'react';
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';

import css from "./Testimonials.module.css";

import Hero from "../../assets/testimonialHero.png";

import { TestimonialsData } from "../../data/testimonials.js";

export default function Testimonials() {
    return (
        <div className={css.testimonials}>
            <div className={css.wrapper}>
                <div className={css.container}>
                    <span>Top Rated</span>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet nunc a mauris auctor tincidunt.</span>
                </div>

                <img src={Hero} alt="hero" />

                <div className={css.container}>
                    <span>100K</span>
                    <span>Happy Customers with us</span>
                </div>
            </div>

            <div className={css.reviews}>Reviews</div>
            <div className={css.carousel}>
                <Swiper
                    slidesPerView={3}
                    slidesPerGroup={1}
                    spaceBetween={20}
                    className={css.tCarousel}
                    breakpoints={{
                        820: {
                            slidesPerView: 3
                        },
                        640:{
                            slidesPerView: 2
                        },
                        0:{
                            slidesPerView: 1
                        }
                    }}
                >
                    {
                        TestimonialsData.map((testimonial, i) => (
                            <SwiperSlide key={i}>
                                <div className={css.testimonial}>
                                    <img src={testimonial.image} alt="" />
                                    <span>{testimonial.comment}</span>
                                    <hr />
                                    <span>{testimonial.name}</span>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}
