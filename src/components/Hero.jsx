"use client";
import Link from 'next/link';
import React from 'react';
import { motion } from 'motion/react';

const Hero = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse gap-10">
    <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full lg:w-1/2 flex justify-center"

                >
                     <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
                    className="max-w-xs md:max-w-sm rounded-lg shadow-2xl"
                    alt="Students learning together"
    />
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full lg:w-1/2 text-center lg:text-left"
                >
                    <div>
        <div className='text-center md:text-left'>

      <h1 className="text-4xl md:text-5xl font-bold">Upgrade Your Skills Today!</h1>
      <p className="py-6 text-lg font-normal">
        Learn from Industry Experts and join a community of 10,000+ students worldwide.
      </p>
      <Link href="/courses" className='btn btn-primary btn-lg px-8'>
      Explore Courses</Link>
        </div>
    </div>
                </motion.div>
   
    
  </div>
</div>
            
        </div>
    );
};

export default Hero;