import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import QuestionPage from './pages/QuestionPage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/questions" element={<QuestionPage />} />
      </Routes>
    </>
  )
}

export default App
