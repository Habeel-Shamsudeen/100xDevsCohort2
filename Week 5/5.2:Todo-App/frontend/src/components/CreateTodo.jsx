import { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div
      style={{
        border: "2px solid black",
        borderRadius: "8px",
        padding: 10,
        margin: 10,
      }}
    >
      <input
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <button
        style={{
          padding: 10,
          margin: 10,
        }}
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title,
              description,
            }),
            headers: {
              "content-type": "application/json",
            },
          }).then(async (res) => {
            const json = await res.json();
            alert("todo added");
          });
        }}
      >
        Add Todo
      </button>
    </div>
  );
}
