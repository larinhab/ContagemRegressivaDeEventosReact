import { useContext, useState } from 'react'
import './Home.css'

import { CountdownContext } from '../../context/CountdownContext'
// O provider ja esta configurado, aqui só precisamos do contexto
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const [ title, setTitle ] = useState()
    const [ date, setDate ] = useState()
    const [ image, setImage ] = useState()
    const [ color, setColor ] = useState()

    const { setEvent } = useContext(CountdownContext)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        const eventObject = {
            title,
            date,
            image,
            color,
        }

        setEvent(eventObject)
        navigate("/countdown")
    }

  return (
    <div className='home'>
        <h2>Personalize sua Contagem Regressiva</h2>
        <form action="" className='countdown-form' onSubmit={ handleSubmit }>
            <label htmlFor="title">
                <span>Título</span>
                <input 
                    type="text" 
                    name='title' 
                    placeholder='Digite o titulo do evento aqui' 
                    onChange={(e) => setTitle(e.target.value)}
                    required/>
            </label>

            <label htmlFor="date">
                <span>Data do evento</span>
                <input 
                    type="date" 
                    name='date'
                    onChange={(e) => setDate(e.target.value)}
                    required/>
            </label>

            <label htmlFor="image">
                <span>Imagem do evento</span>
                <input 
                    type="" 
                    name='image' 
                    placeholder='Gostaria de anexar uma imagem ao evento? Insira a URL' 
                    onChange={(e) => setImage(e.target.value)}/>
            </label>

            <label htmlFor="theme">
                <span>Cor do tema:</span>
                <input 
                    type="color" 
                    name='tema'
                    onChange={(e) => setColor(e.target.value)}/>
            </label>

            <input type='submit' value='Enviar'/>
        </form>
    </div>
  )
}

export default Home