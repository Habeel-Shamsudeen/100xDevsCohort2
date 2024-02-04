import { useCallback, useMemo, useRef } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {otpAtom } from "../store/atoms/ColorAtom";
import { useNavigate } from "react-router-dom";


export default function LoginCard(){
    const navigate = useNavigate();
    const inputRef=useRef();
    const [otp,setOTP]=useRecoilState(otpAtom)
    return <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "200px",
        border:"2px solid black",
        borderRadius:"8px",
        padding:"5px",
        height:"300px"
      }}>
        <h1>Login via OTP</h1>
        <input type="text" placeholder="Enter your mobile number"  style={{
            border: "2px solid black",
            borderRadius: "5px",
            height: "40px",
            width: "400px",
            margin: "3px",
            padding: "4px",
            fontSize: "24px",
          }} ref={inputRef}/>
        <button style={{
            color: "white",
            margin: "5px",
            marginTop:"25px",
            padding: "10px",
          }} onClick={()=>{
            const value=inputRef.current.value;
            if(value.length===10 && parseInt(value)){
                let pin=(Math.floor(Math.random()*8999)+1000);
                setOTP(()=>pin);
                console.log(pin)
                navigate("/verification")
            }
            inputRef.current.value = "";
          }}>Send OTP</button>
    </div>
}