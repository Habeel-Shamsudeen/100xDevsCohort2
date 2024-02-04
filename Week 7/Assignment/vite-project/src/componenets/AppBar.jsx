import { useNavigate } from "react-router-dom";
export function Appbar() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        border: "2px solid black",
        borderRadius: "8px",
        backgroundColor: "white",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        position: "fixed",
        top: "10px",
        width: "60%",
        display: "flex",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      <button
        onClick={() => {
          navigate("/assignment4");
        }}
        style={{
          color: "white",
          border: "1px solid black",
          borderRadius: "8px",
          margin: "5px",
          padding: "10px",
          width: "120px",
        }}
      >
        Para Generator
      </button>
      <button
        onClick={() => {
          navigate("/assignment5");
        }}
        style={{
          color: "white",
          border: "1px solid black",
          borderRadius: "8px",
          margin: "5px",
          padding: "10px",
          width: "120px",
        }}
      >
        Git Profile Card
      </button>
      <button
        onClick={() => {
          navigate("/login");
        }}
        style={{
          color: "white",
          border: "1px solid black",
          borderRadius: "8px",
          margin: "5px",
          padding: "10px",
          width: "120px",
        }}
      >
        Login
      </button>
    </div>
  );
}
