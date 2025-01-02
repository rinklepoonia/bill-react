
'use client';
import React from 'react'
import SwitchCard from './common/SwitchCard'
import { SWITCH_DATA_LIST } from '@/utils/helper'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

const Switch = () => {
    return (
        <div className='py-20'>
            <div className='lg:flex hidden flex-wrap justify-center xl:gap-0 lg:gap-4 gap-0'>
                {SWITCH_DATA_LIST.map((obj, i) => (
                    <SwitchCard key={i} obj={obj}/>
                ))}
            </div>
            <div className='lg:hidden block py-20'>
                <Swiper  
                    modules={[Autoplay, Pagination]}
                    pagination={true}
                    spaceBetween={20}
                    loop={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    speed={3000}
                    breakpoints={
                        {
                            1024: {
                                slidesPerView: 3,
                            },
                            768: {
                                slidesPerView: 2, 
                            },
                            640: {
                               
                                    slidesPerView: 2,
                              
                            },
                            540: {

                                slidesPerView: 1,
                                spaceBetween:10,

                            }
                            
                        }}
                 >
                       {SWITCH_DATA_LIST.map((obj, i) => (
                        <SwiperSlide key={i}>
                            <SwitchCard obj={obj}  />
                        </SwiperSlide>
                  ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Switch