import React from 'react'
import { FaCity } from 'react-icons/fa'
import {
  client1,
  client2,
  client3,
  client4,
  client5,
  client6
} from '../assets/IMG/Index'
import State from './About/State'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className=' flex flex-wrap gap-[5rem]  w-full items-center justify-center px-4 py-8'>
        <div className='flex   items-center  justify-center my-auto z-50  '>
          <img src={client1} className='  w-[120px] grayscale opacity-35 hover:grayscale-0 hover:opacity-100 cursor-pointer duration-500 ease-out' alt='' />
        </div>
        <div className='flex   items-center  justify-center my-auto z-50  '>
          <img src={client2} className='  w-[120px] grayscale opacity-35 hover:grayscale-0 hover:opacity-100 cursor-pointer duration-500 ease-out' alt='' />
        </div>
        <div className='flex   items-center  justify-center my-auto z-50  '>
          <img src={client3} className='  w-[120px] grayscale opacity-35 hover:grayscale-0 hover:opacity-100 cursor-pointer duration-500 ease-out' alt='' />
        </div>
        <div className='flex   items-center  justify-center my-auto z-50  '>
          <img src={client4} className='  w-[120px] grayscale opacity-35 hover:grayscale-0 hover:opacity-100 cursor-pointer duration-500 ease-out' alt='' />
        </div>
        <div className='flex   items-center  justify-center my-auto z-50  '>
          <img src={client5} className='  w-[120px] grayscale opacity-35 hover:grayscale-0 hover:opacity-100 cursor-pointer duration-500 ease-out' alt='' />
        </div>
        <div className='flex   items-center  justify-center my-auto z-50  '>
          <img src={client6} className='  w-[120px] grayscale opacity-35 hover:grayscale-0 hover:opacity-100 cursor-pointer duration-500 ease-out' alt='' />
        </div>
      </div>

      <div className='flex flex-col md:flex-col lg:flex-row  bg-gray-100  w-full py-6  items-center justify-center  '>
        <div className='flex flex-col lg:w-[35%] w-[80%] justify-self-center self-center'>
          <div className='text-lg text-red-500 bg-red-100 px-3 py-1 w-[40%] text-center rounded'>
            About Us
          </div>
          <p className='text-3xl  font-semibold'>
            We are free to criticize things..
          </p>
          <p className='text-lg'>
            Let them be themselves. What we lead at the time prevents pains and
            other things the most. For there is less and less rejection here.
            Said which since because the elders by right. Indeed, there is no
            one who is to assume pleasure when the times are released.
          </p>
        </div>
        <div className='grid w-[80%] lg:w-[50%] grid-cols-1 md:grid-cols-2  lg:grid-cols-2 lg:ml-10  gap-6   '>
          <div
            data-aos='fade-up'
            data-aos-delay='100'
            className='flex flex-col mt-[55px] p-10  w-[100%] bg-white h-[40vh] group rounded-md'
          >
            <div className='flex  bg-red-100 items-center justify-center group group-hover:bg-red-600 duration-300 ease-in h-[40%] w-[30%] rounded-full'>
              <FaCity className='text-3xl text-red-500 group-hover:text-white duration-300 ease-in' />
            </div>
            <div className='flex flex-col my-5'>
              <h1 className='text-xl font-semibold'>His Providence</h1>
              <p className=''>
                The great repulse, or any duties here, accusers of pain itself,
                all pain pleasure
              </p>
            </div>
          </div>
          <div
            data-aos='fade-up'
            data-aos-delay='100'
            className='flex flex-col p-10  w-[100%] bg-white h-[40vh] group rounded-md'
          >
            <div className='flex bg-red-100 items-center justify-center group group-hover:bg-red-600 duration-300 ease-in h-[40%] w-[30%] rounded-full'>
              <FaCity className='text-3xl text-red-500 group-hover:text-white duration-300 ease-in' />
            </div>
            <div className='flex flex-col my-5'>
              <h1 className='text-xl font-semibold'>I will open things up</h1>
              <p className=''>
                However, it is often difficult to make a mistake. Because things
                are often the pleasures of things
              </p>
            </div>
          </div>
          <div
            data-aos='fade-up'
            data-aos-delay='300'
            className='flex flex-col  p-10  w-[100%] bg-white h-[40vh] group rounded-md'
          >
            <div className='flex  bg-red-100 items-center justify-center group group-hover:bg-red-600 duration-300 ease-in h-[40%] w-[30%] rounded-full'>
              <FaCity className='text-3xl text-red-500 group-hover:text-white duration-300 ease-in' />
            </div>
            <div className='flex flex-col my-5'>
              <h1 className='text-xl font-semibold'>I will come all</h1>
              <p className=''>
                But it is everyone's fault for enduring the troubles. Rejections
                that we can. What is the consequence of corruption?
              </p>
            </div>
          </div>
          <div
            data-aos='fade-up'
            data-aos-delay='300'
            className='flex flex-col p-10  lg:mt-[-55px] w-[100%] bg-white h-[40vh] group rounded-md'
          >
            <div className='flex bg-red-100 items-center justify-center group group-hover:bg-red-600 duration-300 ease-in h-[40%] w-[30%] rounded-full'>
              <FaCity className='text-3xl text-red-500 group-hover:text-white duration-300 ease-in' />
            </div>
            <div className='flex flex-col my-5'>
              <h1 className='text-xl font-semibold'>Delares wisely</h1>
              <p className=''>
                Let pain and pleasure be less of our power. By rejecting the
                convenience of choosing, all indeed are to be learned
              </p>
            </div>
          </div>
        </div>
      </div>

      <State />
    </div>
  )
}

export default About
