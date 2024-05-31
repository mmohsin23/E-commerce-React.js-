import React from 'react'
import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination,  A11y, Autoplay,EffectFade  } from 'swiper/modules';


const Hero = () => {
  return (
    <div className='HeroComponent'>
       <Swiper className='heroSlider'
          modules={[Navigation, Pagination, A11y, Autoplay, EffectFade]}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false}}
          slidesPerView={2}
          effect='fade'
          navigation={{ clickable: true }}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide> <img src="/Assets/Images/recip-soup.png" alt="" />
            <button className='detailButton'>View Details</button>
          </SwiperSlide>
          <SwiperSlide> <img src="/Assets/Images/recip-tray.png" alt="" />
            <button className='detailButton'>View Details</button>
          </SwiperSlide>
          <SwiperSlide> <img src="/Assets/Images/recip-soup.png" alt="" />
            <button className='detailButton'>View Details</button>
          </SwiperSlide>
          <SwiperSlide> <img src="/Assets/Images/recip-tray.png" alt="" />
            <button className='detailButton'>View Details</button>
          </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Hero