import React from 'react'
import { features, features1, features3 } from '../assets/IMG/Index'

const Features = () => {
  return (
    <div className='w-full flex-col px-5  flex items-center justify-center '>
      <div className='flex flex-col my-16 w-full items-center justify-center'>
        <div className='flex items-center justify-center gap-4  w-full '>
          <hr className='w-[50px] mt-2 h-[3px] bg-[#d84e4d]' />
          <h1 className='text-4xl font-bold'>Features </h1>
          <hr className='w-[50px] mt-2 h-[3px] bg-[#d84e4d] ' />
        </div>
        <p className='text-xl mt-5 font-normal text-center'>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      <div className='flex flex-col lg:flex-row items-center justify-between gap-8 lg:px-[120px]'>
        <div className='flex flex-col w-full lg:w-[40%]'>
          <h1 className='text-3xl font-bold my-5'>Corporis temporibus maiores provident</h1>
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident.
          </p>
          <button className='text-base bg-[#d84e4d] w-[150px] shadow-xl mt-8 text-white z-20 px-6 py-2 rounded-md'>
            Get Started
          </button>
        </div>

        <div className='flex lg:w-[50%] relative px-4' data-aos='zoom-out' >
          <img
            src={features1}
            alt=''
            className='lg:w-[600px]  lg:h-[400px] w-[90%] ml-16 -z-10 bg-white p-2 shadow-xl'
          />
          <img
            src={features}
            alt=''
            className='lg:w-[600px] lg:h-[400px] w-[90%] z-10 absolute bg-white p-2 shadow-xl mt-[100px] lg:left-[-100px] left-[-10px]'
          />
        </div>
      </div>

      <div className='flex lg:flex-row-reverse flex-col  mt-[250px]  items-center gap-20 justify-between  lg:px-[120px]'>
        <div className='flex flex-col lg:w-[50%] w-[95%]'>
          <h1 className='text-3xl font-bold my-5'>Corporis temporibus maiores provident</h1>
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident.
          </p>
          <button className='text-base bg-[#d84e4d] w-[150px] shadow-xl mt-8 text-white z-20 px-6 py-2 rounded-md'>
            Get Started
          </button>
        </div>

        <div className='flex lg:w-[50%] items-center justify-center  relative ' data-aos='zoom-out-right'>
          <img
            src={features3}
            alt=''
            className='lg:w-[700px] w-[100%]  lg:h-[500px] mt-[30px] lg:mt-0 -z-10 bg-white p-2 shadow-xl'
          />
         
        </div>
      </div>
    </div>
  )
}

export default Features
