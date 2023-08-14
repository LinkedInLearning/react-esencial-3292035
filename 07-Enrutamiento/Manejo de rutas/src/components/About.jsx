import React from 'react'
import Contents from './Contents'
import { useNavigate } from 'react-router-dom';




const About = () => {

  const navegar = useNavigate();

  const manejarNavegacion = ()=>{
      navegar('/');
  }

  return (
    <>
      <h1>About</h1>
      <Contents />
      <Contents />
      <Contents />
      <Contents />

      <button onClick={manejarNavegacion}>
        Ir a Home
      </button>
       
    </>
  )
}

export default About