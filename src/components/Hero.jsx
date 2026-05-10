import Link from 'next/link';
import React from 'react';

const Hero = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse gap-10">
    <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
                    className="max-w-xs md:max-w-sm rounded-lg shadow-2xl"
                    alt="Students learning together"
    />
    <div>
        <div className='text-center md:text-left'>

      <h1 className="text-4xl md:text-5xl font-bold">Upgrade Your Skills Today!</h1>
      <p className="py-6 text-lg">
        Learn from Industry Experts and join a community of 10,000+ students worldwide.
      </p>
      <Link href="/courses" className='btn btn-primary btn-lg px-8'>
      Explore Courses</Link>
        </div>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Hero;