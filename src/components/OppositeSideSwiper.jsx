'use client';
import { OPPOSITESIDE_ONE_DATA_LIST, OVERFLOW_SWIPER_DATA_LIST, TRUST_LIST } from '@/utils/helper';
import React from 'react';
import SwiperData from './common/SwiperData';

const OppositeSideSwiper = () => {
    return (
        <div className="py-20">
            <div className="grid lg:grid-cols-2 grid-cols-1 items-center">
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aut consequuntur iure velit a
                        distinctio, quis mollitia porro dolorem minus non perferendis expedita, et alias qui quidem vitae quod
                        aliquam nam impedit perspiciatis ab! Facilis quaerat quo maiores ipsam, reiciendis incidunt impedit
                        velit minus delectus in earum perspiciatis doloremque dignissimos ad? Beatae, vel! Eum repudiandae eos
                        illo! Tempore reiciendis, praesentium aliquam cumque alias inventore qui eaque itaque perferendis velit
                        maxime, natus, ea voluptatibus blanditiis architecto cum facilis ad quod laboriosam in adipisci modi
                        ipsum. Earum nemo veniam iusto distinctio a?
                    </p>
                </div>
                <div className='lg:mt-0 mt-20'>
                    <SwiperData
                        dataList={OPPOSITESIDE_ONE_DATA_LIST}
                        slidesPerView={3}
                        spaceBetween={20}
                    />
                    <SwiperData
                        dataList={OVERFLOW_SWIPER_DATA_LIST}
                        className="change-direction mt-10"
                        slidesPerView={3}
                        spaceBetween={20}
                    />
                    <SwiperData
                        dataList={TRUST_LIST}
                        className="mt-10"
                        slidesPerView={3}
                        spaceBetween={20}
                    />
                </div>
            </div>
        </div>
    );
};

export default OppositeSideSwiper;
