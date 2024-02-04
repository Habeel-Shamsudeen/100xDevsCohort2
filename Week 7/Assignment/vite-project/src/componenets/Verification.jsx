import { useRecoilValue } from "recoil";
import { otpAtom } from "../store/atoms/ColorAtom";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Verification() {
  const correctOTP = useRecoilValue(otpAtom);
  const navigate=useNavigate();
  const [otp, setOTP] = useState(new Array(4).fill(""));
  const [status,setStatus] = useState('');
  const otpBoxRef = useRef([]);
  useEffect(()=>{
    otpBoxRef.current[0].focus();
  },[])
  function changeHandler(value, index) {
    let newArr = [...otp];
    newArr[index] = value;
    setOTP(newArr);

    if (value && index < 3) {
      otpBoxRef.current[index + 1].focus();
    }
  }

  function handleBackspaceAndEnter(e, index) {
    if(e.key === "Backspace" && !e.target.value && index > 0){
      otpBoxRef.current[index - 1].focus()
    }
    if(e.key === "Enter" && e.target.value && index < 3){
      otpBoxRef.current[index + 1].focus()
    }
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "200px",
        border: "2px solid black",
        borderRadius: "8px",
        padding: "5px",
        height: "300px",
      }}
    >
      <h1>Login via OTP</h1>
      <div
        style={{
          display: "flex",
          gap: "4px",
        }}
      >
        {otp.map((box, index) => {
          return (
            <input
              type="text"
              maxLength={1}
              key={index}
              onChange={(e) => changeHandler(e.target.value, index)}
              ref={(reference) => (otpBoxRef.current[index] = reference)}
              onKeyUp={(e)=> handleBackspaceAndEnter(e,index)}
              style={{
                height: "40px",
                width: "40px",
                borderRadius: "5px",
                fontSize: "20px",
                textAlign: "center",
              }}
            />
          );
        })}
      </div>
      <button style={{
            color: "white",
            margin: "5px",
            marginTop:"25px",
            padding: "10px",
          }} onClick={()=>{
            let EnteredOTP=[...otp];
            if(EnteredOTP.join("")==correctOTP){
                alert("LOGIN SUCCESSFUL")
                navigate("/assignment4");

            }else{
                setStatus("WRONG OTP");
                otpBoxRef.current.map((box)=>box.value="");
                otpBoxRef.current[0].focus();
            }
          }}>Submit OTP</button>
          <div>{status}</div>
    </div>
  );
}
