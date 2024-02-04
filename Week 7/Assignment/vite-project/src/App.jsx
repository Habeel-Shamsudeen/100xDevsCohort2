import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Appbar } from "./componenets/AppBar";
import { RecoilRoot } from "recoil";
const Assignment4 = lazy(() => import("./componenets/Assignment4"));
const GitCard = lazy(() => import("./componenets/GitCard"));
const LoginCard = lazy(()=> import("./componenets/LoginCard"))
const Verification = lazy(()=> import("./componenets/Verification")) 

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route
            path="/assignment4"
            element={
              <Suspense fallback={"loading.."}>
                <Assignment4 />
              </Suspense>
            }
          />
          <Route
            path="/assignment5"
            element={
              <Suspense fallback={"loading page.."}>
                <RecoilRoot>
                  <GitCard />
                </RecoilRoot>
              </Suspense>
            }
          />
          <Route
            path="/login"
            element={
              <Suspense fallback={"loading page.."}>
                <RecoilRoot>
                  <LoginCard/>
                </RecoilRoot>
              </Suspense>
            }
          />
          <Route
            path="/verification"
            element={
              <Suspense fallback={"loading page.."}>
                <RecoilRoot>
                  <Verification/>
                </RecoilRoot>
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
