import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

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
        <a href="https://www.instagram.com/nandini_maheshwari_04/" className='px-2'>
          <FontAwesomeIcon icon={faInstagram} className='text-white text-[22px]'/>
        </a>
        <a href="https://twitter.com/Nandini_M04" className='px-2'>
          <FontAwesomeIcon icon={faTwitter}  className='text-white text-[22px]'/>
        </a>
        <a href="https://www.linkedin.com/in/nandini-maheshwari-2a537b1b8/" className='px-2'>
          <FontAwesomeIcon icon={faLinkedin}  className='text-white text-[22px]'/>
        </a>
      </ul>
      {/* </Link> */}
    </nav>

    </div>
  );  
};

export default Footer;
