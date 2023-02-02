import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Image from 'next/legacy/image';
import { useTheme } from "next-themes";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const darkmode = () => {
    setTheme(theme == "dark" ? "light" : "dark")
    window.location.reload();
  }


  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNav = () => {
    ``
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {

        if (theme == "dark") {
          setColor('#171a18');
          setTextColor('#ffffff');
        }
        else {
          setColor('#ffffff');
          setTextColor('#000000');
        }
      } else {
        setColor('transparent');
        setTextColor('#ffffff');
      }
      // if(theme=="dark"){
      //     setColor('#171a18');
      //     setTextColor('#ffffff');

      //   }
      //   else{
      //   setColor('#ffffff');
      //   setTextColor('#000000');
      //   }
    };
    window.addEventListener('scroll', changeColor);
    window.addEventListener('click', changeColor);

  }, [theme]);






  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className='fixed left-0 top-0 w-full z-10 ease-in duration-300 bg-white dark:dark:bg-[#171a18]'
    >
      {/* <div className ="flex items-center justify-center h-screen mb-5bg-fixed bg-center bg-cover logo-bg"></div> */}
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white hover:text-[#B38D24]'>
        <Link href='/'>

          <h1 style={{ color: `${textColor}` }} className='font-bold text-4xl'>

            <Image alt="" height={70} width={75} src='/../public/logo.webp' />
            <Image alt="" className="pb-30px mb-30px" height={40} width={110} src='/../public/finik.webp' />
          </h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className='hidden sm:flex font-semibold'>
          <li className='p-4 hover:text-[#B38D24]'>
            <Link href='/'>Home</Link>
          </li>
          <li className='p-4 hover:text-[#B38D24]'>
            <Link href='/#about'>About us</Link>
          </li>
          <li className='p-4 hover:text-[#B38D24]'>
            <Link href='/#solutions'>Solutions</Link>
          </li>
          <li className='p-4 hover:text-[#B38D24]'>
            <Link href='/#contact'>Contact</Link>
          </li>
          <li>

            <button
              id='darkmodebtn'
              aria-label="Toggle Dark Mode"
              type="button"
              className="w-10 h-10 p-3 rounded focus:outline-none"
              onClick={() => darkmode()}
            // {() => setTheme(theme == "dark" ? "light" : "dark") }
            // 
            >
              {mounted && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  className="w-4 h-4 text-yellow-500 dark:text-yellow-500"
                >
                  {theme === "dark" ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  )}
                </svg>
              )}
            </button>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className='block sm:hidden z-10'>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }
        >
          <ul>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/'>Home</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/#about'>Gallery</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/#solutions'>Solutions</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/#contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
