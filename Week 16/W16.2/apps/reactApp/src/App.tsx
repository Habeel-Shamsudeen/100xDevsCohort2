import { useState } from 'react'
import './App.css'
import {Admin} from '@repo/ui/admin'
import { Button } from '@repo/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Admin/>
        <Button appName='web'>hello</Button>
        </div>
    </>
  )
}

export default App
