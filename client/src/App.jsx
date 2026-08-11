import Home from './pages/Home'
import React from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

const App = () => {
  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/shop" element={<Shop />} />
          <Route path='/contact-us' element={<Contact/>} />
          <Route path='/blog' element={<Blog/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App