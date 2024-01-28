import { useCallback, useEffect, useMemo, useState,memo } from "react";
import axios from "axios";
import "./App.css";

//useEffect

// function App() {
//   const [count, setCount] = useState(1);
//   return (
//     <div>
//       <button onClick={()=>setCount(1)}>1</button>
//       <button onClick={()=>setCount(2)}>2</button>
//       <button onClick={()=>setCount(3)}>3</button>
//       <button onClick={()=>setCount(4)}>4</button>
//       <Todo id={count} />
//     </div>
//   );
// }

// function Todo({ id }) {
//   const [todos, setTodos] = useState({});

//   useEffect(() => {
//     const URl = `https://sum-server.100xdevs.com/todo?id=${id}`;
//     axios.get(URl).then((response) => {
//       setTodos(response.data.todo);
//     });
//   }, [id]);
//   return (
//     <div>
//       <h3>{todos.title}</h3>
//       <p>{todos.description}</p>
//     </div>
//   );
// }

//useMemo

// function App() {
//   const [count, setCount] = useState(0);
//   const [num, setNum] = useState(0);
//   let s= useMemo(()=>{
//     let sum = 0;
//     for (let i = 0; i <= num; i++) {
//       sum += i;
//     }
//     return sum;
//   },[num])

//   return (
//     <div>
//       <input
//         type="text"
//         onChange={(e) => {
//           setNum(e.target.value);
//         }}
//         placeholder="enter a number"
//       />
//       <p>
//         The sum from 0 to {num} is {s}
//       </p>
//       <button onClick={() => setCount(count + 1)}>Counter {count}</button>
//     </div>
//   );
// }

//useCallback
//used to memoise the function
function App() {
  const [count, setCount] = useState(0);
  const inputFunction = useCallback(function () {
    console.log("hi");
  }, []);
  return (
    <div>
      <ButtonComp inputFunction={inputFunction} />
      <button onClick={() => setCount(count + 1)}>Counter {count}</button>
    </div>
  );
}

const ButtonComp = memo(({inputFunction}) => {
  console.log("child render");
  return (
    <div>
      <button>Button Clicked</button>
    </div>
  );
});

export default App;
