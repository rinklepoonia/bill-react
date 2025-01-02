'use client';
import { OVERFLOW_SWIPER_DATA_LIST } from '@/utils/helper'
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const OneSideOverflow = () => {
    return (
        <>
            <div className='lg:ms-20 sm:ms-14 ms-5 py-20'>
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={1.5}
                    spaceBetween={20}
                    loop={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    speed={3000}
                    breakpoints={{
                        445: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 40
                        },
                        1025: {
                            slidesPerView: 2.5,
                        },
                        1400: {
                            slidesPerView: 3.13,
                        },
                        1921: {
                            slidesPerView: 4.5,
                        },
                    }}>
                    {OVERFLOW_SWIPER_DATA_LIST.map((obj, i) => (
                        <SwiperSlide key={i}>
                            <Image width={580} height={560} src={obj.image} alt='img' className='h-[560px] object-cover object-top' />
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
            <div className='lg:me-20 sm:me-14 me-5 py-20'>
                <Swiper className='change-direction'
                    modules={[Autoplay]}
                    slidesPerView={1.5}
                    spaceBetween={20}
                    loop={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    speed={3000}
                    breakpoints={{
                        445: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 40
                        },
                        1025: {
                            slidesPerView: 2.5,
                        },
                        1400: {
                            slidesPerView: 3.13,
                        },
                        1921: {
                            slidesPerView: 4.5,
                        },
                    }}>
                    {OVERFLOW_SWIPER_DATA_LIST.map((obj, i) => (
                        <SwiperSlide key={i}>
                            <Image width={580} height={560} src={obj.image} alt='img' className='h-[560px] object-cover object-top' />
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </>
    )
}

export default OneSideOverflow