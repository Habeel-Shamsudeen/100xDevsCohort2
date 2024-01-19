/*
    todos = [
        {
            title:,
            description,
        }
    ]
 */
export function Todos({ todos }) {
  return (
    <div style={{
        display:"flex",
        flexWrap:"wrap",
        padding: 10,
        margin: 10,
    }}>
      {todos.map((todo) => {
        return (
          <div style={{
            border:"2px solid black",
            borderRadius:"5px",
            padding: 10,
            margin: 10,
          }}>
            <div>{todo.title}</div>
            <div>{todo.description}</div>
            <button
              onClick={() => {
                fetch("http://localhost:3000/completed", {
                  method: "PUT",
                  body: JSON.stringify({
                    id: todo._id,
                  }),
                  headers: {
                    "content-type": "application/json",
                  },
                }).then(() => {
                  alert("todo updated");
                });
              }}
            >
              {todo.completed == true ? "Completed!" : "Mark as Complete"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
