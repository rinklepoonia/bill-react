import { SWITCH_DATA_LIST } from '@/utils/helper'
import React from 'react'
import Image from 'next/image'

const SwitchCard = ({obj}) => {
    return (
   
                <article className='relative max-sm:mx-auto sm:max-w-[360px] max-w-[370px] h-[661px] group overflow-hidden z-10'>
                    <Image
                        width={360}
                        height={661}
                        alt='img'
                        className='h-[661px] object-cover'
                        src={obj.sliderImg} />
                    <div className='bg-transparent-sky h-[661px] absolute top-0 bottom-0 right-0 left-0 group-hover:-top-[100%] transition-all ease-linear duration-500 flex items-center justify-center'>
                        <p className='font-normal text-custom-3xl leading-110 text-deep-blue -rotate-[90deg]'>{obj.title}</p>
                    </div>
                    <div className='bg-prussian-blue absolute -bottom-[100%] right-0 left-0 max-w-[360px] p-8 group-hover:bottom-0 transition-all ease-linear duration-500'>
                        <p className='font-normal text-custom-3xl leading-110 text-white pb-[14px]'>{obj.title}</p>
                        <p className='font-normal text-base leading-normal text-white text-opacity-90 max-w-[286px]'>{obj.des}</p>
                    </div>
                </article>
       

    )
}

export default SwitchCard