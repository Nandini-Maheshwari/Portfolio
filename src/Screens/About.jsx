import React from 'react';
import IconWithTooltip from '../Components/IconWithToolTip.jsx';
import NM from '../assets/NM.jpg';
import { FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiLeetcode, SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaUnity } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";

const About = () => {
  return (
    <div className="px-4 md:px-0">
      <div className='flex flex-col md:flex-row md:justify-between py-12'>
        <div className='flex items-center md:items-start flex-col text-white justify-start w-full md:w-2/3 md:pr-10 pt-20'>
          <p className='text-center md:text-justify text-6xl pb-6'>Hey</p>
          <p className='text-center md:text-justify text-2xl pb-4'>Nandini this side.</p>
          <p className='text-center md:text-justify pb-3'>
            I'm  a Computer Science Engineering student at KIET Group Of Institutions, 
            Ghaziabad. I specialize in <code className='text-[#9796F0]'>MERN Stack </code> 
            development and find joy in crafting web applications using MongoDB, 
            Express.js, React.js, <code className='text-[#9796F0]'>Next.js</code> and Node.js. 
            Alongside, I indulge in <code className='text-[#9796F0]'>AR and VR </code> 
            development as a side interest, exploring the creative possibilities.
          </p>
          <p className='text-center md:text-justify'>
            I have a knack for competitive programming and am dedicatedly improving my skills in 
            Data Structures and Algorithms <code className='text-[#9796F0]'>(DSA) </code> to tackle complex problem-solving, leveraging the 
            power and efficiency of <code className='text-[#9796F0]'>C++ </code>for implementation.
          </p>

          <div className="flex flex-col md:flex-row text-white pb-12 pt-8 items-center md:items-start">
            <a href="https://github.com/Nandini-Maheshwari" target="_blank" rel="noopener noreferrer" className="mb-4 md:mb-0 md:mr-12">
              <div className="bg-neutral-800 rounded-lg hover:bg-neutral-600">
                <div className="px-4 py-2 flex justify-between">
                  <p className="text-lg font-bold text-[#9796F0] pr-12">GitHub</p>
                  <FaGithub className='text-2xl'/>
                </div>
              </div>
            </a>
            
            <a href="https://leetcode.com/Nandini-Maheshwari/" target="_blank" rel="noopener noreferrer" className="md:px-2">
              <div className="bg-neutral-800 rounded-lg hover:bg-neutral-600">
                <div className="px-4 py-2 flex justify-between">
                  <p className="text-lg font-bold text-[#9796F0] pr-9">Leetcode</p>
                  <SiLeetcode className='text-2xl'/>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className='w-1/3 pt-14 pb-12 hidden md:block'>
          <img src={NM} alt="NM"/>
        </div>
      </div>

      <div className='mt-8 pb-4'>
        <p className='text-center md:text-justify text-6xl text-white pb-8'>My Skills</p>
        <div className='flex flex-wrap justify-center md:justify-between pr-4 pb-4'>
          <IconWithTooltip IconComponent={FaHtml5} tooltipText="HTML" />
          <IconWithTooltip IconComponent={FaCss3Alt} tooltipText="CSS" />
          <IconWithTooltip IconComponent={SiTailwindcss} tooltipText="Tailwind" />
          <IconWithTooltip IconComponent={IoLogoJavascript} tooltipText="JavaScript" />
          <IconWithTooltip IconComponent={SiTypescript} tooltipText="TypeScript" />
          <IconWithTooltip IconComponent={FaReact} tooltipText="React.js" />
          <IconWithTooltip IconComponent={TbBrandNextjs} tooltipText="Next.js" />
          <IconWithTooltip IconComponent={FaNodeJs} tooltipText="Node.js" />
          <IconWithTooltip IconComponent={SiMongodb} tooltipText="MongoDB" />
          <IconWithTooltip IconComponent={SiExpress} tooltipText="Express.js" />
          <IconWithTooltip IconComponent={FaUnity} tooltipText="Unity" />
          <IconWithTooltip IconComponent={FaGitAlt} tooltipText="Git" />
        </div>
      </div>
    </div>
  );
};

export default About;