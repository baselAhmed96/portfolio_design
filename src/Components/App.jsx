import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Layout from './Layout/Layout';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';


const router = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <Home /> }
    ]
  }
])
export default function App() {
  return <>
  <RouterProvider router={router} />
</>
}
