// for advance implementation
// import { error } from "console"; 
// import express from "express";
// import fs from "fs/promises";

// const app = express();
// app.use(express.static("Frontend"));// this function directly displays the exact file contact 
// const PORT = 9000;

// app.get("/", (req, res) => {
//   res.sendFile("./Frontend/home.html", { root: "." });
// });

// app.get("/about", (req, res) => {
//   res.sendFile("./Frontend/achievement.html", { root: "." });
// });

// app.get("/contact", (req, res) => {
//   res.sendFile("./Frontend/connect.html", { root: "." });
// });

// app.listen(PORT, () => {
//   console.log(`serving at http://localhost:${PORT}`);
// });


// for basic implementation
import express from 'express';
import fs from 'fs';
const app= express();
app.use(express.static("Frontend"))
const PORT=3000;
app.get('/',(req,res)=>{
    fs.readFile('./Frontend/home.html','utf-8',(err,data)=>{
        if(err){
            res.status(500).send('Error reading file');
            return;
        } else {
            res.send(data);
        }
    });
});
app.get('/about',(req,res)=>{
    fs.readFile('./Frontend/achievement.html','utf-8',(err,data)=>{
        if(err){
            res.status(500).send('Error reading file');
            return;
        } else {
            res.send(data);
        }
    });
});
app.get('/contact',(req,res)=>{
    fs.readFile('./Frontend/connect.html','utf-8',(err,data)=>{
        if(err){
            res.status(500).send('Error reading file');
            return;
        } else {
            res.send(data);
        }
    });
    });
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})