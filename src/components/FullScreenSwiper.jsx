'use client';
import { OVERFLOW_SWIPER_DATA_LIST } from '@/utils/helper'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/autoplay';
// import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Icons from './common/Icons';

const FullScreenSwiper = () => {
  return (
      <div className='relative'>
          <span className='btn-next absolute flex items-center justify-center size-[73px] bg-white rounded-full z-10 top-1/2 right-[2%]'>
              <Icons icon="rightArrow"/>
          </span>
          <span className='btn-prev absolute flex items-center justify-center size-[73px] bg-white rounded-full z-10 top-1/2  left-[2%]'>
              <Icons icon="leftArrow" />
          </span>
          <Swiper
              modules={[Navigation]}
              loop={true}
              navigation={{ nextEl: ".btn-next", prevEl: ".btn-prev" }}
              autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
              }}
              speed={3000}
            >
              {OVERFLOW_SWIPER_DATA_LIST.map((obj, i) => (
                  <SwiperSlide key={i} className='h-screen'>
                      <Image width={1180} height={100} src={obj.image} alt='img' className='w-full h-screen object-cover object-top' />
                  </SwiperSlide>
              ))}
          </Swiper>
    </div>
  )
}

export default FullScreenSwiper