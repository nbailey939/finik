import Head from 'next/head';

import Hero from '../components/Hero';
import Contact from '../components/Contact';
import About from '../components/About';
import Aos from "aos";
import "aos/dist/aos.css";
import React, {useEffect } from 'react';
import Solutions from '../components/Solutions';



export default function Home() {

  useEffect(() =>{
    Aos.init({duration:2500,
  });
  },[]);

  return (
    <div className="">
      <Head>
        <title>Finik Technology</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/logo.ico' />
      </Head>
        
          
              <div data-aos="zoom-out">
              <Hero message="Delievering the best solutions for security with cutting-edge technologies" />
              </div>
      
              <About />
     
              
           
              
              <Solutions /> 
              
              <div data-aos="zoom-out" >
              <Contact />
              </div>
           
 
      
        

        
      
    </div>
  );
}