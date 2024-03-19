import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../App.css';

const Footer = () => {
  return (
    <div>
      
    <hr className="slash-1 my-20 w-full"/>

    <nav className="flex justify-center">
      {/* <Link to='/'> */}
      <ul className="flex justify-center items-center">
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
