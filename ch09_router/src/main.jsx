import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import Router01 from './Router01.jsx'

createRoot(document.getElementById('root')).render(
   <StrictMode>
      <BrowserRouter>
         <Router01 />
         <hr />
         <App />
      </BrowserRouter>
   </StrictMode>,
)
