// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const { ifError } = require("assert");
const fs = require("fs");
const dataToBeWritten="Hello, learning how to write into a file using node :)";
fs.writeFile("test1.txt",dataToBeWritten,(err)=>{
    if(err){
        console.error(err);
    }
    console.log("data written successfully")
});
console.log("Writing data into file...")