import React from 'react';
import { MdArrowOutward } from "react-icons/md";

function CertificateCard({ title, issuedDate, link, linkText }) {
  return (
    <div className='flex flex-col items-start py-4 rounded-2xl px-6 bg-neutral-800 hover:bg-neutral-700 transition duration-100 my-5'>
      <p className='text-[#9796F0] font-bold pb-1'>{title}</p>
      <p className='text-white pb-8'>Issued {issuedDate}</p>
      <button className='rounded-3xl py-1 px-3 text-white border border-white hover:bg-neutral-800'>
        <a 
            href={link} 
            className='flex'
            target="_blank" 
            rel="noopener noreferrer"
        >
            {linkText} 
            <MdArrowOutward className='pl-1 pt-1 text-xl'/>
        </a>
      </button>
    </div>
  );
}

export default CertificateCard;