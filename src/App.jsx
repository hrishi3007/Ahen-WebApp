import { useState } from 'react'
import './App.css'
import Signup from './components/signup'
import Login from './components/login'
import Home from './components/home'
import Dashboard from './components/dashboard'
import License from './components/license'
import Driving from './components/driving'
import Payment from './components/payment'
import Teacher from './components/teacher'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/license" element={<License/>} />
        <Route path="/driving" element={<Driving/>} />
        <Route path="/payment" element={<Payment/>} />
        <Route path="/teacher" element={<Teacher/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
