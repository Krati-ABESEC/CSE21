
// routing using http module

const http= require("http")

const server = http.createServer((req,res)=>{
    res.writeHead(200, "Content-Type : text/html");

    if(req.url==="/"){
        res.end("<h1> this is home page </h1>"); // this will write the statement on the page and 
                                                //also ends the call altogether
    }else if(req.url ==="/about"){
        res.end("<p>this is the about page</p>");
    }else if(req.url === "/contact"){
        res.end("<h2> this is the contact page </h2>");
    }else{
        res.end("<p> 404 page not found  </p>")
    }
    res.end();
     
})

server.listen(3001, ()=>{
    console.log("serving at the port 3001");
})

