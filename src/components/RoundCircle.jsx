import { HOW_IT_WORK_LIST } from '@/utils/helper'
import React from 'react'
import Icons from './common/Icons'

const RoundCircle = () => {
  return (
      <div className='py-20'>
          <div className='container max-w-[1180px] mx-auto'>
              <h2 className='text-5xl text-black text-center pb-20'>RoundCircle</h2>
              <div className='grid lg:grid-cols-3 relative'>
                  {HOW_IT_WORK_LIST.map((item, index) => (
                      <div key={index} className={`flex flex-col max-lg:mx-auto items-center justify-start pt-8 lg:pt-[50px] size-[300px] xl:size-[326px] px-7 sm:px-9 lg:mt-0 mt-5 bg-white rounded-full border-green-400 border after:-z-10 relative after:absolute after:size-[302px] xl:after:size-[328px] after:bg-green-400 after:rounded-full ${(index + 1) % 2 === 0 ? "after:-top-1 after:-left-1 after:size-[307px] xl:after:!size-[334px]" : "after:top-0.5 after:left-0.5"}`}>
                          <Icons icon={item.icon} />
                          <p className="font-bold text-black text-base text-center mt-4 sm:mt-5">{item.title}</p>
                          <p className="text-black opacity-70 font-normal mt-1 sm:mt-1.5 text-base text-center">{item.description}</p>
                          <span className="absolute bottom-2.5 left-1/2 -translate-x-1/2 text-2xl text-black text-opacity-50 font-bold">0{index + 1}</span>
                      </div>
                  ))}
                  <span className="absolute bottom-[22%] left-[28%] lg:left-[24%] -z-10 max-lg:rotate-90"><Icons icon="greenHalfCircle" /></span>
                  <span className="absolute top-[22%] lg:top-1 right-[28%] lg:right-[24%] -z-10 -rotate-90 lg:rotate-180"><Icons icon="greenHalfCircle" /></span>
              </div>
              </div>
      </div>
  )
}

export default RoundCircle