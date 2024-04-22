import React, {useContext} from 'react'
import { Navigate } from 'react-router-dom'

import Counter from '../components/Counter/Counter'
import Title from '../components/Title/Title'

import useCountdown from '../hooks/useCountdown'
import { CountdownContext } from '../context/CountdownContext'


const Coutdowm = () => {
    const {event} = useContext(CountdownContext)
    
    if(!event) return <Navigate to="/"/>
    
    const eventTitle = event.title
    const eventColor = event.color
    
    const [ day, hour, minute, second ] = useCountdown(event.date)

  return (
    <>
        <Title title={eventTitle} eventColor={eventColor}/>
          <div className="countdown-container">
            <Counter title="Dias" number={day} eventColor={eventColor}/>
            <Counter title="Horas" number={hour} eventColor={eventColor}/>
            <Counter title="Minutos" number={minute} eventColor={eventColor}/>
            <Counter title="Segundos" number={second} eventColor={eventColor}/>
          </div>
    </>
  )
}

export default Coutdowm