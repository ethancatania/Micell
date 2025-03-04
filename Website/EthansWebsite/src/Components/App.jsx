import { useState } from 'react'
import './Css/App.css'
import './Intro.jsx'
import Intro from './Intro.jsx'
import Tech from './Tech.jsx'
import Hobbies from './Hobbies.jsx'
import Games from './Games.jsx'

function App() {
  return (
    <>
      <Intro />
      <Games />
      <Tech />
      <Hobbies/>
    </>
  )
}

export default App
