import AOS from 'aos'
import 'aos/dist/aos.css'
import About from './Components/About'
import Header from './Components/Header'
import Hero from './Components/Hero'
import { useEffect } from 'react'

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
      </AOSInit>
    </>
  )
}

export default App
