import { useEffect } from "react";
import { colourAtom } from "../store/atoms/ColorAtom";
import { useSetRecoilState,useRecoilValue } from "recoil";

export function ColorPickerBar() {
  const setColour = useSetRecoilState(colourAtom);
  const color = useRecoilValue(colourAtom)
  useEffect(()=>{
    document.body.style.backgroundColor = color
  },[color])
  
  return (
    <div
      style={{
        border: "2px solid black",
        borderRadius: "8px",
        backgroundColor:"white",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        position:"fixed",
          bottom:"15px",
          width:"60%",
          display:"flex",
          justifyContent:"center",
          gap:"10px"
      }}
    >
      <button
        style={{
          color: "black",
          backgroundColor: "red",
          border: "1px solid black",
          borderRadius: "8px",
          margin: "5px",
          padding: "10px",
          width:"90px",
        }}
        onClick={() => setColour("red")}
      >
        red
      </button>
      <button
        style={{
          color: "black",
          backgroundColor: "yellow",
          border: "1px solid black",
          borderRadius: "8px",
          margin: "5px",
          padding: "10px",
          width:"90px"
        }}
        onClick={() => setColour("yellow")}
      >
        yellow
      </button>
      <button
        style={{
          color: "white",
          backgroundColor: "#333333",
          border: "1px solid black",
          borderRadius: "8px",
          margin: "5px",
          padding: "10px",
          width:"90px"
        }}
        onClick={() => setColour("#333333")}
      >
        Black
      </button>
      <button
        style={{
          color: "black",
          backgroundColor: "purple",
          border: "1px solid black",
          borderRadius: "8px",
          margin: "5px",
          padding: "10px",
          width:"90px"
        }}
        onClick={() => setColour("purple")}
      >
        Purple
      </button>
      <button
        style={{
          color: "black",
          backgroundColor: "green",
          border: "1px solid black",
          borderRadius: "8px",
          margin: "5px",
          padding: "10px",
          width:"90px"
        }}
        onClick={() => setColour("green")}
      >
        Green
      </button>
      <button
        style={{
          color: "black",
          backgroundColor: "blue",
          border: "1px solid black",
          borderRadius: "8px",
          margin: "5px",
          padding: "10px",
          width:"90px"
        }}
        onClick={() => setColour("blue")}
      >
        blue
      </button>
      <button
        style={{
          color: "black",
          backgroundColor: "orange",
          border: "1px solid black",
          borderRadius: "8px",
          margin: "5px",
          padding: "10px",
          width:"90px",
        }}
        onClick={() => setColour("orange")}
      >
        Default
      </button>
    </div>
  );
}
