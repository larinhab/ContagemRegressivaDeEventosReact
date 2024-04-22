import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home/Home.jsx'
import Coutdowm from './routes/Coutdowm.jsx'

import { CountdownProvider } from './context/CountdownContext.jsx' 
// TODAS AS MINHAS ROTAS PODEM ACESSAR O MEU CONTEXTO

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/countdown",
        element: <Coutdowm/>
      },
    ],
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CountdownProvider>
    
    <RouterProvider router={router}/>

    </CountdownProvider>
  </React.StrictMode>,
)
