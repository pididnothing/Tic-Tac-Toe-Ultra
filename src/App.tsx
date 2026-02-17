import { useState } from 'react'
import Gameboard from './components/gameboard/Gameboard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Gameboard />
    </>
  )
}

export default App
