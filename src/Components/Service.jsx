import React from 'react'
import { BsBriefcase } from 'react-icons/bs'
import { AiOutlineSchedule } from 'react-icons/ai'
import { BsBarChart } from 'react-icons/bs'
import { BsBinoculars } from 'react-icons/bs'
import { WiDaySunny } from 'react-icons/wi'
import { IoCalendarOutline } from 'react-icons/io5'

const Service = () => {
  return (
    <div className='w-full flex-col px-5  flex items-center justify-center  '>
      <div className='flex flex-col my-16 w-full items-center justify-center'>
        <div className='flex items-center justify-center gap-4  w-full '>
          <hr className='w-[50px] mt-2 h-[3px] bg-[#d84e4d]' />
          <h1 className='text-4xl font-bold'>Service </h1>
          <hr className='w-[50px] mt-2 h-[3px] bg-[#d84e4d]' />
        </div>
        <p className='text-xl mt-5 font-normal'>
          His needs result from something he wants to escape from
        </p>
      </div>

      <div className=' grid grid-cols-1 mt-6 lg:grid-cols-2 place-items-center lg:px-[10rem] gap-10'>
        <div className='flex w-full group gap-1'>
          <hr className='w-[10%] z-20 h-[3px] bg-[#d84e4d]' />
          <div className='flex border-t-2 h-[20vh] flex-row  items-center w-[100%] justify-between gap-5 '>
            <div className='relative ml-[-30px]'>
              <BsBriefcase className='text-5xl text-gray-500 z-10' />
              <div className='flex w-[30px] h-[30px] left-7 top-[25px] -z-10 rounded-full bg-[#fdc7c7] absolute'></div>
            </div>
            <div className='flex flex-col items-start justify-center'>
              <h1 className='text-2xl font-bold group-hover:text-[#d84e4d]'>
                Lorem ipsum.
              </h1>
              <p className='text-[16px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                veniam nostrum ullam illo quam obcaecati enim, ducimus
                praesentium ab doloremque!
              </p>
            </div>
          </div>
        </div>
        <div className='flex w-full group gap-1'>
          <hr className='w-[10%] z-20 h-[3px] bg-[#d84e4d]' />
          <div className='flex border-t-2 h-[20vh] flex-row  items-center w-[100%] justify-between gap-5 '>
            <div className='relative ml-[-30px]'>
              <AiOutlineSchedule className='text-5xl text-gray-500 z-10' />
              <div className='flex w-[30px] h-[30px] left-7 top-[25px] -z-10 rounded-full bg-[#fdc7c7] absolute'></div>
            </div>
            <div className='flex flex-col items-start justify-center'>
              <h1 className='text-2xl font-bold group-hover:text-[#d84e4d]'>
                Lorem ipsum.
              </h1>
              <p className='text-[16px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                veniam nostrum ullam illo quam obcaecati enim, ducimus
                praesentium ab doloremque!
              </p>
            </div>
          </div>
        </div>
        <div className='flex w-full group gap-1'>
          <hr className='w-[10%] z-20 h-[3px] bg-[#d84e4d]' />
          <div className='flex border-t-2 h-[20vh] flex-row  items-center w-[100%] justify-between gap-5 '>
            <div className='relative ml-[-30px]'>
              <BsBarChart className='text-5xl text-gray-500 z-10' />
              <div className='flex w-[30px] h-[30px] left-7 top-[25px] -z-10 rounded-full bg-[#fdc7c7] absolute'></div>
            </div>
            <div className='flex flex-col items-start justify-center'>
              <h1 className='text-2xl font-bold group-hover:text-[#d84e4d]'>
                Lorem ipsum.
              </h1>
              <p className='text-[16px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                veniam nostrum ullam illo quam obcaecati enim, ducimus
                praesentium ab doloremque!
              </p>
            </div>
          </div>
        </div>
        <div className='flex w-full group gap-1'>
          <hr className='w-[10%] z-20 h-[3px] bg-[#d84e4d]' />
          <div className='flex border-t-2 h-[20vh] flex-row  items-center w-[100%] justify-between gap-5 '>
            <div className='relative ml-[-30px]'>
              <BsBinoculars className='text-5xl text-gray-500 z-10' />
              <div className='flex w-[30px] h-[30px] left-7 top-[25px] -z-10 rounded-full bg-[#fdc7c7] absolute'></div>
            </div>
            <div className='flex flex-col items-start justify-center'>
              <h1 className='text-2xl font-bold group-hover:text-[#d84e4d]'>
                Lorem ipsum.
              </h1>
              <p className='text-[16px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                veniam nostrum ullam illo quam obcaecati enim, ducimus
                praesentium ab doloremque!
              </p>
            </div>
          </div>
        </div>
        <div className='flex w-full group gap-1'>
          <hr className='w-[10%] z-20 h-[3px] bg-[#d84e4d]' />
          <div className='flex border-t-2 h-[20vh] flex-row  items-center w-[100%] justify-between gap-5 '>
            <div className='relative ml-[-30px]'>
              <WiDaySunny className='text-5xl text-gray-500 z-10' />
              <div className='flex w-[30px] h-[30px] left-7 top-[25px] -z-10 rounded-full bg-[#fdc7c7] absolute'></div>
            </div>
            <div className='flex flex-col items-start justify-center'>
              <h1 className='text-2xl font-bold group-hover:text-[#d84e4d]'>
                Lorem ipsum.
              </h1>
              <p className='text-[16px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                veniam nostrum ullam illo quam obcaecati enim, ducimus
                praesentium ab doloremque!
              </p>
            </div>
          </div>
        </div>
        <div className='flex w-full group gap-1'>
          <hr className='w-[10%] z-20 h-[3px] bg-[#d84e4d]' />
          <div className='flex border-t-2 h-[20vh] flex-row  items-center w-[100%] justify-between gap-5 '>
            <div className='relative ml-[-30px]'>
              <IoCalendarOutline className='text-5xl text-gray-500 z-10' />
              <div className='flex w-[30px] h-[30px] left-7 top-[25px] -z-10 rounded-full bg-[#fdc7c7] absolute'></div>
            </div>
            <div className='flex flex-col items-start justify-center'>
              <h1 className='text-2xl font-bold group-hover:text-[#d84e4d]'>
                Lorem ipsum.
              </h1>
              <p className='text-[16px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                veniam nostrum ullam illo quam obcaecati enim, ducimus
                praesentium ab doloremque!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
