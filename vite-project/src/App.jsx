import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home/Home'
import './App.css'
import SamplePost from './pages/samplePost/SamplePost'
import Contact from './pages/contact/Contact'
import About from './pages/about/About';
import MainLayout from './layout/MainLayout';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/About.jsx" element={<About />} />
            <Route path="/SamplePost.jsx" element={<SamplePost />} />
            <Route path="/Contact.jsx" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
