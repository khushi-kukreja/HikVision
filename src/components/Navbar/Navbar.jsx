
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false); // scroll down
      } else {
        setVisible(true); // scroll up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`w-full py-3  px-6 md:px-24 bg-black text-white transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'
        } relative z-50`}
    >
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-16'>

          <Link to='/' className='pr-6 flex items-center'>
            <img src={assets.logo} alt='logo' className='w-14' />
            <h3 className='font-antic text-[22px] tracking-[0.8rem] pl-5'>AOME</h3>
          </Link>


          <ul className='hidden md:flex list-none gap-8 font-instrument tracking-wider'>
            <Link to='/'>Home</Link>
            {/* <li>Service</li> */}
            <Link to='/setup'>Setup</Link>
            <Link to='/category'>Categories</Link>
          
          </ul>

        </div>

        <ul className='flex gap-10 list-none font-instrument items-center tracking-wider'>
          {/* <li className='hidden md:block'>Support</li> */}
          <Link to='/contactus' className='hidden md:block'>About & Policy</Link>
          <li
            className='flex gap-2 items-center relative'
            onMouseEnter={() => setDropdownVisible(true)}
            onMouseLeave={() => setDropdownVisible(false)}
          >
            <img src={assets.profile_pic} alt='' className='w-10 rounded-full border-2 border-white' />
            <img src={assets.dropdown} alt='dropdown icon' className='w-3 h-3' />
            {dropdownVisible && (
              <div className='absolute top-10 right-0 w-[120px] bg-black bg-opacity-85 z-[60] text-white p-3 rounded'>
                <ul className='flex flex-col gap-2'>
                  <Link to='/login'>Sign in</Link>
                  <Link to='/signup'>Sign up</Link>
                </ul>
              </div>
            )}
          </li>

          <li className='flex md:hidden'>
            <img src={assets.menu} alt='menu_icon' onClick={() => setShowMenu(true)} className='w-8 bg-white rounded-full p-1 cursor-pointer' />
          </li>
        </ul>
      </div>

      <div className={`fixed top-0 left-0 w-full h-full bg-black  z-50 p-6 transition-transform duration-300 ${showMenu ? 'translate-x-0' : '-translate-x-full'}`}>

        <div className='flex justify-between items-center mb-6'>
          <img src={assets.logo} alt='logo' className='w-12' />
          <button onClick={() => setShowMenu(false)} className='text-white text-xl'>X</button>
        </div>

        <ul className='flex flex-col gap-6 text-lg font-instrument bg-inherit text-center p-3'>
          <Link to="/" onClick={() => setShowMenu(false)}>Home</Link>
          {/* <li>Service</li> */}
          <Link to="/setup" onClick={() => setShowMenu(false)}>Setup</Link>
          <Link to='/category'>Categories</Link>
          <Link to='/contactus'>About & Policy</Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
