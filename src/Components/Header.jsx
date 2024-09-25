import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Header() {

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="text-white">
      <div className='flex justify-between py-8'>
        <Link to='/'>
          <FontAwesomeIcon icon={faCode} className="text-3xl" style={{color:'#9796f0'}} />
        </Link>  

        <div className="md:hidden flex items-center">
          <FontAwesomeIcon
            icon={menuOpen ? faTimes : faBars}
            className="text-3xl cursor-pointer"
            onClick={toggleMenu}
            style={{ color: '#9796f0' }}
          />
        </div>

        <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col space-y-2 mt-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:bg-neutral-700 transition ease-in duration-300 delay-100 rounded mx-1
                  px-3 py-1 
                  ${isActive ? 'border-2 border-[#9796f0] rounded' : ''}`
                }
                onClick={toggleMenu}
              >
                <code>&lt;Home/&gt;</code>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/About"
                className={({ isActive }) =>
                  `hover:bg-neutral-700 transition ease-in duration-300 delay-100 rounded mx-1
                  px-3 py-1 
                  ${isActive ? 'border-2 border-[#9796f0] rounded' : ''}`
                }
                onClick={toggleMenu}
              >
                <code>&lt;About/&gt;</code>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Projects"
                className={({ isActive }) =>
                  `hover:bg-neutral-700 transition ease-in duration-300 delay-100 rounded mx-1
                  px-3 py-1 
                  ${isActive ? 'border-2 border-[#9796f0] rounded' : ''}`
                }
                onClick={toggleMenu}
              >
                <code>&lt;Projects/&gt;</code>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Experiences"
                className={({ isActive }) =>
                  `hover:bg-neutral-700 transition ease-in duration-300 delay-100 rounded mx-1
                  px-3 py-1 
                  ${isActive ? 'border-2 border-[#9796f0] rounded' : ''}`
                }
                onClick={toggleMenu}
              >
                <code>&lt;Experiences/&gt;</code>
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex">
          <ul className='flex ml-auto'>
            <li>
              <NavLink
                to="/"
                // className="hover:bg-neutral-700 transition ease-in duration-300 delay-100 rounded mx-1
                //   px-3 py-1"
                  className={({ isActive }) =>
                  `hover:bg-neutral-700 transition ease-in duration-300 delay-100 rounded mx-1
                  px-3 py-1 
                  ${isActive ? "border-2 border-[#9796f0] rounded" : ""}`
                }
              >
                <code>&lt;Home/&gt;</code>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/About"
                // className="hover:bg-neutral-700 transition ease-in duration-300 delay-100 rounded mx-1
                //   px-3 py-1" 
                className={({ isActive }) =>
                  `hover:bg-neutral-700 transition ease-in duration-300 delay-100 rounded mx-1
                  px-3 py-1 
                  ${isActive ? "border-2 border-[#9796f0] rounded" : ""}`
                }
              >
                <code>&lt;About/&gt;</code>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Projects"
                // className="hover:bg-neutral-700 transition ease-in duration-300 delay-100 rounded mx-1
                //   px-3 py-1"
                className={({ isActive }) =>
                  `hover:bg-neutral-700 transition ease-in duration-300 delay-100 rounded mx-1
                  px-3 py-1 
                  ${isActive ? "border-2 border-[#9796f0] rounded" : ""}`
                }
              >
                <code>&lt;Projects/&gt;</code>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Experiences"
                // className="hover:bg-neutral-700 transition ease-in duration-300 delay-100 rounded mx-1
                //   px-3 py-1"
                className={({ isActive }) =>
                  `hover:bg-neutral-700 transition ease-in duration-300 delay-100 rounded mx-1
                  px-3 py-1 
                  ${isActive ? "border-2 border-[#9796f0] rounded" : ""}`
                }
              >
                <code>&lt;Experiences/&gt;</code>
              </NavLink>
            </li>
          </ul>
        </div>
        
      </div>
      <div>
        <hr className="border-t border-white w-full" style={{ borderColor: 'white', height: '1px' }} />
      </div>
    </div>
  );
}

export default Header;