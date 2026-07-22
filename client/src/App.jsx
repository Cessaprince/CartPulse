import Home from './pages/Home'
import React from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import Shop from './pages/Shop'

const App = () => {
  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App