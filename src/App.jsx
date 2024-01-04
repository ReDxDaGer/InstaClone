import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AuthPage from './Pages/AuthPage/AuthPage'
import Pagelayout from './layouts/PageLayout/Pagelayout'


function App() {
  return (
    <>
    <Pagelayout>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/Auth' element={<AuthPage />}/>
      </Routes>
    </Pagelayout>
    </>
  )
}

export default App