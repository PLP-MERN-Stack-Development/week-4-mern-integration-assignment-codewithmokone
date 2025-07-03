import Dashboard from './pages/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import CreatePost from './pages/CreatePost'
import CreateCategory from './pages/CreateCategory'
import ViewPost from './pages/ViewPost'
import Layout from './compnents/Layout'
import Posts from './pages/Posts'


function App() {

  return (
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
  )
}

export default App
