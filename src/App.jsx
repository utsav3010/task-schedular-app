import React from 'react'
import { BrowserRouter as Router,Routes,Route  } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Layout from './Layout'

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}></Route>
        </Routes>
      </Router>
    </>
  )
}
