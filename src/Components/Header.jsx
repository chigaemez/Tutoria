import React, { useEffect, useRef, useState } from 'react'
import { RiMenu2Line } from 'react-icons/ri'
import { IoClose } from 'react-icons/io5'

const Header = () => {
  const [showMenu, SetShowMenu] = useState(false)
  const [navbar, setNavbar] = useState(false)

  const handleToggleMenu = () => {
    SetShowMenu(!showMenu)
  }

  const HandleBgChange = () => {
    if (window.scrollY >= 90) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', HandleBgChange)

  return (
    <div
      className={
        navbar
          ? 'flex items-center justify-between fixed top-0 duration-300 ease-in left-0 z-40 w-full bg-white shadow-xl  h-[90px] px-3 py-5 '
          : 'flex items-center justify-between fixed top-0 duration-300 ease-in left-0 z-40 w-full h-[90px] px-3 py-5 '
      }
    >
      {showMenu && (
        <div class='absolute z-[999] inset-0 flex lg:hidden h-screen bg-black opacity-70 duration-700 ease-in'></div>
      )}
      <div className='flex items-center justify-center'>
        <h1
          className={
            navbar
              ? 'text-3xl flex font-bold text-black  z-50 cursor-pointer duration-300 ease-in '
              : 'text-3xl flex font-bold text-white z-50 cursor-pointer duration-300 ease-in '
          }
        >
          Tutoria <span>.</span>
        </h1>
      </div>

      {/* DESKTOP VIEW */}

      <div className='hidden md:hidden lg:flex'>
        <div>
          <ul className='flex items-center gap-9'>
            <li
              className={
                navbar
                  ? 'text-lg cursor-pointer text-black hover:text-gray-600 font-medium duration-300 ease-in'
                  : 'text-lg cursor-pointer text-gray-300 hover:text-white font-medium duration-300 ease-in'
              }
            >
              Home
            </li>
            <li
              className={
                navbar
                  ? 'text-lg cursor-pointer text-black hover:text-gray-600 font-medium duration-300 ease-in'
                  : 'text-lg cursor-pointer text-gray-300 hover:text-white font-medium duration-300 ease-in'
              }
            >
              About
            </li>
            <li
              className={
                navbar
                  ? 'text-lg cursor-pointer text-black hover:text-gray-600 font-medium duration-300 ease-in'
                  : 'text-lg cursor-pointer text-gray-300 hover:text-white font-medium duration-300 ease-in'
              }
            >
              Services
            </li>
            <li
              className={
                navbar
                  ? 'text-lg cursor-pointer text-black hover:text-gray-600 font-medium duration-300 ease-in'
                  : 'text-lg cursor-pointer text-gray-300 hover:text-white font-medium duration-300 ease-in'
              }
            >
              Portfolios
            </li>
            <li
              className={
                navbar
                  ? 'text-lg cursor-pointer text-black hover:text-gray-600 font-medium duration-300 ease-in'
                  : 'text-lg cursor-pointer text-gray-300 hover:text-white font-medium duration-300 ease-in'
              }
            >
              Pricing
            </li>
            <li
              className={
                navbar
                  ? 'text-lg cursor-pointer text-black hover:text-gray-600 font-medium duration-300 ease-in'
                  : 'text-lg cursor-pointer text-gray-300 hover:text-white font-medium duration-300 ease-in'
              }
            >
              Team
            </li>
            <li
              className={
                navbar
                  ? 'text-lg cursor-pointer text-black hover:text-gray-600 font-medium duration-300 ease-in'
                  : 'text-lg cursor-pointer text-gray-300 hover:text-white font-medium duration-300 ease-in'
              }
            >
              Blog
            </li>
            <li
              className={
                navbar
                  ? 'text-lg cursor-pointer text-black hover:text-gray-600 font-medium duration-300 ease-in'
                  : 'text-lg cursor-pointer text-gray-300 hover:text-white font-medium duration-300 ease-in'
              }
            >
              Works
            </li>
            <li
              className={
                navbar
                  ? 'text-lg cursor-pointer text-black hover:text-gray-600 font-medium duration-300 ease-in'
                  : 'text-lg cursor-pointer text-gray-300 hover:text-white font-medium duration-300 ease-in'
              }
            >
              Contact
            </li>
          </ul>
        </div>
      </div>
      <div className='flex items-center justify-between gap-4'>
        <button className=' text-base bg-[#d84e4d] text-white z-50 px-6 py-2 rounded-md'>
          Get Started
        </button>

        <div
          className={
            navbar
              ? 'flex text-black lg:hidden text-2xl z-50 duration-300 ease-in '
              : 'flex text-white lg:hidden text-2xl z-50 duration-300 ease-in'
          }
          onClick={handleToggleMenu}
        >
          <RiMenu2Line />
        </div>
      </div>

      {/* MOBILE VIEW  */}

      {showMenu && (
        <div className='flex lg:hidden  justify-between duration-500 h-[90vh] ease-out z-[999] rounded-lg px-4  bg-white w-[95%] absolute top-[50px] py-4 bg-transparent  text-white'>
          <IoClose
            className=' z-[999] absolute  text-white top-[-40px] right-0 text-3xl '
            onClick={handleToggleMenu}
          />
          <div>
            <ul className='flex flex-col  items-start gap-6 '>
              <li className='text-lg cursor-pointer text-gray-700 hover:text-white font-medium'>
                Home
              </li>
              <li className='text-lg cursor-pointer text-gray-700 hover:text-white font-medium'>
                About
              </li>
              <li className='text-lg cursor-pointer text-gray-700 hover:text-white font-medium'>
                Services
              </li>
              <li className='text-lg cursor-pointer text-gray-700 hover:text-white font-medium'>
                Portfolios
              </li>
              <li className='text-lg cursor-pointer text-gray-700 hover:text-white font-medium'>
                Pricing
              </li>
              <li className='text-lg cursor-pointer text-gray-700 hover:text-white font-medium'>
                Team
              </li>
              <li className='text-lg cursor-pointer text-gray-700 hover:text-white font-medium'>
                Blog
              </li>
              <li className='text-lg cursor-pointer text-gray-700 hover:text-white font-medium'>
                Works
              </li>
              <li className='text-lg cursor-pointer text-gray-700 hover:text-white font-medium'>
                Contact
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header
