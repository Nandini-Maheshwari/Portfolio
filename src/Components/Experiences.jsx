import React from 'react';
import { MdArrowOutward } from "react-icons/md";

function Experiences() {
  return (
    <div className='py-16'>
      <p className='text-justify text-4xl text-white pb-6'>My Certificates & Badges</p>

      <div className='flex flex-col items-start py-4 rounded-2xl px-6  bg-neutral-800 hover:bg-neutral-700 transition duration-100 my-5'>
        <p className='text-[#9796F0] font-bold pb-1'>Azure DevDay Cloud Native Tour</p>
        <p className='text-white pb-8'>Issued March'24</p>
        <button className='rounded-3xl py-1 px-3 text-white border border-white hover:bg-neutral-800'>
          <a href='https://reskilll.com/certificate/azure/cloudnativetour/e3cc6e82b8' className='flex'>View Certificate <MdArrowOutward className='pl-1 pt-1 text-xl'/></a>
        </button>
      </div>

      <div className='flex flex-col items-start py-4 rounded-2xl px-6  bg-neutral-800 hover:bg-neutral-700 transition duration-100 my-5'>
        <p className='text-[#9796F0] font-bold pb-1'>Postman API Fundamentals Student Expert</p>
        <p className='text-white pb-8'>Issued Feb'24</p>
        <button className='rounded-3xl py-1 px-3 text-white border border-white hover:bg-neutral-800'>
          <a href='https://badgr.com/public/assertions/vdoNl5zuQCS4BXMNAJ6S1A?identity__email=nandinim1204@gmail.com' className='flex'>View Badge <MdArrowOutward className='pl-1 pt-1 text-xl'/></a>
        </button>
      </div>

      <div className='flex flex-col items-start py-4 rounded-2xl px-6  bg-neutral-800 hover:bg-neutral-700 transition duration-100 my-5'>
        <p className='text-[#9796F0] font-bold pb-1'>Social Summer Of Code S2 Participant</p>
        <p className='text-white pb-8'>Issued May'23</p>
        <button className='rounded-3xl py-1 px-3 text-white border border-white hover:bg-neutral-800'>
          <a href='https://verification.givemycertificate.com/v/0a8cc3ea-bf51-4d13-be84-c09ff4c1b0a3' className='flex'>View Certificate <MdArrowOutward className='pl-1 pt-1 text-xl'/></a>
        </button>
      </div>

      <div className='flex flex-col items-start py-4 rounded-2xl px-6  bg-neutral-800 hover:bg-neutral-700 transition duration-100 my-5'>
        <p className='text-[#9796F0] font-bold pb-1'>Master C++ Programming From Beginner To Advance - C++ Course</p>
        <p className='text-white pb-8'>Issued Sept'22</p>
        <button className='rounded-3xl py-1 px-3 text-white border border-white hover:bg-neutral-800'>
          <a href='https://www.udemy.com/certificate/UC-b25d0919-2b4e-40dd-9115-82722d29954f/' className='flex'>View Certificate <MdArrowOutward className='pl-1 pt-1 text-xl'/></a>
        </button>
      </div>


    </div>
  );
}

export default Experiences;