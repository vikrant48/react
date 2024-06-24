import { useState } from 'react'
import './App.css'

function App() {
  const [color, setcolor] = useState('gray')

  return (
    <>
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
    <div className='fixed flex flex-wrap justify-center bottom-12  inset-x-0 px-2' >
      <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white border-e-black px-6 py-1 rounded-xl' >
        <button className='outline-none px-6 py-1 rounded-full text-white shadow-xl' style={{backgroundColor:'blue'}} onClick={()=>{
         setcolor('blue')
        }}>blue</button>
        <button className='outline-none px-6 py-1 rounded-full text-white shadow-xl' style={{backgroundColor:'red'}} onClick={()=>{
         setcolor('red')
        }}>red</button>
        <button className='outline-none px-6 py-1 rounded-full text-white shadow-xl' style={{backgroundColor:'green'}} onClick={()=>{
         setcolor('green')
        }}>green</button>
       
      </div>
    </div>

    </div>


    </>
  )
}

export default App
