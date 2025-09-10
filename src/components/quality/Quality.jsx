import React from 'react'
import { quality } from '../../assets/assets'

const Quality = () => {
    return (
        <>
            <div className='flex flex-col justify-center items-center mt-20 mb-24'>
                <div className='w-[450px] h-28 mx-auto text-center'>
                    <h1 className='text-3xl md:text-4xl font-serif text-[#8e8e8e]'><span className='text-black'>We offer quality,</span> with the best materials and services</h1>
                </div>

                <div className='grid md:grid-cols-[350px_350px] lg:grid-cols-[350px_350px_350px] mt-6 bg-[#fbfbfb]'>
                    {
                        quality.map((item, index) => (
                            <div key={index} className='w-[350px] p-8 flex flex-col gap-4'>
                                <img src={item.icon} alt="icon" className='w-9'/>
                                <h3 className='text-2xl font-semibold'>{item.heading}</h3>
                                <p >{item.para}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Quality
