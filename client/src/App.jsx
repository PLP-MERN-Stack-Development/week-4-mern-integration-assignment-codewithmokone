import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Blogs from './pages/Blogs'
import Footer from './components/Footer'
import ViewPost from './pages/ViewPost'
import { AuthProvider } from './Context/AuthContext'
import Login from './pages/Login'
import Register from './pages/Register'
import PrivateRoute from './components/ProtectedRoute'

function App() {

  return (
    <div className='bg-gray-300'>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path='blogs/viewpost/:id' element={<ViewPost />} />
            <Route path='register' element={<Register />} />
            <Route path='login' element={<Login />} />
            <Route path='viewpost/:id' element={<ViewPost />} />
            
            {/* Protected routes */}
            <Route element={<PrivateRoute />}>
              {/* <Route path='createpost' element={<CreatePost />} />
              <Route path='createcategory' element={<CreateCategory />} />
              <Route path='updatepost' element={<UpdatePost />} /> */}
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
   
  )
}

export default App
