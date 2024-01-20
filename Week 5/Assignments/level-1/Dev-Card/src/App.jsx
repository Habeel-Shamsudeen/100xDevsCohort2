import { useState } from 'react'
import './App.css'
import { Card } from './components/Card'
import { CreateCard } from './components/CreateCard'

function App() {
  const [details, setDetails] = useState({})
  const updateDetails = (newDetails) => {
    setDetails(newDetails);
  };

  return (
   <div style={{
    display:'flex',
    justifyContent:"space-evenly"
   }}>
    <CreateCard updateDetails={updateDetails}/>
    <Card details={details}/>
   </div>
  )
}

export default App
