import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

let globalId = 0;

function App() {
  const [todos, setTodos] = useState([]);
  function addTodo() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const id = globalId++;
    const newTodo = {
      id: id,
      title: title,
      description: description,
      done: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]); //setTodos is a funtion to updated the state of todos it takes an function as an argument which has the prev state/ as the argument. this function is used to update the state
  }

  function markAsDone(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, done: true } : todo))
    );
  }
  return (
    <div className="App">
      <h3>Todo Title</h3>
      <input
        type="text"
        id="title"
        placeholder="Todo title"
        className="input"
      />
      <h3>Todo description</h3>
      <input
        type="text"
        id="description"
        placeholder="Todo description"
        className="input"
      />
      <br />
      <br />
      <button onClick={addTodo} className="addTodo">
        Add todo
      </button>
      <hr />
      <div id="todos" class="container">
        {todos.map((todo) => {
          return (
            <div key={todo.id} className="card">
              <div className="title">{todo.title}</div>
              <div className="desc">{todo.description}</div>
              {!todo.done ? (
                <button onClick={() => markAsDone(todo.id)}>
                  Mark As Done
                </button>
              ) : (
                <button>Done!</button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
