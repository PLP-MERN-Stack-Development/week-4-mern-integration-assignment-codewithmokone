import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Blogs from './pages/Blogs'
import Footer from './components/Footer'
import CreatePost from './pages/CreatePost'
import ViewPost from './pages/ViewPost'

function App() {

  return (
    <div className='bg-gray-300'>
       <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path='blogs/viewpost/:id' element={<ViewPost />} />
            <Route path='createpost' element={<CreatePost />} />
          </Routes>
          <Footer />
      </BrowserRouter>
    </div>
   
  )
}

export default App
