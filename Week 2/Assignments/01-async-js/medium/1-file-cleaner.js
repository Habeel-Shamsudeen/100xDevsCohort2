// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");

fs.readFile("file.txt","utf-8",(err,data)=>{
    data=data.replace(/\s+/g,' ').trim() //\s+ matches one or more whitespace characters.Without the g flag, only the first occurrence would be replaced.
    console.log(data);
    fs.writeFile("file.txt",data,(err)=>{
        if(err) console.error(err);
    });
})