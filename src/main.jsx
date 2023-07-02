import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Router.jsx'
import { BrowserRouter } from 'react-router-dom'
// import './styles/index.css'
import "./styles/index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
