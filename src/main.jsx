import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Router.jsx'
import { BrowserRouter } from 'react-router-dom'
// import './styles/index.css'
import "./styles/index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<<<<<<< HEAD
    <Router />
=======
    <BrowserRouter>
      <Router />
    </BrowserRouter>
>>>>>>> 0149959f9030f31351005e71c87dfef85fe3107c
  </React.StrictMode>,
)
