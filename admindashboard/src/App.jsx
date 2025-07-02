import { useState } from 'react'
import Dashboard from './pages/Dashboard'
import Sidebar from './compnents/Sidebar'
import Header from './compnents/Header'
import {BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
          <div className='flex'>
            <Sidebar />
            <div className='w-full'>
              <Header />
              <div>
                <Routes>
                  {/* <Route path='/' element={<Home />} /> */}
                  <Route path='/' element={<Dashboard />} />
                  {/* <Route path="blogs" element={<Blogs />} />
                  <Route path='blogs/viewpost/:id' element={<ViewPost />} />
                  <Route path='register' element={<Register />} />
                  <Route path='login' element={<Login />} /> */}
                </Routes>
              </div>
            </div>
            
          </div>
          
    </BrowserRouter>
  )
}

export default App
