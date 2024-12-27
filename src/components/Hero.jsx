"use client";
import React, { useState } from 'react'
import Image from "next/image";
import NavBar from './common/NavBar';
import Icons from './common/Icons';

const Hero = () => {
    const [address, setAddress] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const validateAddress = (event) => {
        event.preventDefault();
        if (!address) {
            setErrorMessage('Please enter a valid address');
        } else {
            setErrorMessage('');
            // Add your validation logic here
        }
    };

    return (
        <div className="lg:bg-hero max-lg:bg-blue bg-full h-[810px]">
            <NavBar />
            <div className='md:py-[115px] py-[56px]'>
                <div className="max-w-[1180px] px-5 relative mx-auto">
                    <div className="flex flex-col">
                        <div className="flex items-center lg:items-start flex-col">
                            <h1
                                className="max-w-[612px] text-white font-normal xl:text-custom-6xl md:text-5xl text-3xl !leading-109 text-center lg:text-start mx-auto lg:mx-0">
                                Easily Compare <span className="font-bold">Energy, Gas, And Internet</span> Plans
                            </h1>
                            <p
                                className="pt-4 opacity-90 text-white font-normal text-base leading-150 max-w-[506px] text-center lg:text-start mx-auto lg:mx-0 md:pb-[42px] pb-8">
                                Find and switch to the best
                                energy, gas, and internet plans with ease. Our platform simplifies your
                                search, letting you compare providers and make informed decisions, all in one place.</p>
                            <div className='flex max-lg:justify-between bg-light-white md:p-[9px_9px_9px_20px] p-[6px_6px_6px_10px] max-w-[476px] w-full rounded-[0_100px_100px_55px] border border-solid border-pale-grey'>
                                <input id="addressInput" name="address" type="mail" className='w-full font-normal md:text-base placeholder:text-light-grey text-sm !leading-110 outline-none text-light-grey  pe-2' placeholder='Start typing your address' value={address}
                                    onChange={(e) => setAddress(e.target.value)} />
                                <button onClick={validateAddress} aria-label="contact us" className='flex items-center duration-500  gap-[3px] font-bold text-base leading-115 hover:bg-black text-white bg-sky-blue w-full max-w-[137px] py-[12px] md:ps-5 ps-3 md:pe-[3px] pe-5 rounded-[0_50px_50px_20px]'>Compare
                                    <Icons icon="white-btn-arrow" />
                                </button>
                            </div>
                            {errorMessage && (
                                <span
                                    id="address-error-message"
                                    className="text-start position-absolute start-0 font-normal text-base address-error"
                                    style={{ color: 'red' }}
                                >
                                    {errorMessage}
                                </span>
                            )}
                        </div>
                        <div className="relative z-[2] lg:hidden max-lg-image sm:mt-20 mt-10">
                            <Image
                                width={558} height={760}
                                src="/assets/images/png/hero-office.png"
                                className="hero-image object-cover object-top sm:max-w-[558px] sm:h-[400px] max-w-[450px] h-[300px] rounded w-full mx-auto"
                            />
                            <div className="absolute  top-[-93px] lg:right-[-39px] sm:right-[57px] right-[-5px] z-[-1]">
                                <Image
                                    width={112} height={187}
                                    src="/assets/images/svg/hero-dots.svg"
                                    className="dots-image w-[112px] h-[187px] object-contain"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-[-13px] right-0 padding-position-image lg:pr-5 hidden lg:block hero-image-position">
                        <div className="relative z-[2]">
                            <Image
                                width={558} height={760}
                                src="/assets/images/png/hero-office.png"
                                className="object-cover xl:max-w-[558px] xl:h-[760px] max-w-[400px] h-unset rounded w-100"
                            />
                            <div className="absolute  top-[-93px] right-0 xl:right-[-39px] z-[-1]">
                                <Image
                                    width={112} height={187}
                                    src="/assets/images/svg/hero-dots.svg"
                                    className="dots-image w-[112px] h-[187px] object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero