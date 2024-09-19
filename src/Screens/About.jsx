import React from 'react';
import IconWithTooltip from '../Components/IconWithToolTip.jsx';
// import { Link } from 'react-router-dom';
import NM from '../assets/NM.jpg';
import { FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiLeetcode } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaUnity } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";

const About = () => {
  return (
    <div>
      <div className='flex justify-between py-12'>
        <div className='flex items-start flex-col text-white justify-start w-2/3 pr-10 pt-20'>
          <p className='text-justify text-6xl pb-6'>Hey</p>
          <p className='text-justify text-2xl pb-4'>Nandini this side.</p>
          <p className='text-justify pb-3'>
            I'm  a Computer Science Engineering student at KIET Group Of Institutions, 
            Ghaziabad. I specialize in <code className='text-[#9796F0]'>MERN Stack </code> 
            development and find joy in crafting web applications using MongoDB, 
            Express.js, React.js, <code className='text-[#9796F0]'>Next.js</code> and Node.js. 
            Alongside, I indulge in <code className='text-[#9796F0]'>AR and VR </code> 
            development as a side interest, exploring the creative possibilities.
          </p>
          <p className='text-justify'>
            I have a knack for competitive programming and am dedicatedly improving my skills in 
            Data Structures and Algorithms <code className='text-[#9796F0]'>(DSA) </code> to tackle complex problem-solving, leveraging the 
            power and efficiency of <code className='text-[#9796F0]'>C++ </code>for implementation.
          </p>
          {/* Let's connect and explore the world of tech together! */}

          <div class="flex text-white pb-12 pt-8">

            <a href="https://github.com/Nandini-Maheshwari" target="_blank" rel="noopener noreferrer">
              <div class="bg-neutral-800 mr-12 rounded-lg hover:bg-neutral-600">
                <div class="px-4 py-2 flex justify-between">
                  <p class="text-lg font-bold text-[#9796F0] pr-12">GitHub</p>
                  <FaGithub className='text-2xl text-'/>
                </div>
              </div>
            </a>
            
            <a href="https://leetcode.com/Nandini-Maheshwari/" className='px-2' target="_blank" rel="noopener noreferrer">
              <div class="bg-neutral-800 rounded-lg hover:bg-neutral-600">
                <div class="px-4 py-2 flex justify-between">
                  <p class="text-lg font-bold text-[#9796F0] pr-9">Leetcode</p>
                  <SiLeetcode className='text-2xl'/>
                </div>
              </div>
            </a>

          </div>

        </div>
        <div className='w-1/3 pt-14 pb-12'>
          <img src={NM} alt="NM"/>
        </div>
      </div>

      <div className='mt-8 pb-4'>
        <p className='text-justify text-6xl text-white pb-8 '>My Skills</p>
        <div className='flex justify-between pr-4 pb-4'>

          <IconWithTooltip IconComponent={FaHtml5} tooltipText="HTML" />
          <IconWithTooltip IconComponent={FaCss3Alt} tooltipText="CSS" />
          <IconWithTooltip IconComponent={SiTailwindcss} tooltipText="Tailwind" />
          <IconWithTooltip IconComponent={IoLogoJavascript} tooltipText="JavaScript" />
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
