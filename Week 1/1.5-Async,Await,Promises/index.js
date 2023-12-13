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
