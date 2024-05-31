import React from 'react'
import ProductIcon from '../pages/products'
import { Swiper, SwiperSlide} from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Navigation, Pagination,  A11y, Autoplay,EffectFade  } from 'swiper/modules';

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
                slidesPerView={4}
                spaceBetween={20}
                navigation={{ clickable: true , nextEl: '.next-btn', prevEl: '.prev-btn'}}
                pagination={{ clickable: true }}>
                <SwiperSlide>
                    <ProductIcon productName={'Third Product'} 
                    lastPrice={'10,000'}
                    newPrice={'4,500'}
                    imgSrc={'/Assets/Images/media-01.png'}
                    />
                </SwiperSlide> 
                <SwiperSlide>
                    <ProductIcon productName={'Third Product'} 
                    lastPrice={'10,000'}
                    newPrice={'4,500'}
                    imgSrc={'/Assets/Images/media-01.png'}
                    />
                </SwiperSlide> 
                <SwiperSlide>
                    <ProductIcon productName={'Third Product'} 
                    lastPrice={'10,000'}
                    newPrice={'4,500'}
                    imgSrc={'/Assets/Images/media-01.png'}
                    />
                </SwiperSlide> 
                <SwiperSlide>
                    <ProductIcon productName={'Third Product'} 
                    lastPrice={'10,000'}
                    newPrice={'4,500'}
                    imgSrc={'/Assets/Images/media-01.png'}
                    />
                </SwiperSlide> 
                <SwiperSlide>
                    <ProductIcon productName={'Third Product'} 
                    lastPrice={'10,000'}
                    newPrice={'4,500'}
                    imgSrc={'/Assets/Images/media-01.png'}
                    />
                </SwiperSlide> 
                <SwiperSlide>
                    <ProductIcon productName={'Third Product'} 
                    lastPrice={'10,000'}
                    newPrice={'4,500'}
                    imgSrc={'/Assets/Images/media-01.png'}
                    />
                </SwiperSlide>
            </Swiper>
            </div>
        </div>
    </div>
  )
}

export default productSlider