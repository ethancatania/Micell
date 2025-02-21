import { useState } from 'react'
import './Css/App.css'
import './Intro.jsx'
import Intro from './Intro.jsx'
import Tech from './Tech.jsx'
import Hobbies from './Hobbies.jsx'

function App() {
  return (
    <>
      <Intro />
      <Tech />
      <Hobbies/>
    </>
  )
}

export default App
