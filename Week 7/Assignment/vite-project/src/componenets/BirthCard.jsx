import { useEffect } from "react"
import Bgimage from './BirthCardBG.png'

export default function BirthCard(){
    useEffect(()=>{
        document.body.style.backgroundImage=`url(${Bgimage})`;
        return () => {
            document.body.style.backgroundImage = 'none';
          };
    },[])
    return <div style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "200px",
        padding: "5px",
      }}>
        <input type="text" placeholder="Enter a name" style={{
          border: "2px solid black",
          borderRadius: "5px",
          height: "40px",
          width: "500px",
          margin: "3px",
          padding: "4px",
          fontSize: "18px",
        }}/>
        <button
        style={{
          color: "white",
          margin: "5px",
          padding: "10px",
        }}
      >
        Generate
      </button>
    </div>
}