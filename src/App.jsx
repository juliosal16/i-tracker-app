import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Missing from './components/Missing';
import CVICU from './components/CVICU/CVICU';



function App() {

  return (
    <>
      <Routes>
        <Route path='/i-tracker-app' element={<Home />} />
        <Route path='/i-tracker-app/CVICU' element={<CVICU />} />
        <Route path='*' element={<Missing />} />
      </Routes>
    </>
  )
}

export default App
