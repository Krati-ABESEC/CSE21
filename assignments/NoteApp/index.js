import express from "express"
import cors from "cors"
import fs from "fs"

const app= express();
app.use(express.json());
app.use(cors());


app.use("/Files",express.static("Files"));



app.listen(5000, ()=>{
    console.log("serving the page at 5000");
})