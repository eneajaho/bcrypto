import React from 'react'
import Header from './components/Header/Header'
import Boxes from './components/Boxes/Boxes'
import Footer from './components/Footer/Footer'

import FrontText from './components/FrontText'
import './App.css'

function App() {
  return (
    <div className="app">
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
