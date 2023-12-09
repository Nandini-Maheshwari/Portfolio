import React from 'react';
// import { Link } from 'react-router-dom';
import NM from '../assets/NM.jpg';
import { FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiLeetcode } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaUnity } from "react-icons/fa6";

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
            Express.js, React.js, and Node.js. Alongside, I indulge in <code className='text-[#9796F0]'>AR and VR </code> 
            development as a side interest, exploring the creative possibilities.
          </p>
          <p className='text-justify'>
            I have a knack for competitive programming and am dedicatedly improving my skills in 
            Data Structures and Algorithms <code className='text-[#9796F0]'>(DSA) </code> to tackle complex problem-solving, leveraging the 
            power and efficiency of <code className='text-[#9796F0]'>C++ </code>for implementation.
          </p>
          {/* Let's connect and explore the world of tech together! */}
          <div class="flex text-white pb-12 pt-8">

            <a href="https://github.com/Nandini-Maheshwari">
              <div class="bg-neutral-800 mr-12 rounded-lg hover:bg-neutral-600">
                <div class="px-4 py-2 flex justify-between">
                  <p class="text-lg font-bold text-[#9796F0] pr-12">GitHub</p>
                  <FaGithub className='text-2xl text-'/>
                </div>
              </div>
            </a>
            
            <a href="https://leetcode.com/Nandini-Maheshwari/" className='px-2'>
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
        <div className='flex justify-between pr-4 pb-12'>

          <div className="relative">
            <div className="group py-1">
              <FaHtml5 className="text-white text-3xl transition-colors duration-300 hover:text-[#9796F0] cursor-pointer" />
              <div className="absolute z-10 top-full left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs py-1 px-2 rounded-md whitespace-nowrap transition-opacity duration-300">
                HTML
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="group py-1">
              <FaCss3Alt className="text-white text-3xl transition-colors duration-300 hover:text-[#9796F0]" />
              <div className="absolute z-10 top-full left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs py-1 px-2 rounded-md whitespace-nowrap transition-opacity duration-300">
                CSS
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="group py-1">
              <SiTailwindcss className="text-white text-3xl transition-colors duration-300 hover:text-[#9796F0]" />
              <div className="absolute z-10 top-full left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs py-1 px-2 rounded-md whitespace-nowrap transition-opacity duration-300">
                Tailwind
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="group py-1">
              <IoLogoJavascript className="text-white text-3xl transition-colors duration-300 hover:text-[#9796F0]" />
              <div className="absolute z-10 top-full left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs py-1 px-2 rounded-md whitespace-nowrap transition-opacity duration-300">
                JavaScript
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="group py-1">
              <FaReact className="text-white text-3xl transition-colors duration-300 hover:text-[#9796F0]" />
              <div className="absolute z-10 top-full left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs py-1 px-2 rounded-md whitespace-nowrap transition-opacity duration-300">
                React.js
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="group py-1">
              <FaNodeJs className="text-white text-3xl transition-colors duration-300 hover:text-[#9796F0]" />
              <div className="absolute z-10 top-full left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs py-1 px-2 rounded-md whitespace-nowrap transition-opacity duration-300">
                Node.js
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="group py-1">
              <SiMongodb className="text-white text-3xl transition-colors duration-300 hover:text-[#9796F0]" />
              <div className="absolute z-10 top-full left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs py-1 px-2 rounded-md whitespace-nowrap transition-opacity duration-300">
                MongoDB
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="group py-1">
              <SiExpress className="text-white text-3xl transition-colors duration-300 hover:text-[#9796F0]" />
              <div className="absolute z-10 top-full left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs py-1 px-2 rounded-md whitespace-nowrap transition-opacity duration-300">
                Express.js
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="group py-1">
              <FaUnity className="text-white text-3xl transition-colors duration-300 hover:text-[#9796F0]" /> 
              <div className="absolute z-10 top-full left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs py-1 px-2 rounded-md whitespace-nowrap transition-opacity duration-300">
                Unity
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="group py-1">
              <FaGitAlt className="text-white text-3xl transition-colors duration-300 hover:text-[#9796F0]" />
              <div className="absolute z-10 top-full left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs py-1 px-2 rounded-md whitespace-nowrap transition-opacity duration-300">
                Git
              </div>
            </div>
          </div>
          
          
          
          
          
        </div>
      </div>

    </div>
  );
};

export default About;
