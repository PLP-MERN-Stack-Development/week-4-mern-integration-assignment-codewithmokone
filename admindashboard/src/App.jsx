import Dashboard from './pages/Dashboard'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import CreatePost from './pages/CreatePost'
import CreateCategory from './pages/CreateCategory'
import ViewPost from './pages/ViewPost'
import Layout from './compnents/Layout'
import Posts from './pages/Posts'


function App() {

  return (
    // <BrowserRouter>
    //       <Routes>
    //         {/* Public Routes */}
    //         <Route path='/' element={<Login />} />

    //       </Routes>
    //       <div className='flex'>
    //         <Sidebar />
    //         <div className='w-full'>
    //           <Header />
    //           <div>
    //             <Routes>
    //               <Route path='dashboard' element={<Dashboard />} />
    //               {/* <Route path="blogs" element={<Posts />} /> */}
    //               <Route path='viewpost/:id' element={<ViewPost />} />
    //               <Route path='createpost' element={<CreatePost />} />
    //               <Route path='createpost' element={<CreateCategory />} />
    //               <Route path='login' element={<Login />} />
    //             </Routes>
    //           </div>
    //         </div>
            
    //       </div>
          
    // </BrowserRouter>

    <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path='/' element={<Login />} />

            {/* Protected routes inside Layout */}
              <Route path='/' element={<Layout />}>
                <Route path='dashboard' element={<Dashboard />} />
                  <Route path="posts" element={<Posts />} />
                  <Route path='viewpost/:id' element={<ViewPost />} />
                  <Route path='createpost' element={<CreatePost />} />
                  <Route path='createcategory' element={<CreateCategory />} />
                  <Route path='login' element={<Login />} />
                </Route>
           </Routes>
    </BrowserRouter>
  )
}

export default App
