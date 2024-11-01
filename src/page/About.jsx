import React, { useContext } from 'react'
import { ThemaProv } from '../context/Thema.jsx'

export default function About() {
  
  const { thema, seThema } = useContext(ThemaProv)

  return (
    <div >

      <h1 style={{color: 'red', fontSize: '60px'}}>About {thema} </h1>
    </div>
  )
}
