import { useState } from "react";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";
import { useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  //not the right way to send req in react use useEffect
  useEffect(()=>{
    fetch("http://localhost:3000/todos").then(async (res) => {
      const json = await res.json();
      setTodos(json.todos);
    });
    setInterval(()=>{
      fetch("http://localhost:3000/todos").then(async (res) => {
      const json = await res.json();
      setTodos(json.todos);
    });
    },2000)

  },[]);
    
  return (
    <div>
      <CreateTodo />
      <hr />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
