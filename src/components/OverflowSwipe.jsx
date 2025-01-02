'use client';
import { OVERFLOW_SWIPER_DATA_LIST } from '@/utils/helper'
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';


const OverflowSwipe = () => {
  return (
    <div className='py-20'>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={40}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={3000}
        
        breakpoints={
          {
            1025: {
              slidesPerView: 2,
            },
           
            768: {
              slidesPerView: 1.5,
              spaceBetween:20
            },
            640: {

              slidesPerView: 1,

            },
           

          }} >
        {OVERFLOW_SWIPER_DATA_LIST.map((obj, i) => (
          <SwiperSlide key={i}>
            <Image width={716} height={342} alt='img' className='h-[342px]  object-cover' src={obj.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default OverflowSwipe