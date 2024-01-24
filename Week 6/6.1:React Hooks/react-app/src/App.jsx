import { memo, useEffect, useState } from "react";
import "./App.css";

// re-render,key, Wrapper components
// let globalId=4;

// function App() {
//   const [todos, setTodos] = useState([
//     {
//       id: 1,
//       title: "hello",
//       description: "desc 1",
//     },
//     {
//       id: 2,
//       title: "hello2",
//       description: "desc 2",
//     },
//     {
//       id: 3,
//       title: "hello3",
//       description: "desc 3",
//     },
//   ]);

//   function addTodo() {
//     setTodos([
//       ...todos,
//       {
//         id: globalId++,
//         title: Math.random(),
//         description: Math.random(),
//       },
//     ]);
//   }
//   return (
//     <div>
//       <HeaderWithButtons></HeaderWithButtons>
//       <Header title="hello how are you"></Header>
//       <button onClick={addTodo}>Add new Todo</button>
//       {todos.map((todo) => (
//         <Todo title={todo.title} description={todo.description} key={todo.id}/>
//       ))}
//     </div>
//   );
// }
// function HeaderWithButtons() {
//   const [title, setTitle] = useState("Habeel");
//   function updateTitle() {
//     setTitle("My name is " + Math.random());
//   }
//   return (
//     <div>
//       <button onClick={updateTitle}>Click me to Change the title</button>
//       <Header title={title}></Header>
//       <HeaderWithMemo title="this is a memo componetn" />
//       <HeaderWithMemo title="this is a memo componetn" />
//     </div>
//   );
// }

// function Header({ title }) {
//   return <div>{title}</div>;
// }

// const HeaderWithMemo = memo(({ title }) => {
//   return <div>{title}</div>;
// });

// function Todo({ title, description }) {
//   return (
//     <div>
//       <h2>{title}</h2>
//       <p>{description}</p>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <CardWrapper>
//         <TextComponent/>
//       </CardWrapper>

//       <CardWrapper>
//         <div>
//           hello
//         </div>
//       </CardWrapper>
//     </div>
//   );
// }

// function CardWrapper({ children }) {
//   return <div style={{ border: "2px solid black" }}>{children}</div>;
// }

// function TextComponent() {
//   return <div>hi there</div>;
// }

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos").then(async (res) => {
        const response = await res.json();
        setTodos(response.todos);
      });
    }, 5 * 1000);
  }, []);

  return (
    <div>
      {todos.map((todo) => {
        return (
          <Todo
            title={todo.title}
            description={todo.description}
            key={todo.id}
          />
        );
      })}
    </div>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
export default App;
