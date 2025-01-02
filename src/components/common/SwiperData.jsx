'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

const SwiperData = ({ dataList, className = '', slidesPerView = 3, spaceBetween = 40 }) => {
    return (
        <Swiper
            className={`linear-slider ${className}`}
            modules={[Autoplay]}
            slidesPerView={slidesPerView}
            spaceBetween={spaceBetween}
            centeredSlides={true}
            loop={true}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
            }}
            speed={3000}
            breakpoints={{
                1024: { slidesPerView: 2.6 },
                992: { slidesPerView: 3 },
                640: { slidesPerView: 4 },
                4750: { slidesPerView: 2.5 },
            }}
        >
            {dataList.map((Obj, i) => (
                <SwiperSlide key={i}>
                    <Image
                        width={210}
                        height={109}
                        className="w-[210px] h-[109px] object-cover object-top"
                        src={Obj.image || Obj.img}
                        alt="img"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SwiperData;
