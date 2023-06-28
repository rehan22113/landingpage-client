import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Termofuse from './Pages/Termofuse'
import PrivacyPolicy from './Pages/PrivacyPolicy'

function App() {

  return (
    <>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/termandcondition' element={<Termofuse/>} />
    <Route path='/privacy-policy' element={<PrivacyPolicy/>} />
   </Routes>

    </>
  )
}

export default App
