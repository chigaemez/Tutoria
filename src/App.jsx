import AOS from 'aos'
import 'aos/dist/aos.css'
import About from './Components/About'
import Header from './Components/Header'
import Hero from './Components/Hero'
import { useEffect } from 'react'
import Service from './Components/Service'
import Features from './Components/Features'

const AOSInit = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out-quart'
    })
  }, [])

  return <>{children}</>
}

function App () {
  return (
    <>
      <AOSInit>
        <Header />
        <Hero />
        <About />
        <Service/>
        <Features/>
      </AOSInit>
    </>
  )
}

export default App
