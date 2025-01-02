import { FOOTER_DATA_LIST, SOCIAL_ICON_DATA_LIST } from '@/utils/helper'
import Image from 'next/image'
import React from 'react'
import Icons from './common/Icons'
import Link from 'next/link'

const Footer = () => {
  return (
      <div className='bg-prussian-blue py-20'>
          <div className='container max-w-[1140px] px-3 mx-auto'>
              <div  className='flex flex-wrap justify-between'>
                  <div className='lg:w-[40%] w-full px-3'>
                      <Image width={223} height={84} src="/assets/images/png/footer-logo.png" alt='footer-logo' /> 
                      <p className='text-lg leading-base text-white pt-7 pb-8 max-w-[430px]'>At Visionary Venture, we provide tailored real estate solutions with a focus on quality and customer satisfaction. Let us guide you through your next investment or dream home journey. </p>
                      
                      <div className='flex items-center gap-2'>
                          {SOCIAL_ICON_DATA_LIST.map((obj, i) =>(
                              <div key={i} >
                                  <Link href={obj.url} target='blank'>
                                      <Icons icon={obj.icon} />
                                  </Link>
                              </div>
                          ))}

                      </div>
                  </div>
                  <div className='lg:w-[53%] w-full px-3 lg:mt-0 mt-10'>
                      <div className='flex flex-wrap max-w-[631px] sm:justify-between gap-16'>
                          {FOOTER_DATA_LIST.map((obj, i) => (
                                  <ul key={i} className=''>
                                      <li className='text-white text-base pb-3'>
                                          {obj.title}
                                  </li>
                                  {obj.path.map((path, index) => (
                                          <Link className='flex gap-2' key={index} href={path.url || "#"}>
                                              {path.icon && <Icons icon={path.icon} />}
                                              <li className='text-white text-sm leading-normal max-w-[248px] pb-2'>
                                                 {path.link}
                                              </li>
                                          </Link>
                                  ))}
                                  </ul>
                          ))}
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Footer