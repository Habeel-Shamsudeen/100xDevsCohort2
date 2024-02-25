import { useEffect, useState } from "react";
import axios from "axios";

function useTodos(n) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const value = setInterval(() => {
      axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
        setTodos(res.data.todos);
        setLoading(false);
      });
    }, n * 1000);
    axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
      setTodos(res.data.todos);
      setLoading(false);
    });
    return () => {
      clearInterval(value);
    };
  }, [n]);
  return { todos, loading };
}

function useIsOnline() {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);
  useEffect(() => {
    window.addEventListener("online", () => setIsOnline(true));
    window.addEventListener("offline", () => setIsOnline(false));
  }, []);
  return isOnline;
}

function useDimension() {
  const [dimension, setDimension] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  useEffect(() => {
    window.addEventListener("resize", () => {
      setDimension(() => ({
        height: window.innerHeight,
        width: window.innerWidth,
      }));
    });
  }, []);
  return dimension;
}

function useInterval(cb, n) {
  useEffect(() => {
    const value = setInterval(cb, n);
    return () => clearInterval(value);
  }, []);
}

function useDebounce(inputValue,n){
  const [debouncedValue,setDebounceValue] = useState(inputValue);
  useEffect(()=>{
    const value=setTimeout(()=>{
       setDebounceValue(inputValue)
    },n)
    return ()=> clearTimeout(value);
  },[inputValue,n])
  return debouncedValue
}

function App() {
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue, 500); // 500 milliseconds debounce delay

  // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect

  return (
    <div>
      <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Search..."
    />
    <div>
      {debouncedValue}
    </div>
    </div>
    

  );
}

function Track({ todo }) {
  return (
    <div>
      {todo.title}
      <br />
      {todo.description}
    </div>
  );
}

export default App;
