import React from 'react'
import { Swiper, SwiperSlide} from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Navigation, Pagination,  A11y, Autoplay,EffectFade  } from 'swiper/modules';
import Reviews from './reviews';

const ReviewSlider = () => {
return (
    <div className='Product-Slider'>
            <div className="container">
                    <div className="Product-Swiper review-Swiper">
                    <FontAwesomeIcon className="prev-btn1" icon={faArrowLeft}/>
                    <FontAwesomeIcon className="next-btn1" icon={faArrowRight}/>
                    <Swiper 
                            modules={[Navigation, Pagination, A11y, Autoplay, EffectFade]}
                            loop={true}
                            speed={1000}
                            grabCursor={true}
                            initialSlide={2}
                            spaceBetween={20}
                            height={100}
                            centeredSlides={true}
                            navigation={{ clickable: true , nextEl: '.next-btn1', prevEl: '.prev-btn1'}}
                            pagination={{ clickable: true }}
                            breakpoints={{
                                0: {
                                  slidesPerView: 1,
                                  spaceBetween: 20,
                                },
                                768: {
                                  slidesPerView: 2,
                                  centeredSlides: false,
                                  spaceBetween: 40,
                                },
                                1024: {
                                  slidesPerView: 2.6,
                                  spaceBetween: 20,
                                  centeredSlides: true,

                                },
                                1600: {
                                  slidesPerView: 3,
                                  spaceBetween: 20,
                                },
                              }}
                            >
                            <SwiperSlide >
                                    <Reviews review={"This product is good, and it satisfy the need of clothes"} 
                                    userName={"Bilal"}/>
                            </SwiperSlide>
                            <SwiperSlide >
                                    <Reviews review={"This product is good and it is highly recommended to get one from them"} 
                                    userName={"Bilal"}/>
                            </SwiperSlide>
                            <SwiperSlide >
                                    <Reviews review={"kiya hi bataon is product ke baaray mein, mjhe buhat mazah araha hai is ko use kar ke"} 
                                    userName={"Bilal"}/>
                            </SwiperSlide>
                            <SwiperSlide >
                                    <Reviews review={"This product is good, and it satisfy the need of clothes"} 
                                    userName={"Bilal"}/>
                            </SwiperSlide>
                            <SwiperSlide >
                                    <Reviews review={"This product is good and it is highly recommended to get one from them"} 
                                    userName={"Bilal"}/>
                            </SwiperSlide>
                            <SwiperSlide >
                                    <Reviews review={"kiya hi bataon is product ke baaray mein, mjhe buhat mazah araha hai is ko use kar ke"} 
                                    userName={"Bilal"}/>
                            </SwiperSlide>
                    </Swiper>
                    </div>
            </div>
    </div>
)
}

export default ReviewSlider