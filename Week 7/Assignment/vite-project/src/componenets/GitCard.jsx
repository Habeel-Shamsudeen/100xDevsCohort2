import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { dataAtom } from "../store/atoms/ColorAtom";

export default function GitCard() {
  const inputRef = useRef();
  const [userName, setUserName] = useState();
  const setData = useSetRecoilState(dataAtom);
  const data = useRecoilValue(dataAtom);
  

  useEffect(() => {
    if (userName) {
      const url = `https://api.github.com/users/${userName}`;
      axios
        .get(url)
        .then((response) => {
          console.log(response.data);
          setData(response.data);
        })
        .catch((error) =>{
            setData(null)
            console.log(error)
        });
    }
  }, [userName]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "25px",
      }}
    >
      <h1>Card Generator</h1>
      <div>
        <input
          type="text"
          placeholder="Enter your Git Username"
          style={{
            border: "2px solid black",
            borderRadius: "5px",
            height: "40px",
            width: "500px",
            margin: "3px",
            padding: "4px",
            fontSize: "18px",
          }}
          ref={inputRef}
        />
        <button
          style={{
            color: "white",
            margin: "5px",
            padding: "10px",
          }}
          onClick={() => {
            setUserName(inputRef.current.value);
            inputRef.current.value = "";
          }}
        >
          Generate Card
        </button>
      </div>
      {data?<Card/>:null}
      
    </div>
  );
}

function Card(){
    const data = useRecoilValue(dataAtom);
    return(
        <div
        className="card"
        style={{
          height: "400px",
          width: "380px",
          border: "1px solid black",
          margin: "15px",
          marginTop: "80px",
          padding: "5px",
          background: "linear-gradient(to bottom, #aaf0d1 35%, #ffffff 35%)",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <img
          className="profile-picture"
          src={data.avatar_url}
          alt={"Profile Picture"}
          style={{
            borderRadius: "50%",
            height: "130px",
            width: "130px",
            margin: "15px",
            marginTop: "30px",
            padding: "5px",
            paddingTop: "15px",
          }}
        />
        <div
          className="name"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <p style={{
            fontWeight: "bold",
            fontSize: "20px",
            margin: "3px",
            marginTop: "2px",
            padding: "3px",
          }}>{data.name}</p>
        </div>
        <div style={{
            margin: "3px",
            marginTop: "2px",
            padding: "3px",
        }}>
            {data.bio}
        </div>
        <div
          className="location"
          style={{
            fontWeight: "normal",
            color: "grey",
            fontSize: "20px",
            margin: "2px",
            padding: "1px",
          }}
        >
          {data.location}
        </div>
        <hr />
        <div
          className="stats"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            margin: "7px",
            padding: "5px",
          }}
        >
          <div
            className="followers"
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "7px",
              padding: "5px",
            }}
          >
            <b>{data.followers}</b> Followers
          </div>
          <div
            className="likes"
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "7px",
              padding: "5px",
            }}
          >
            <b>{data.following}</b>Following
          </div>
          <div
            className="photos"
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "7px",
              padding: "5px",
            }}
          >
            <b>{data.public_repos}</b>Repos
          </div>
        </div>
      </div>
    );
}
