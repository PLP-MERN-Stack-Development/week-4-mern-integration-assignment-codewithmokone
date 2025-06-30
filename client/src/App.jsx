import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Blogs from './pages/Blogs'
import Footer from './components/Footer'

function App() {

  return (
    <div className='bg-gray-300'>
       <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
          </Routes>
          <Footer />
      </BrowserRouter>
    </div>
   
  )
}

export default App
