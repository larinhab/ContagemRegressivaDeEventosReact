import { CountdownContext } from './context/CountdownContext'
import { useState, useContext } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'


function App() {
    const { event } = useContext(CountdownContext)

    let eventImage = null
    if(event) eventImage = event.image;

  return (
    <>
      <div className="App" style={
        eventImage 
        ? { backgroundImage: `url(${eventImage})`}
        : { backgroundColor: '' }
      }> 
        <div className="container">
        <Outlet/>
        </div>
      </div>
    </>
  )
}

export default App
