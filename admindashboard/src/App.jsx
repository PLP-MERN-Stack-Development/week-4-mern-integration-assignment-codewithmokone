import Dashboard from './pages/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import CreatePost from './pages/CreatePost'
import CreateCategory from './pages/CreateCategory'
import ViewPost from './pages/ViewPost'
import Layout from './compnents/Layout'
import Posts from './pages/Posts'
import EditPost from './pages/EditPost'


function App() {

  return (
    <Routes>
      {/* Public Routes */}
      <Route path='/' element={<Login />} />

      {/* Protected routes inside Layout */}
      <Route path='/' element={<Layout />}>
        <Route path='dashboard' element={<Dashboard />} />
        <Route path="posts" element={<Posts />} />
        <Route path='posts/viewpost/:id' element={<ViewPost />} />
        <Route path='createpost' element={<CreatePost />} />
        <Route path='createcategory' element={<CreateCategory />} />
        <Route path='posts/editpost/:id' element={<EditPost />} />
        <Route path='login' element={<Login />} />
      </Route>
    </Routes>
  )
}

export default App
