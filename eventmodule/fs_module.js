const fs= require("fs");

// readfile is used to write
// unlink is used for deletion
// appendfile is used for updation

// fs.writeFileSync("student.txt", "Name: Rahul\nRoll No: 101");

// console.log("file created successfully");

// if you are using Async then always use callback in it 

// fs.writeFile("student.txt", "Name:Krati Agarwal\nRoll NO: 2503201000635", (msg)=>{
//     if(msg){
//         console.log(msg);
//         return;
//     }

//     console.log("Successfully created the file");
// })


fs.readFile("student.txt", "utf-8", (err,data)=>{
    if(err){
        console.log(err);
        return;
    }

    console.log(data);
})









