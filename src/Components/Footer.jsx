import React from 'react';
import { Link } from 'react-router-dom';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div>
    <div className="text-black font-bold text-4xl pb-10">
      <span 
        className="text-[#9796f0]"
        style={{ 
          fontSize: '0.5em', /* Increase font size */
          lineHeight: '0.1', /* Adjust line height */
          borderBottomWidth: '5px', /* Adjust border thickness */
          borderBottomColor: '#9796f0', /* Adjust border color */
          padding: '0 0.5rem', /* Add some padding */
          borderBottom: '#9796f0'
        }}
      >
        //////////////////////////////////////////////////////////////////////////////////////////////////////////
      </span>
    
    </div>
    <nav className="flex justify-center items-center">
      {/* <Link to='/'> */}
      <ul className="flex justify-between">
        <a href="#" className='px-2'>
          <FontAwesomeIcon icon={faDiscord} className='text-white text-[22px]' />
        </a>
        <a href="#" className='px-2'>
          <FontAwesomeIcon icon={faTwitter}  className='text-white text-[22px]'/>
        </a>
        <a href="#" className='px-2'>
          <FontAwesomeIcon icon={faLinkedin}  className='text-white text-[22px]'/>
        </a>
      </ul>
      {/* </Link> */}
    </nav>

    </div>
  );  
};

export default Footer;
