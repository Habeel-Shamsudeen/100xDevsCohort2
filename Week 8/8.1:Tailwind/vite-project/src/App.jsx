import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='grid grid-cols-12'>
      <div className='bg-red-500 col-span-12 sm-col-span-7'>hello</div>
      <div className='bg-green-500 col-span-12 sm-col-span-3'>how</div>
      <div className='bg-yellow-500 col-span-12 sm-col-span-2'>are you</div>

    </div>
  )
}

export default App
