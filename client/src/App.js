import React from 'react'
import Home from './components/Home'
import ImageSlider from './components/ImageSlider'
import Navbar from './components/Navbar'
import "./App.css"
import Main from './components/Main'

const App = () => {
  return (
    <div className='app'>
      <ImageSlider/>
      <Main/>
    </div>
  )
}

export default App