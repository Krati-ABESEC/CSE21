import express from "express"
import cors from "cors"
import fs from "fs"

const app= express();
app.use(cors());
app.use(express.json());

app.get("/api/requests", (req,res)=>{
    const data= fs.readFileSync("requests.json", "utf-8");
    const requests= JSON.parse(data);

    res.json(requests);
});

app.post("/api/requests", (req,res)=>{
    const data= fs.readFileSync("requests.json", "utf-8");
    const requests= JSON.parse(data);
    let newRequest= {
        id: requests.length+1,
        S_Name: req.body.S_Name,
        email: req.body.email,
        category: req.body.category,
        Problem: req.body.Problem,
        Priority: req.body.Priority,
    }

    requests.push(newRequest);
    fs.writeFileSync("requests.json", JSON.stringify(requests, null, 2));
    res.json(newRequest);
});

app.put("/api/requests/:id", (req, res)=>{
    const data= fs.readFileSync("requests.json", "utf-8");
    const requests= JSON.parse(data);

    const id= req.params.id;
    const index= requests.findIndex((r)=> r.id==id);
    requests[index]= {
        S_Name: req.body.S_Name,
        email: req.body.email,
        category: req.body.category,
        Problem: req.body.Problem,
        Priority: req.body.Priority
    }

    fs.writeFileSync("requests.json", JSON.stringify(requests, null, 2));
    res.json(requests[index]); 
});

app.delete("/api/requests/:id", (req,res)=>{
    const data= fs.readFileSync("requests.json", "utf-8");
    let requests= JSON.parse(data);

    const id= parseInt(req.params.id);

    requests= requests.filter((request)=> request.id !== id);
    fs.writeFileSync("requests.json", JSON.stringify(requests, null,2));
    res.json(
        {"message" : "request deleted successfully"}
    )
});

app.listen(5000, ()=>{
    console.log("serving the page at 5000...");
});



