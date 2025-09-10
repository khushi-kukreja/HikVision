import React from 'react'
import { useState } from 'react';
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';

const Signup = () => {

  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    countryCode: '+91',
    phoneNumber: '',
    emailOtp: '',
    phoneOtp: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    console.log(data);
  };


return (
  <>
    <div className='flex flex-row'>
      <div className='w-1/2 h-[90vh]'>
        <img src={assets.cctv} alt='pic' className='w-full h-full object-cover' />
      </div>

      <div className='w-1/2 h-[90vh] flex justify-center items-center bg-[#EEEEEE] flex-col'>
        <div className=''>
          <p className='font-inria text-4xl mb-5'>Create An Account</p>
        


        <form className='flex flex-col gap-2'>
          <div className='flex flex-row gap-4'>
            <div className='flex flex-col gap-1'>
              <p className='font-inria text-[14px]'>FirstName</p>
              <input type="text" value={data.firstname} name='firstname' onChange={handleChange} className='p-2 rounded-md w-40 font-inria' />
            </div>

            <div className='flex flex-col gap-1'>
              <p className='font-inria text-[14px]'>LastName</p>
              <input type="text" value={data.lastname} name='lastname' onChange={handleChange} className='p-2 rounded-md w-40 font-inria' />
            </div>
          </div>

          <div className='flex flex-col gap-1'>
            <p className='font-inria text-[14px]'>Email</p>
            <input type="email" value={data.email} name='email' onChange={handleChange} className='p-2 rounded-md w-[340px] font-inria' />
          </div>

          <div className='flex flex-col gap-1'>
            <p className='font-inria text-[14px]'>Phone Number</p>

            <div className='flex flex-row'>
              <select value={data.countryCode} name='countryCode' onChange={handleChange} className='font-inria w-[60px] p-2 rounded-bl-md rounded-tl-md'>
                <option value="+91">+91 🇮🇳</option>
                <option value="+1">+1 🇺🇸</option>
                <option value="+44">+44 🇬🇧</option>
                <option value="+61">+61 🇦🇺</option>
              </select>
              <input type='tel' onChange={handleChange} name='phoneNumber' value={data.phoneNumber} className='font-inria w-[270px] p-2 rounded-br-md rounded-tr-md'></input>
            </div>
          </div>

          <div className='flex flex-col gap-1'>
            <p className='font-inria text-[14px]'>Email OTP</p>
            <input type="number" value={data.emailOtp} name='emailOtp' onChange={handleChange} className='font-inria w-[340px] p-2 rounded' />
          </div>

          <div className='flex flex-col gap-1'>
            <p className='font-inria text-[14px]'>Phone Number OTP</p>
            <input type="number" value={data.phoneOtp} name='phoneOtp' onChange={handleChange} className='font-inria w-[340px] p-2 rounded' />
          </div>


          <button className='w-[340px] bg-[#1E1E1E] rounded-md font-inria uppercase py-3 mt-5 text-white'>Register</button>
          <p className='text-[#808080] font-inria text-center text-[14px]'>Already have an account? <Link to="/login" className='text-[#000000]'>Login here</Link></p>
        </form>
        </div>
      </div>
    </div>
  </>
)
}

export default Signup
