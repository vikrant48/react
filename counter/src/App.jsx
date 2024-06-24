import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  return (
    <>
      <h1>counter</h1>
      <div className="card">
        <h2>Counter Value : {count}</h2>
        <button onClick={() =>{
          if(count<20){
            setCount((count) => count + 1)
          }
          
        }}>
          add value 
        </button>
        <br />
        <button onClick={() => {
          if(count>0){
            setCount((count) => count - 1)
          }
        }}>
          remove value
        </button>
        <p>count from 0 to 20</p>
      </div>
      
    </>
  )
}

export default App

