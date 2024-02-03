import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Appbar } from "./componenets/AppBar";
const Assignment4 = lazy(() => import("./componenets/Assignment4"));
const GitCard = lazy(()=>import("./componenets/GitCard"))

function App() {
  return (
    <div style={{
      display:"flex",
      justifyContent:"center"
    }}>
      <BrowserRouter>
        <Appbar/>
        <Routes>
          <Route
            path="/assignment4"
            element={
              <Suspense fallback={"loading.."}>
                <Assignment4 />
              </Suspense>
            }
          />
          <Route path="/assignment5" element={<Suspense fallback={'loading page..'}><GitCard/></Suspense>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
