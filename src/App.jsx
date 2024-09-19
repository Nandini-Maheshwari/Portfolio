import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'
// import Header from './Compoments/Header.jsx'
// import Footer from './Components/Footer.jsx'
//import Contact from './Components/Contact.jsx'
import Layout from './Components/Layout.jsx'
import Home from './Screens/Home.jsx'
import About from './Screens/About.jsx'
import Projects from './Screens/Projects.jsx'
import Experiences from './Screens/Experiences.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='About' element={<About />} />
      <Route path='Projects' element={<Projects />} />
      <Route path='Experiences' element={<Experiences />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>  
    <RouterProvider router={router} />
  </React.StrictMode>,
)
