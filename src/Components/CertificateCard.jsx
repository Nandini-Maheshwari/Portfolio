import React from 'react';
import { MdArrowOutward } from "react-icons/md";

function CertificateCard({ title, issuedDate, link, linkText }) {
  return (
    <div className='flex flex-col items-center sm:items-start py-4 rounded-2xl px-4 sm:px-6 bg-neutral-800 hover:bg-neutral-700 transition duration-100 my-5 w-full sm:w-auto'>
      <p className='text-[#9796F0] font-bold pb-1 text-center sm:text-left'>{title}</p>
      <p className='text-white pb-6 sm:pb-8 text-center sm:text-left'>Issued {issuedDate}</p>
      <button className='rounded-3xl py-1 px-2 sm:px-3 text-white border border-white hover:bg-neutral-800 text-sm sm:text-base'>
        <a 
            href={link} 
            className='flex items-center'
            target="_blank" 
            rel="noopener noreferrer"
        >
            {linkText} 
            <MdArrowOutward className='pl-1 text-lg sm:text-xl'/>
        </a>
      </button>
    </div>
  );
}

export default CertificateCard;