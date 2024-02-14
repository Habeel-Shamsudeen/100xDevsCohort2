//GET
// function main() {
//   fetch("https://sum-server.100xdevs.com/todos").then(async (res) => {
//     const json = await res.json();
//     console.log(json.todos.length);
//   });
// }

// async function main() {
//   const response = await fetch("https://sum-server.100xdevs.com/todos");
//   const json = await response.json();
//   console.log(json.todos.length);
// }

const axios = require("axios");
// async function main(){
//     const response = await axios.get("https://sum-server.100xdevs.com/todos");
//     console.log(response.data.todos.length);
// }

//POST

// async function main() {
//   const response = await fetch("https://sum-server.100xdevs.com/todos", {
//     method: "POST",
// body:{
//     username:"habeel",
//     password:"112323"
// }
//     headers:{
//           "Authoerization":"Bearer 1242423423"
//      }
//   });
//   const json = await response.json();
//   console.log(json.todos.length);
// }

async function main() {
  const response = await axios.post(
    "https://sum-server.100xdevs.com/todos",
    {
      body: {
        username: "habeel",
        password: "112323",
      },
    },
    {
      headers: { Authoerization: "Bearer 1242423423" },
    }
  );
  console.log(response.data.todos.length);
}

main();
