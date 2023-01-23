import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";

import { SliderProducts } from "../../data/products";

export default function Slider() {
    return (
        <div className="s_container">
            <Swiper
                modules={[Pagination, Navigation]}
                className="mySwiper"
                navigation={true}
                loopFillGroupWithBlank={true}
                slidesPerView={3}
                spaceBetween={40}
                slidesPerGroup={1}
                loop={true}>
                {SliderProducts.map((slide, i) => (
                    <SwiperSlide key={i}>
                        <div className="left_s">
                            <div className="name">
                                <span>{slide.name}</span>
                                <span>{slide.detail}</span>
                            </div>

                            <span>{slide.price} $</span>
                            <div>Shop now</div>
                        </div>
                        <img src={slide.img} alt="product" className="img_p" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
