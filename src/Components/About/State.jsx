import React, { useEffect, useState, useRef } from 'react'
import { statsbg } from '../../assets/IMG/Index'
import { useInView } from 'react-intersection-observer'

const State = () => {
  const [Client, setClient] = useState(0)
  const [Project, setProject] = useState(0)
  const [support, setSupport] = useState(0)
  const [workers, setWorkers] = useState(0)
  const [ClientEnd, setClientEnd] = useState(30)
  const [projectEnd, setProjectEnd] = useState(521)
  const [supportEnd, setSupportEnd] = useState(210)
  const [workersEnd, setWorkersEnd] = useState(250)
  const { ref: myRef, inView } = useInView()

  // CLIENT
  useEffect(() => {
    if (inView) {
      const clientInterval = setInterval(() => {
        if (Client < ClientEnd) {
          setClient(prevCount => prevCount + 1)
        } else {
          clearInterval(clientInterval)
        }
      }, 100)
      return () => clearInterval(clientInterval)
    }
  }, [Client, ClientEnd, 100, inView])

  //PROJECT
  useEffect(() => {
    if (inView) {
      const projectInterval = setInterval(() => {
        if (Project < projectEnd) {
          setProject(prevCount => prevCount + 1)
        } else {
          clearInterval(projectInterval)
        }
      }, 0.1)
      return () => clearInterval(projectInterval)
    }
  }, [Project, projectEnd, 0.1, inView])

  // SUPPORT
  useEffect(() => {
    if (inView) {
      const supportInterval = setInterval(() => {
        if (support < supportEnd) {
          setSupport(prevCount => prevCount + 1)
        } else {
          clearInterval(supportInterval)
        }
      }, 6)
      return () => clearInterval(supportInterval)
    }
  }, [support, supportEnd, 6, inView])

  // WORKERS
  useEffect(() => {
    if (inView) {
      const workersInterval = setInterval(() => {
        if (workers < workersEnd) {
          setWorkers(prevCount => prevCount + 1)
        } else {
          clearInterval(workersInterval)
        }
      }, 6)
      return () => clearInterval(workersInterval)
    }
  }, [workers, workersEnd, 6, inView])
  return (
    <div
      className='flex  items-center justify-center  bg-cover lg:h-[60vh] relative   bg-center w-full bg-black bg-no-repeat  '
      style={{ backgroundImage: `url(${statsbg})` }}
      ref={myRef}
    >
      <div class='absolute inset-0 bg-black opacity-50 w-full '></div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4   place-items-center w-[80%] '>
        <div className='flex z-40 mt-16 lg:mt-0 flex-col w-[80%]  items-center justify-center'>
          <h1 className='text-5xl font-medium text-white'>
            {' '}
            {inView ? Client : '0'}
          </h1>
          <p className='text-lg font-semibold text-white'>Clients</p>
        </div>
        <div className='flex z-40 mt-16 lg:mt-0 flex-col w-[80%]  items-center justify-center'>
          <h1 className='text-5xl font-medium text-white'>
            {inView ? Project : '0'}
          </h1>
          <p className='text-lg font-semibold text-white'>Project</p>
        </div>
        <div className='flex z-40 mt-16 lg:mt-0 flex-col w-[80%]  items-center justify-center'>
          <h1 className='text-5xl font-medium text-white'>
            {inView ? support : '0'}
          </h1>
          <p className='text-lg font-semibold text-white'>Hours Of Support</p>
        </div>
        <div className='flex z-40 mt-16 lg:mt-0 flex-col w-[80%]  items-center justify-center'>
          <h1 className='text-5xl font-medium text-white'>
            {inView ? workers : '0'}
          </h1>
          <p className='text-lg font-semibold text-white'>Clients</p>
        </div>
      </div>
    </div>
  )
}

export default State
