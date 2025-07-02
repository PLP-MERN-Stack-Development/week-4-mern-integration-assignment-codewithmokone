import { useState } from 'react'
import Dashboard from './pages/Dashboard'
import Sidebar from './compnents/Sidebar'
import Header from './compnents/Header'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'


function App() {

  return (
    <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
          </Routes>
          <div className='flex'>
            <Sidebar />
            <div className='w-full'>
              <Header />
              <div>
                <Routes>
                  <Route path='dashboard' element={<Dashboard />} />
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
