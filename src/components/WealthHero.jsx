import Image from 'next/image'
import React from 'react'
import WealthNav from './common/WealthNav'

const WealthHero = () => {
  return (
    <div id='home'>
      <WealthNav/>
      <div className='bg-pale-blue relative lg:pt-[156px] lg:pb-[250px] pt-20 lg:h-[720px] sm:h-[860px] h-[800px]'>
        <Image width={732} height={810} alt='img' className='lg:block hidden xl:w-[732px] xl:h-[810px] w-[543px] h-[744px] z-0 xl:object-cover absolute lg:top-[-80px] end-0' src="/assets/images/png/wealth-hero.png" />
        <Image width={353} height={356} alt='img' className='lg:hidden block sm:w-[500px] sm:h-[465px] w-[353px] h-[356px] z-0 xl:object-cover absolute lg:top-[43%] sm:top-[39%] top-[47%]  end-0' src="/assets/images/png/wealth-mobile-hero.png" />
        <Image width={454} height={267} alt='img' className='xl:w-[454px] xl:h-[267px] sm:w-[400px] sm:h-[220px] w-[260px] h-[153px] object-cover absolute xl:bottom-[4%] md:bottom-[11%] sm:bottom-[4%] bottom-[31%] lg:right-[19%] md:right-[37%] sm:right-[19%] right-[26%]' src="/assets/images/png/wealth-hero-graph.png"/>
        <div className='container max-w-[1140px] mx-auto px-3'>
          <div className='lg:pb-0 pb-10'>
            <p className='font-semibold text-xl leading-normal pb-4 max-lg:mx-auto max-lg:text-center'>Welcome to Tez Wealth</p>
            <h1 className='font-normal xl:text-6xl lg:text-5xl text-4xl !leading-109 text-grey-200 max-lg:text-center max-lg:mx-auto xl:max-w-[558px] max-w-[554px]'>Achieve Financial Freedom with <span className='text-dark-green font-bold'>AI-Powered Insights</span></h1>
            <p className='text-normal lg:text-xl text-lg leading-160 text-grey-300 xl:max-w-[558px] max-w-[458px] pt-4 max-lg:mx-auto max-lg:text-center'>AI-driven personal finance and wealth management for high net worth individuals and HENRYs</p>
          </div>
            </div>
      </div>
    </div>
  )
}

export default WealthHero