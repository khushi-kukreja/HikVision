import React from 'react'
import { assets } from '../../assets/assets'

import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    return (
        <>
            <div className='bg-stone-900 p-10'>
                <div className='grid grid-cols-[1fr] gap-y-16 md:grid-cols-[1fr_1fr_1fr] md:gap-y-14 lg:grid-cols-[1fr_1fr_1fr_1fr_2fr] gap-4 p-10 '>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-xl text-white font-bold text-center md:text-left'>Products</h1>
                        <ul className='list-none text-gray-400 flex flex-col gap-2 mt-4 items-center text-center md:items-start md:text-left '>
                            <li>realme Phones</li>
                            <li>Smartrwatch</li>
                            <li>Buds</li>
                            <li>Accessories</li>
                            <li>realme Care+</li>
                        </ul>
                    </div>

                    <div>
                        <h1 className='text-xl text-white font-bold text-center md:text-left'>Programs</h1>
                        <ul className='list-none text-gray-400 flex flex-col gap-2 mt-4 items-center text-center md:items-start md:text-left'>
                            <li>VIP Club</li>
                            <li>Exchange Program</li>
                            <li>Realme Coin</li>
                            <li>Bulk Order</li>
                            <li>realme Next AI+</li>
                        </ul>
                    </div>

                    <div>
                        <h1 className='text-xl text-white font-bold text-center md:text-left'>Support</h1>
                        <ul className='list-none text-gray-400 flex flex-col gap-2 mt-4 items-center text-center md:items-start md:text-left'>
                            <li> FAQ</li>
                            <li>Email Us</li>
                            <li>User Guide</li>
                            <li>Warranty Guide</li>
                            <li>Service Centers</li>
                            <li>UI 5.0</li>
                            <li>UI 6.0</li>
                        </ul>
                    </div>

                    <div>
                        <h1 className='text-xl text-white font-bold text-center md:text-left'>About realme</h1>
                        <ul className='list-none text-gray-400 flex flex-col gap-2 mt-4 items-center text-center md:items-start md:text-left'>
                            <li>Our Brand</li>
                            <li>Community</li>
                            <li>App Download</li>
                            <li>Retail Store</li>
                            <li>Newsroom</li>
                            <li>Realmeow</li>
                            <li>Declaration and Disclosure</li>
                        </ul>
                    </div>

                    <div className='text-white flex flex-col justify-center items-center md:items-end gap-16 p-10'>
                        <div>
                            <a href="#" className='flex px-2 py-2 justify-evenly font-bold items-center w-[180px] bg-white text-black rounded-full'><img src={assets.care} alt="mic" className='w-6' />Chat Support</a>
                            <p className='text-gray-400 text-[12px] mt-2 text-center md:text-right'>9:00-21:00 ,MON-SUN</p>
                            <p className='text-gray-400 text-[12px]  text-center md:text-right'>including Holidays</p>
                            <p className='font-bold text-2xl  text-center md:text-right'>1800 102 2777</p>
                        </div>

                        <div className='flex flex-row gap-5'>
                            <a href="/">
                                <div className='w-12 h-12 rounded-full bg-stone-700 flex items-center justify-center'>
                                    <i className='fab fa-facebook-f text-white text-[22px]'></i>
                                </div>
                            </a>
                            <a href="/">
                                <div className='w-12 h-12 rounded-full bg-stone-700 flex items-center justify-center'>
                                    <i className='fab fa-instagram text-white text-[22px]'></i>
                                </div>
                            </a>
                            <a href="/">
                                <div className='w-12 h-12 rounded-full bg-stone-700 flex items-center justify-center'>
                                    <i className='fab fa-twitter text-white text-[22px]'></i>
                                </div>
                            </a>
                            <a href="/">
                                <div className='w-12 h-12 rounded-full bg-stone-700 flex items-center justify-center'>
                                    <i className='fab fa-youtube text-white text-[20px]'></i>
                                </div>
                            </a>
                        </div>

                    </div>
                </div>
                <hr className='mt-6 mb-6 border-t-2 border-stone-700' />

                <div className='flex flex-col gap-6 md:flex-row justify-between items-center md:gap-3 text-stone-500 mb-10'>
                    <div className='flex flex-col md:flex-row gap-4 text-center '>
                        <p className='text-white'>India (English/INR)</p>
                        <p>&copy; 2018-2025 realme. All Rights Reserved.</p>
                    </div>

                    <div className='text-center'>
                       <p>E-waste Management &nbsp;|&nbsp; Integrity and Anti-corruption &nbsp;|&nbsp; User Agreement &nbsp;|&nbsp; Privacy Policy &nbsp;|&nbsp; Terms of Sales &nbsp;|&nbsp; Warranty Terms</p>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Footer
