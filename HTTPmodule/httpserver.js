// request sent to server is handled by HTTP.

import http from "http"
import fs from "fs/promises"

// const fileName= "student.txt";

// async function createFile(){
//     try{
//         await fs.writeFile(fileName, "Name: Krati\nCourse: B.Tech CSE", utf8);
//         console.log("file created successfully");
//     }
//     catch(error){
//         console.log("Error: ", error.message);
//     }
// }


const server= http.createServer((req,res)=>{
    res.writeHead(200, "Content-Type : text/html");
    res.write("<h1> Welcome to FSD lab </h1>");
    try{
        res.writeHead(403, "Content-Type : text/plain");
    } catch(err){
        res.write(`${err}`);
    }
    
    res.end("Access Denied");
})

server.listen(3000,()=>{
    console.log("server is running on port 3000");
});

// ques- make file on the server  , update it and show its data on the server

// there are 2 types of API- rest API and GraphSQL







