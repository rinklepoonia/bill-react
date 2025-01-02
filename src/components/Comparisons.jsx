"use client"
import React, { useState } from 'react'

import Icons from './common/Icons';
import Image from 'next/image';
import { COMPARISION_DATA_LIST } from '@/utils/helper';
const Comparisons = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <div className='lg:pb-[162px] md:pb-24 sm:pb-16 pb-10'>
            <div className='container max-w-[1180px] mx-auto px-5'>
                <div className="flex lg:flex-row flex-col-reverse flex-wrap -mx-3 ">
                    <div className='lg:w-1/2 px-3 w-full max-sm:mt-8 max-md:mt-10 max-lg:mt-14'>
                        <h2 className='max-w-[456px] md:mb-8 sm:mb-6 mb-4 lg:mb-[46px] max-lg:text-center max-lg:mx-auto'>Comprehensive Utility <span className='font-bold'>Comparisons</span></h2>
                        <div className='flex flex-col md:gap-6 gap-4'>
                            {COMPARISION_DATA_LIST.map((item, index) => (
                                <div
                                    key={index}
                                    className={`border rounded-md px-3.5 flex sm:gap-6 gap-4 duration-300 bg-white ${openIndex === index
                                            ? "items-start drop-shadow-accordion border-opacity-10 pb-3.5"
                                            : "items-center border-opacity-[8%]"
                                        }`}
                                >
                                    <div
                                        className={`flex items-center justify-center my-3.5 md:max-w-16 sm:max-w-12 sm:h-12 max-w-10 h-10 w-full md:h-16 rounded-full duration-300 ${openIndex === index ? "bg-prussian-blue" : "bg-light-blue"
                                            }`}
                                    >
                                        <Icons icon={item.icon} className={`${openIndex === index ? "fill-white" : ""} duration-300 ease-linear transition-all`} />
                                    </div>
                                    <div className='w-full'>
                                        <button
                                            onClick={() => toggleAccordion(index)}
                                            className={`flex items-center  justify-between w-full !leading-110 text-left text-lg sm:text-xl md:text-2xl font-medium text-deep-blue bg-white ${openIndex === index ? 'pb-0 pt-3.5' : 'py-[33px]'}`}
                                        >
                                            <span>{item.title}</span>
                                            <span
                                                className={`transform transition-transform ${openIndex === index ? "rotate-180" : "rotate-0"
                                                    }`}
                                            >
                                                <Icons icon="acc-arrow" />
                                            </span>
                                        </button>
                                        <div
                                            className={`transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-[300px] pt-2 opacity-100" : "max-h-0 pt-0 opacity-0"
                                                } overflow-hidden`}
                                        >
                                            <div className="bg-white text-sm sm:text-base !leading-160 duration-300">
                                                {item.content}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='lg:w-1/2 w-full px-3 flex lg:justify-end justify-center'>
                        <div className='flex items-center'>
                            <div className='relative after:absolute after:w-full after:h-full after:bg-prussian-blue after:rounded after:-left-3 sm:after:-left-[33px] after:-bottom-3  sm:after:-bottom-[38px] z-10 after:-z-10 xl:translate-x-5 max-sm:translate-x-1.5'>
                                <Image src="/assets/images/webp/hero-office.webp" alt='comparison-img' width={497} height={497} className='xl:max-w-[497px] lg:max-w-[450px] sm:max-w-[400px] max-w-[324px] w-full' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Comparisons;
