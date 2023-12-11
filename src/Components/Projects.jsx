import React from 'react';
import demo from '../assets/useHub.png';
import { GoArrowRight } from "react-icons/go";

function Projects() {
  return (
    <div className='py-24'>
      <div className='flex flex-col text-white items-center justify-around'>
        <img src={demo} alt='demo' className='w-3/4 rounded-2xl'/>
        <p className='pt-4 pb-2 text-lg'><code className='text-yellow-300'>Website landing page demo</code>, designed and devloped using HTML and CSS.</p>
        <button className='rounded-3xl bg-neutral-700 hover:bg-neutral-500 py-2 px-4'>
          <a href="" className='flex'>See Code <GoArrowRight className='pl-1 pt-1 text-xl'/></a>
        </button>
      </div>
    </div>
  );
};

export default Projects;
