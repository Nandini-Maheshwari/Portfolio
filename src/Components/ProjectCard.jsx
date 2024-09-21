import React from 'react';
import { GoArrowRight } from "react-icons/go";

function ProjectCard({ image, altText, description, link }) {
  return (
    <div className='flex flex-col text-white items-center justify-around mb-20'>
      <img src={image} alt={altText} className='w-3/5 max-h-90 rounded-2xl'/>
      <p className='pt-4 pb-2 text-lg w-3/4'>
        <code className='text-yellow-300'>{description}</code>
      </p>
      <button className='rounded-3xl bg-neutral-700 hover:bg-neutral-500 py-2 px-4'>
        <a href={link} target="_blank" rel="noopener noreferrer" className='flex'>
          See Code <GoArrowRight className='pl-1 pt-1 text-xl'/>
        </a>
      </button>
    </div>
  );
}

export default ProjectCard;