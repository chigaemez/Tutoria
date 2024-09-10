import React, { useState } from 'react'
import { RiMenu2Line } from 'react-icons/ri'
import { IoClose } from 'react-icons/io5'

const Header = () => {
  const [showMenu, SetShowMenu] = useState(false)
  const [navbar, setNavbar] = useState(false)

  const handleToggleMenu = () => {
    SetShowMenu(!showMenu)
    console.log('toggle menu')
  }

  const HandleBgChange = () => {
    if (window.screenY >= 80) {
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
          ? 'flex items-center justify-between fixed top-0  w-full   px-3 py-5 '
          : 'flex items-center justify-between  absolute w-full   px-3 py-5 '
      }
    >
      {showMenu && (
        <div class='absolute z-[999] inset-0 flex lg:hidden h-screen bg-black opacity-70 duration-700 ease-in'></div>
      )}
      <div className='flex items-center justify-center'>
        <h1 className='text-3xl flex font-bold text-white z-50 cursor-pointer '>
          Tutoria <span>.</span>
        </h1>
      </div>

      {/* DESKTOP VIEW */}

      <div
        className={
          navbar
            ? `hidden  px-4 z-50 md:hidden lg:flex  py-4 ${active}   text-white`
            : 'hidden  px-4 z-50 md:hidden lg:flex  py-4 bg-transparent   text-white'
        }
      >
        <div>
          <ul className='flex items-center gap-9 '>
            <li className='text-lg cursor-pointer text-gray-300 hover:text-white font-medium'>
              Home
            </li>
            <li className='text-lg cursor-pointer text-gray-300 hover:text-white font-medium'>
              About
            </li>
            <li className='text-lg cursor-pointer text-gray-300 hover:text-white font-medium'>
              Services
            </li>
            <li className='text-lg cursor-pointer text-gray-300 hover:text-white font-medium'>
              Portfolios
            </li>
            <li className='text-lg cursor-pointer text-gray-300 hover:text-white font-medium'>
              Pricing
            </li>
            <li className='text-lg cursor-pointer text-gray-300 hover:text-white font-medium'>
              Team
            </li>
            <li className='text-lg cursor-pointer text-gray-300 hover:text-white font-medium'>
              Blog
            </li>
            <li className='text-lg cursor-pointer text-gray-300 hover:text-white font-medium'>
              Works
            </li>
            <li className='text-lg cursor-pointer text-gray-300 hover:text-white font-medium'>
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
          className='flex text-white lg:hidden text-2xl z-50  '
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
