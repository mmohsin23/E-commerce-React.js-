import React from 'react'
import "../../Assets/Scss/hero.scss";
import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination,  A11y, Autoplay,EffectFade  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';


const Hero = () => {
  return (
    <div className='HeroComponent'>
       <Swiper className='heroSlider'
          modules={[Navigation, Pagination, A11y, Autoplay, EffectFade]}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false}}
          slidesPerView={1}
          effect='fade'
          navigation={{ clickable: true }}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide> <img src="/Assets/Images/recip-soup.png" alt="" />
            <button>View Details</button>
          </SwiperSlide>
          <SwiperSlide> <img src="/Assets/Images/recip-tray.png" alt="" />
            <button>View Details</button>
          </SwiperSlide>
          <SwiperSlide> <img src="/Assets/Images/recip-soup.png" alt="" />
            <button>View Details</button>
          </SwiperSlide>
          <SwiperSlide> <img src="/Assets/Images/recip-tray.png" alt="" />
            <button>View Details</button>
          </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Hero