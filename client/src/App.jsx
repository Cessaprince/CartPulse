import Home from './pages/Home'
import React from 'react'
import { BrowserRouter, Link, Routes } from 'react-router-dom'

const App = () => {
  return (

    <div>
      <BrowserRouter>
        <Home />
      </BrowserRouter>

    </div>
  )
}

export default App