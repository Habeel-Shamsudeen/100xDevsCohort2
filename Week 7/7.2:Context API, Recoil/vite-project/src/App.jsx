import { useState,useContext } from 'react'
import { CountContext } from "./context";
import './App.css'
import { useRecoilState, useRecoilValue, useSetRecoilState,RecoilRoot} from 'recoil';
import { countAtom } from './store/atoms/count';

function App() {
  return (
    <div>
        <RecoilRoot>
          <Count/>
        </RecoilRoot>
        
    </div>
  );
}

function Count() {
  return (
    <div>
      <CountRender />
      <Buttons/>
     

    </div>
  );
}

function CountRender() {
  const count = useRecoilValue(countAtom);
  return <div>
    {count}
    <Even/>
  </div>;
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  return (
    <div>
      <button
        onClick={() => {
          setCount((prev)=>prev + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount((count)=>count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

function Even(){
  const count = useRecoilValue(countAtom);
  return <div>
    {count%2==0?"this is Even":""}
  </div>
}

export default App
