import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [message,setMessage] =useState("")

  useEffect(() => {
    const newSocket = new WebSocket('ws://localhost:8080');
    newSocket.onopen = () => {
      console.log('Connection established');
      newSocket.send('Hello Server!');
    }
    newSocket.onmessage = (message) => {
      console.log('Message received:', message.data);
      setMessage(message.data)
    }
    setSocket(newSocket);
    return () => newSocket.close();
  }, [])

  if(!socket){
    return <div>
      loading...
    </div>
  }

  return (
    <>
      hi there
      {message}
      <div>
        <button onClick={()=> socket.send("hello world")}/>
      </div>
    </>
  )
}

export default App