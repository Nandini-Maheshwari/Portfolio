import React from 'react';
import '../App.css'; // Import the App.css file
import N1 from '../assets/N1.png';

const Home = () => {
  return (
    <div className='text-white my-24 px-6'>
      <div className='flex justify-between'>
        <div className='flex flex-col items-start'>
          <p className='text-3xl pb-4'>Hello, I'm</p>
          <p className='text-6xl tracking-wide py-2 pb-4'>NANDINI MAHESHWARI</p>
          <section className="animation text-4xl py-2">
            <div className="first"><div className='w-full py-5'>Web Devlopment</div></div>
            <div className="second"><div className='w-full py-5'>DSA</div></div>
            {/* <div className="third"><div className='w-full py-5'>AR VR</div></div> */}
          </section>
          <p className='py-6 text-2xl'>I'm a problem solver who happens to code.</p>

          <div className='flex py-2'>
            <button className='rounded-3xl bg-neutral-700 hover:bg-neutral-500 py-1 px-4 mr-4'>
              <a href="mailto:nandinim1204@gmail.com" className='flex'>Email Me</a>
            </button>

            <button className='rounded-3xl bg-neutral-700 hover:bg-neutral-500 py-1  px-4'>
              <a href="#" className='flex'>Resume</a>
            </button>
          </div>
        </div>

        <div></div>

        <div className='flex flex-col relative'>
          <div className="w-80 h-80 relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#9E99ED] to-[#EFC1D8] overflow-hidden">
              <img
                src={N1}
                alt="N1"
                className="w-full h-full object-cover rounded-full"
                style={{ transform: 'scale(1.5)' }} // Adjust the scale as needed
              />
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Home;
