import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Facilities from './components/Facilities'
import Departments from './components/Departments'
import Doctors from './components/Doctors'
import Appointment from './components/Appointment'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Facilities' element={<Facilities />} />
          <Route path='/Departments' element={<Departments />} />
          <Route path='/Doctors' element={<Doctors />} />
          <Route path='/Appointmet' element={<Appointment />} />
          <Route path='/Contact' element={<Contact />} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App