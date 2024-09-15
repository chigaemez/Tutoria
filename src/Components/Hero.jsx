import React from 'react'
import { herobg } from '../assets/IMG/Index'

const Hero = () => {
  return (
    <div
      className='h-screen  bg-cover -z-10 space-y-4 bg-center bg-black bg-no-repeat  flex flex-col items-start justify-center'
      style={{ backgroundImage: `url(${herobg})` }}
    >
      <div className='absolute inset-0 bg-black opacity-50 '></div>
      <div className='flex flex-col z-[9] lg:ml-[7rem] px-5  lg:px-0' >
        <h1 className='text-5xl font-bold text-white' data-aos='fade-up' data-aos-delay="100">Welcome to My Website</h1>
        <p className='text-2xl  text-white py-2 ' data-aos='fade-up' data-aos-delay="300">
          This is a simple website created using React
        </p>
        <div data-aos='fade-up' data-aos-delay="400" className='flex relative w-full items-center justify-center'>
          <input
            type='text'
            className='py-3 w-full outline-none pl-3 pr-[7rem] rounded-md'
          />
          <button className='font-normal text-lg text-white bg-[#c53e3d] px-4 py-2 rounded-md absolute right-2 '>
            Subscibe
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
