import React from 'react'
import ProductIcon from '../pages/products'
import { Swiper, SwiperSlide} from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Navigation, Pagination,  A11y, Autoplay,EffectFade  } from 'swiper/modules';
import data_products from '../Assets/data/data1.js';

const productSlider = () => {
return (
    <div className='Product-Slider'>
            <div className="container">
                    <div className="Product-Swiper">
                    <FontAwesomeIcon className="prev-btn" icon={faArrowLeft}/>
                    <FontAwesomeIcon className="next-btn" icon={faArrowRight}/>
                    <Swiper 
                            modules={[Navigation, Pagination, A11y, Autoplay, EffectFade]}
                            loop={true}
                            autoplay={{ delay: 2500, disableOnInteraction: false}}
                            speed={1250}
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
                                  slidesPerView: 4,
                                  spaceBetween: 20,

                                },
                              }}
                            spaceBetween={20}
                            navigation={{ clickable: true , nextEl: '.next-btn', prevEl: '.prev-btn'}}
                            pagination={{ clickable: true }}>
                            {data_products.slice(0, 6).map((product, index) => {
                            return (<SwiperSlide >
                                    <ProductIcon 
                                    key={index}
                                    id={data_products.id}
                                    productName={product.productName} 
                                    lastPrice={product.lastPrice}
                                    newPrice={product.newPrice}
                                    imgSrc={product.imgSrc}
                                    />
                            </SwiperSlide> )
                            })}
                    </Swiper>
                    </div>
            </div>
    </div>
)
}

export default productSlider