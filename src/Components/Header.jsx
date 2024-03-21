import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div className="text-white">
      <div className='flex justify-between py-8'>
        <Link to='/'>
          <FontAwesomeIcon icon={faCode} className="text-3xl" style={{color:'#9796f0'}} />
        </Link>  
        <div>
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