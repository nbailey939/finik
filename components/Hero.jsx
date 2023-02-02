import React from 'react';

import Link from 'next/link';

const Hero = ({ message }) => {
  return (

    <div className='flex items-center justify-center h-screen  bg-fixed bg-center bg-cover custom-img dark:custom-img2'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[0]' />

      <div className='items-center p-5 text-white z-[2] mt-[-10rem]'>
        <div className='flex item-center justify-center'>
          {/* <Image alt="" src='/../public/logo_full.png' width="200" height="230"/> */}
        </div><Link href="#solutions"><p className='relative max-w-[480px] text-center top-1/2 left-1/2 transform -translate-x-1/2 - translate-y-1/2  text-2xl font-semibold text-gray-100 hover:text-[#B38D24] duration-400 cursor-pointer'>{message}</p></Link>

      </div>

    </div>

  );
};

export default Hero;
