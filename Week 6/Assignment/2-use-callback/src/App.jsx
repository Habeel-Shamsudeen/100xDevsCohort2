import { useState } from 'react';
import './App.css'
import { Assignment1 } from './components/Assignment1'
import { Assignment2 } from './components/Assignment2'

function App() {
  const [count,setCount] = useState(0);
  return (
    <>
      <button onClick={()=>{
        setCount(count+1)
      }}>{count}</button>
      {/* <Assignment1 /> */}
      <Assignment2 />
    </>
  )
}

export default App
