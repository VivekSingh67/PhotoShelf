import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CollectionPage from './pages/CollectionPage'
import Navbar from './components/Navbar'
  import { ToastContainer } from 'react-toastify';


const App = () => {
  return (
    <div className='min-h-screen text-white w-full bg-gray-950'>
      
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<CollectionPage />} />
      </Routes>

      <ToastContainer />
    </div>
  )
}

export default App