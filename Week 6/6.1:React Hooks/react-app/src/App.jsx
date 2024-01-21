import { useState } from 'react'
import './App.css'

function App() {
  return <div>
    <Header title="hello world"></Header>
    <Header title="hello how are you"></Header>
  </div>
}

function Header({title}){
  return <div>
    {title}
  </div>
}

export default App
