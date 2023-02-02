
import React, { useEffect } from 'react';
import Link from 'next/link';
import Aos from "aos";
import "aos/dist/aos.css";

const Solutions = ({ }) => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id="solutions" className="">

      <div className='grid items-center justify-center h-screen bg-fixed bg-center bg-cover '>
        <h3 data-aos="fade-up" className='text-center text-3xl font-bold'>Our Solutions</h3>
        <div className='p-5 text-grey z-[2] mt-[-10rem]'>
          <div className='relative left-1/2 transform -translate-x-1/2'>

          </div>
          <div data-aos="zoom-out" className="max-w-[800px] grid grid-cols-1 gap-10 md:grid-cols-3 dark:text-gray-400">
            <div className="justify-center p-6 bg-gray-100 dark:bg-gray-600 rounded-xl"><h1 className='font-bold text-xl dark:text-white'>Solution 1</h1><p>Lorem Ipsum is simply dummy text of the printing .</p><p className="text-[#B38D24]"><Link href="#">Read more...</Link></p></div>
            <div className="justify-center p-6 bg-gray-100 dark:bg-gray-600 rounded-xl"><h1 className='font-bold text-xl dark:text-white '>Solution 1</h1><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p><p className="text-[#B38D24]"><Link href="#">Read more...</Link></p></div>
            <div className="justify-center p-6 bg-gray-100  dark:bg-gray-600 rounded-xl"><h1 className='font-bold text-xl dark:text-white'>Solution 1</h1><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem I.</p><p className="text-[#B38D24]"><Link href="#">Read more...</Link></p></div>
            <div className="justify-center p-6 bg-gray-100  dark:bg-gray-600 rounded-xl"><h1 className='font-bold text-xl dark:text-white'>Solution 1</h1><p>Lorem Ipsum is simply dummy text of the printing a.</p><p className="text-[#B38D24]"><Link href="#">Read more...</Link></p></div>
            <div className="justify-center p-6 bg-gray-100  dark:bg-gray-600 rounded-xl"><h1 className='font-bold text-xl dark:text-white'>Solution 1</h1><p>Lorem Ipsum is simply dummy text of the printing a.</p><p className="text-[#B38D24]"><Link href="#">Read more...</Link></p></div>
            <div className="justify-center p-6 bg-gray-100 dark:bg-gray-600 rounded-xl"><h1 className='font-bold text-xl dark:text-white '>Solution 1</h1><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p><p className="text-[#B38D24]"><Link href="#">Read more...</Link></p></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
