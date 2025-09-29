import React, { useEffect, useState } from 'react'
import {  Carousel } from '../../assets/assets';

const Header = () => {
    const [current, setCurrent] = useState(0);
    const length = Carousel.length;

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % length);
        }, 3000);
        return () => clearInterval(timer);
    }, [length]);
    return (
        <>
            <div className='w-full my-5 px-4 md:px-6 lg:px-10 relative'>
                <div className='bg-slate-400 rounded-2xl overflow-hidden relative h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px]'>
                    <div
                        className='flex transition-transform duration-500 w-full h-full'
                        style={{ transform: `translateX(-${current * 100}%)` }}
                    >
                        {Carousel.map((item, index) => (
                            <div key={index} className='w-full shrink-0 h-full relative'>
                                <img
                                    src={item.pic}
                                    alt='camera'
                                    className='w-full h-full object-cover'
                                />

                                {/* LOGO */}
                                <div className='absolute top-2 left-4 sm:top-4 sm:left-6 z-10 w-28 sm:w-36 md:w-48 lg:w-64'>
                                     <img src={item.logo} alt="" />
                                </div>

                                {/* PRICE */}
                                <div className='absolute bottom-3 right-3 sm:bottom-4 sm:right-6 text-xs sm:text-sm md:text-lg font-bold  z-10 '>
                                    <span className='line-through mr-2 sm:mr-3 text-black/70 text-[14px] sm:text-[18px] md:text-[25px]'>&#8377; {item.price}</span>
                                    <span className='text-black text-[16px] sm:text-[20px] md:text-[30px]'>&#8377; {item.offerprice}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Indicators */}
                <div className='flex justify-center gap-2 absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 '>
                    {Carousel.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`rounded-full transition-all duration-300 ${
                            current === index
                                ? 'bg-gray-600 w-3.5 h-3.5'
                                : 'bg-gray-300 w-2.5 h-2.5'
                        }`}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}



export default Header
