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
    <Div className='mySwiper mt-3 md:px-24 lg:px-44 xl:px-80'>
      <Swiper
        className='pb-12'
        spaceBetween={0}
        slidesPerView={1}
        loop={false}
        centeredSlides={true}
        modules={[ Autoplay, Pagination]}
        pagination={pagination}
        // breakpoints={{
        //   768: {
        //     slidesPerView: 2,
        //   }
        // }}  
      >
        {    
          Imgs.map((img, index) => (
            <SwiperSlide key={index}>
              <div className='rounded-lg'>
                <img src={img.src} alt={img.alt} className='w-full md:w-[500px] md:mx-auto h-auto md:h-[640px] object-cover rounded-lg'/>
              </div>
            </SwiperSlide>
        ))}
      </Swiper>
    </Div>
  );
};