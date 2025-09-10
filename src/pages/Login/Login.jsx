import React from 'react'
import { useState } from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Login = () => {

  const [number, setNumber] = useState();
  const [otp, setOtp] = useState();
  const [countryCode, setCountryCode] = useState('+91');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  }

  return (
    <>
      <div className='flex flex-row'>
        <div className='w-1/2 h-[90vh]'>
          <img src={assets.cctv} alt='pic' className='w-full h-full object-cover' />
        </div>

        <div className='w-1/2 h-[90vh] flex justify-center items-center bg-[#EEEEEE]'>
          <div className=''>
            <h1 className='text-3xl font-inria'>Hello,<span className='font-semibold'> Welcome Back!</span> </h1>
            <p className='font-inria mt-3'>We're happy to see you again.</p>

            <form className=' mt-10'>
              <div className='mb-2'>
                <p className='font-inria mb-1'>Phone Number</p>

                <div className='flex flex-row'>
                  <select value={countryCode} onChange={(e) => setCountryCode(e.target.value)} className='w-[70px] p-2 rounded-bl-md rounded-tl-md border border-[#D9D9D9]'>
                    <option value="+91">+91 India</option>
                    <option value="+1">+1 United States</option>
                    <option value="+44">+44 United Kingdom</option>
                    <option value="+61">+61 Australia</option>
                  </select>
                  <input type='tel' onChange={(e) => setNumber(e.target.value)} value={number} className='w-[300px] p-2 rounded-br-md rounded-tr-md border border-[#D9D9D9]'></input>
                </div>

              </div>

              <div>
                <p className='font-inria mb-1'>OTP</p>
                <input type='number' onChange={(e) => setOtp(e.target.value)} value={otp} className='w-[370px] p-2 rounded-md border border-[#D9D9D9]' r></input>
              </div>

              <div className='flex flex-col mt-10'>
                <button onClick={() => onSubmitHandler} className='w-[370px] rounded-md bg-[#1E1E1E] p-2 font-inria text-white border border-[#D9D9D9]'>Login</button>
                <p className='text-center mt-2 font-inria text-[#808080]'>Don't have an account? <Link to="/signup" className='font-semibold text-black'>Sign up for free</Link></p>
              </div>
            </form>
          </div>

        </div>
      </div>
    </>
  )
}

export default Login
