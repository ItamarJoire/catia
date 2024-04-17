import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';

import styled from 'styled-components';

import { Imgs } from '../lib/imgs' 

const Div = styled.div`
  .swiper {
    width: 100%;
    height: 100%;
  }

  swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-pagination-bullet {
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    color: #000;
    opacity: .9;
    background: rgba(0, 0, 0, 0.2);
  }

  .swiper-pagination-bullet-active {
    color: #fff;
    background: #445E0A;
  }
`

export function CarouselContainer(){  
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <Div className='mySwiper mt-3'>
      <Swiper
        className='pb-10'
        spaceBetween={0}
        slidesPerView={1}
        loop={false}
        centeredSlides={true}
        modules={[ Autoplay, Pagination]}
        pagination={pagination}
      >
        {    
          Imgs.map((img, index) => (
            <SwiperSlide key={index}>
              <div className='md:border-[1px] md:rounded-md md:p-2'>
                <img src={img.src} alt={img.alt} className='mt-3 w-full h-auto object-cover rounded-lg'/>
              </div>
            </SwiperSlide>
        ))}
      </Swiper>
    </Div>
  );
};