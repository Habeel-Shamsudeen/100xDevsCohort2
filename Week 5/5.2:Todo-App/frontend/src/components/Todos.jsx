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
    <div>
      {todos.map((todo) => {
        return (
          <div>
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
