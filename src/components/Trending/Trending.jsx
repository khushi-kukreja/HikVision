import React, { useState, useRef } from 'react'
import { assets, trending } from '../../assets/assets'

const Trending = () => {
    const [showAll, setShowAll] = useState(false);
    const scrollRef = useRef(null);


    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className='flex flex-col mt-8 sm:mt-12 px-4 sm:px-6 lg:px-10 w-full max-w-[90vw] mx-auto '>
                <div className='flex flex-wrap justify-between items-center w-full gap-4'>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold font-inria'>Trending Cameras</h1>

                    {/* <div className='flex flex-row justify-between items-center gap-2'> */}
                    <div className='hidden sm:flex gap-2'>
                        <button onClick={scrollLeft} className='border-[1px] border-black sm:p-2 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center'>
                            <img src={assets.left_arrow} alt='btn' className='w-full h-full'></img>
                        </button>

                        <button onClick={scrollRight} className='border-[1px] border-black sm:p-2 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center'>
                            <img src={assets.right_arrow} alt='btn' className='w-full h-full  object-cover'></img>
                        </button>
                    </div>
                </div>

                {
                    showAll ? (
                        <div className='grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(240px,1fr))] mt-7 gap-4 sm:gap-6 lg:gap-8'>
                            {
                                trending.map((item, index) => (
                                    <div key={index} className='shadow-[0_0_10px_rgba(0,_0,_0,_0.5)] p-3 sm:p-4 rounded-md text-center bg-white'>
                                        <img src={item.cam} alt='cam'></img>
                                        <p className='mt-3 sm:mt-3 text-sm sm:text-base'>{item.text}</p>
                                    </div>
                                ))
                            }
                        </div>
                    ) :
                        (
                            <div
                                ref={scrollRef}
                                className='flex overflow-x-auto gap-4 sm:gap-6 lg:gap-8 mt-7 py-4 [&::-webkit-scrollbar]:hidden scroll-smooth'
                            >
                                {trending.map((item, index) => (
                                    <div
                                        key={index}
                                        className='w-[150px] sm:w-[200px] md:w-[240px] flex-shrink-0 shadow-[0_0_10px_rgba(0,_0,_0,_0.5)] p-3 sm:p-4 rounded-md text-center bg-white'
                                    >
                                        <img src={item.cam} alt='cam' className='w-full h-auto' />
                                        <p className='mt-2 sm:mt-3 text-sm sm:text-base'>{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        )
                }



                <div className='flex justify-end'>
                    <button onClick={() => setShowAll(!showAll)} className='transition-all duration-300 p-1 sm:p-2 mt-4 border-[1px] border-black bg-[#d9d9d9] w-[90px] sm:w-[100px] text-sm sm:text-base'>{showAll ? "Show less" : "Show more"}</button>
                </div>

            </div>
        </>
    )
}

export default Trending
