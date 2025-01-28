"use client";
import { WEALTH_NAV_DATA_LIST } from '@/utils/helper'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Icons from './Icons';

const WealthNav = () => {
      const [show, setShow] = useState(true);
    function showNav() {
        setShow(!show);
        if (show === true) {
            document.body.classList.add("max-lg:!overflow-hidden");
        } else {
            document.body.classList.remove("max-lg:!overflow-hidden");
        }
    }
  return (
      <nav className='bg-dark-green'>
          <div className='max-w-[1180px] px-5 mx-auto'>
              <div className='flex items-center justify-between py-5 h-20'>
                  <Image width={207} height={39} className='lg:w-[207px] lg:h-[39px] w-[180px] h-[36px] object-cover' alt='wealth-img' src="/assets/images/svg/wealth-logo.svg" />
                  <div className='flex items-center 2xl:gap-[77px] xl:gap-[150px] gap-[121px]'>
                      <ul className={`flex items-center 2xl:gap-6 xl:gap-5 gap-2  max-lg:z-10 max-lg:justify-center max-lg:flex-col max-lg:fixed max-lg:right-0 max-lg:top-0 max-lg:bg-dark-green max-lg:w-full max-lg:h-screen duration-300 ${show ? "max-lg:translate-x-full" : "max-lg:translate-x-0"
                            }`}>
                          {WEALTH_NAV_DATA_LIST.map((obj, i) => (
                              <li key={i} onClick={showNav}>
                                  <Link href={obj.url} className='font-normal text-base leading-normal text-white text-opacity-90 nav-stroke transition-all ease-linear duration-300 relative after:absolute after:w-0 after:hover:w-[80%] after:bg-white after:h-1 after:bottom-[-5px] after:start-1/2 after:-translate-x-1/2 after:rounded-[44px] after:transition-all after:duration-300 after:ease-linear'>{obj.link}</Link>
                                  
                              </li>
                          ))}
                          <li className='lg:hidden block'> <button onClick={showNav} className='font-semibold text-base leading-normal text-white bg-light-green py-[14px] px-4 rounded-[88px] relative z-10 '>Contact us</button></li>
                      </ul>
                      <button className='font-semibold text-base leading-normal text-white bg-light-green py-[14px] px-4 rounded-[88px] relative z-10 lg:block hidden'>Contact us</button>
                      <div
                          className="lg:hidden cursor-pointer pointer-events-auto"
                          onClick={showNav}
                      >
                          {show ? (
                              <div className="z-30 cursor-pointer relative">
                                  <Icons icon="menuIcon" />
                              </div>
                          ) : (
                              <div className="z-20 cursor-pointer relative">
                                  <Icons icon="crossIcon" />
                              </div>
                          )}
                      </div> 
                  </div>
              </div>
          </div>
    </nav>
  )
}

export default WealthNav