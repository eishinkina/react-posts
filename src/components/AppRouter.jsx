import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../Pages/About'
import Posts from '../Pages/Posts'
import Error from '../Pages/Error'


const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default AppRouter
