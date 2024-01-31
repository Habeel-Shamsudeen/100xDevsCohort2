import { Suspense, lazy, useContext, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import { CountContext } from "./context";
// const Dashboard=lazy(()=> import ("./components/Dashboard")) ;
// const Landing=lazy(()=>import ("./components/Landing"));

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Appbar />
//         <Routes>
//           <Route path="/dashboard" element={<Suspense fallback={'loading..'}><Dashboard /></Suspense>} />
//           <Route path="/" element={<Suspense fallback={'loading..'}><Landing /></Suspense>} /> 
//           {/* suspense api, async comp fetching, async data fetching */}
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// function Appbar() {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <button
//         onClick={() => {
//           navigate("/");
//         }}
//       >
//         Landing Page
//       </button>
//       <button
//         onClick={() => {
//           navigate("/dashboard");
//         }}
//       >
//         Dashboard
//       </button>
//     </div>
//   );
// }


function App(){
  const [count,setCount] = useState(0);
  // wrap anyone that wants to use the teleported value inside a provider
  return <div>
    <CountContext.Provider value={count}>
    <Count  count={count} setCount={setCount}/>
    </CountContext.Provider>
    
    
  </div>
}

function Count({setCount}){
  return <div>
    <CountRender/>
    <Buttons setCount={setCount}/>
  </div>
}

function CountRender(){
  const count = useContext(CountContext)
  return <div>
    {count}
  </div>
}

function Buttons({setCount}){
  const count = useContext(CountContext)
  return <div>
    <button onClick={()=>{
      setCount(count+1)
    }}>Increase</button>
    <button onClick={()=>{
      setCount(count-1)
    }}>Decrease</button>
  </div>
}

export default App;
