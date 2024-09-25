import React from 'react';
import '../App.css';
import N1 from '../assets/N1.png';

const Home = () => {
  return (
    <div className='text-white my-24 px-6'>
      <div className='flex flex-col md:flex-row md:justify-between items-center md:items-start'>
        <div className='flex flex-col items-center md:items-start order-2 md:order-1 mt-8 md:mt-0'>
          <p className='text-3xl pb-4 text-center md:text-left'>Hello, I'm</p>
          <p className='text-4xl md:text-6xl tracking-wide py-2 pb-4 text-center md:text-left'>NANDINI MAHESHWARI</p>
          <section className="animation text-3xl md:text-4xl py-2 w-full md:w-auto">
            <div className="first"><div className='w-full py-5'>Web Development</div></div>
            <div className="second"><div className='w-full py-5'>DSA</div></div>
          </section>
          <p className='py-6 text-xl md:text-2xl text-center md:text-left'>I'm a problem solver who happens to code.</p>

          <div className='flex py-2'>
            <button className='rounded-3xl bg-neutral-700 hover:bg-neutral-500 py-1 px-4 mr-4'>
              <a href="mailto:nandinim1204@gmail.com" className='flex'>Email Me</a>
            </button>

            <button className='rounded-3xl bg-neutral-700 hover:bg-neutral-500 py-1 px-4'>
              <a href="#" className='flex'>Resume</a>
            </button>
          </div>
        </div>

        <div className='flex flex-col relative order-1 md:order-2 mb-8 md:mb-0'>
          <div className="w-64 h-64 md:w-80 md:h-80 relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#9E99ED] to-[#EFC1D8] overflow-hidden">
              <img
                src={N1}
                alt="N1"
                className="w-full h-full object-cover rounded-full"
                style={{ transform: 'scale(1.5)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;