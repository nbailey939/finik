
import React, { useEffect } from 'react';
import Image from 'next/image';
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);


  return (
    <section id="about" >
      <div className='flex justify-between items-center  h-screen ml-10 bg-fixed bg-center bg-cover'>

        <p data-aos="fade-up" className=' max-w-[480px] text-2xl font-bold m-10 pl-4'>Our team have more than 10 years of experience in RF Technologies. We are providing the best services and products to handle a challenging and sensitive situations</p>
        <div data-aos="fade-left" className=' invisible  h-screen w-screen relative lg:visible'><Image src="/../public/btst.webp" alt="bts" objectFit="contain" layout='fill' /></div>


      </div>

    </section>
  );
};

export default About;
