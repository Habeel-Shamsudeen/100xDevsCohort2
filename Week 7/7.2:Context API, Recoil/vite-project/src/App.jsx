import { useState, useContext } from "react";
import { CountContext } from "./context";
import "./App.css";
import {
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
  RecoilRoot,
} from "recoil";
import {
  countAtom,
  evenSelector,
  filterAtom,
  filterSelector,
  todosAtom,
} from "./store/atoms/count";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
        <TodoForm />
        <Filter />
        <FilteredTodos />
      </RecoilRoot>
    </div>
  );
}

function Count() {
  return (
    <div>
      <CountRender />
      <Buttons />
    </div>
  );
}

function CountRender() {
  const count = useRecoilValue(countAtom);
  return (
    <div>
      {count}
      <Even />
    </div>
  );
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  return (
    <div>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

function Even() {
  const isEven = useRecoilValue(evenSelector);
  return <div>{isEven == 0 ? "this is Even" : ""}</div>;
}

function TodoForm() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const setTodos = useSetRecoilState(todosAtom);
  return (
    <div>
      <input
        type="text"
        placeholder="title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="description"
        onChange={(e) => {
          setDesc(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setTodos((prev)=>[
            ...prev,
            {
              title: title,
              description: desc,
            },
          ]);
        }}
      >
        Add Todo
      </button>
    </div>
  );
}

function Filter() {
  const setFilter = useSetRecoilState(filterAtom);
  return (
    <div>
      <input
        type="text"
        placeholder="filter"
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      />
    </div>
  );
}

function FilteredTodos() {
  const todos = useRecoilValue(filterSelector);
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
