import { useState } from 'react'
import './App.css'
import calculator from "./App"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <calculator/>
    </>
  )
}

