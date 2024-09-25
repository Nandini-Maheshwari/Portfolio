import React from 'react';
import { GoArrowRight } from "react-icons/go";

function ProjectCard({ image, altText, description, link }) {
  return (
    <div className='flex flex-col text-white items-center justify-around mb-20'>
      <img 
        src={image} 
        alt={altText} 
        className='w-4/5 max-h-90 rounded-2xl'
      />
      <p className='pt-4 pb-2 text-lg w-3/4'>
        <code className='text-yellow-300'>{description}</code>
      </p>
      <button className='rounded-3xl bg-neutral-700 hover:bg-neutral-500 py-1 px-3 sm:py-2 sm:px-4'>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className='flex items-center text-sm sm:text-base'
        >
          See Code <GoArrowRight className='pl-1 text-lg sm:text-xl'/>
        </a>
      </button>
    </div>
  );
}

export default ProjectCard;