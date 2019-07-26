import React from 'react'
import Header from './components/Header/Header'
import Boxes from './components/Boxes/Boxes'
import Footer from './components/Footer/Footer'
import Particles from 'react-particles-js'
import FrontText from './components/FrontText'
import './App.css'

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

function App() {
  return (
    <div className="app">
      <Particles className="particles" params={particlesOptions} />
      <div className="container">
        <Header />
        <FrontText />
        <Boxes />
        <Footer />
      </div>
    </div>
  )
}

export default App
