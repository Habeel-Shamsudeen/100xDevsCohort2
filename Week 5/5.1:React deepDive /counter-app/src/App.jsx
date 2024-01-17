import { useState } from "react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  const [todos, setTodo] = useState([
    {
      title: "Gym",
      desc: "go to gym from 9-10",
    },
    {
      title: "Study",
      desc: "study from 11-12",
    },
  ]);

  function addTodo() {
    setTodo([
      ...todos,
      {
        title: "asfsdf",
        desc: "go to gym frosdfasdfm 9-10",
      },
    ]);
  }
  return (
    <div>
      <button onClick={addTodo}>Add a todo</button>
      {todos.map((todo) => {
        return <Todo title={todo.title} desc={todo.desc} />;
      })}
      {/* <CustomButton count={count} setCount={setCount}></CustomButton> */}
    </div>
  );
}

//component
// function CustomButton(props) {
//   function onClickHandler() {
//     props.setCount(props.count + 1);
//   }
//   return <button onClick={onClickHandler}>Counter {props.count}</button>;
// }

function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.desc}</h2>
    </div>
  );
}

export default App;
