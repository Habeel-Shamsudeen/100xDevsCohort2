//gist-1
// function findSum(n) {
//     let ans = 0;
//     for (let i = 0; i<n; i++) {
//       ans += i;
//     }
//     return ans;
//   }
  
//   function findSumTill100() {
//     console.log(findSum(100));
//   }
  
//   setTimeout(findSumTill100, 1000); //calling an Async function
//   console.log("hello world");

//gist-2 fs.readFile function
// const fs= require("fs"); //fs = fileSystem
// fs.readFile("test.txt","utf8",(err,data)=>{
//     console.log(data);
// })
// console.log("after reading file"); // can observe that this logs first even though it is comming after fs.readFile. thus proving fs is an asymc func

// let a=0;
// for(let i=1;i<=1000000000;i++){ //takes longer than to read file
//     a+=a;
// }
// console.log("hi after time consuming computation"); //but still only after this only the contents of the file will be displayed

//http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
//understand js arc with the link above


//gist-3
// my own asynchronous function
//const fs = require('fs');
// function kiratsReadFile(cb) {
//     console.log("inside kiratsReadfile");
//   fs.readFile("test.txt", "utf-8", function(err, data) {
//     console.log("before calling cb");
//     cb(data);
//   });
// }

// function onDone(data) {
//   console.log(data)
// }

// kiratsReadFile(onDone)


//gist-4 promises
//const fs = require('fs');
// my own asynchronous function
// function kiratsReadFile() {
//     console.log("inside kiratsReadfile");
//   return new Promise(function(resolve) {
//     console.log("inside promise");
//     fs.readFile("test.txt", "utf-8", function(err, data) {
//         console.log("before resolve");
//       resolve(data);
//     });
//   })
// }
// // callback function to call
// function onDone(data) {
//   console.log(data)
// }

// kiratsReadFile().then(onDone);

//gist-8 async await
function kiratsAsyncFunction() {
  let p = new Promise(function(resolve) {
    // do some async logic here
    setTimeout(()=>{
      resolve("hi there!");
    },2000)
  });
  return p;
}

async function main() {
  const value = await kiratsAsyncFunction();
  console.log(value);
}

main();