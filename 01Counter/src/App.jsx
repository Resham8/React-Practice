import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const addValue  = () => {
    setCounter(counter + 1)
  }
  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Learning React</h1>
      <h2>Counter : {counter}</h2>
      <button
      onClick={addValue}
      >Add value {counter}</button> 
      <br />
    
      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
