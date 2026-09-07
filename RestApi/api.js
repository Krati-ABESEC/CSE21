import express from "express";

const app = express();
let PORT = 5000;
app.use(express.json());

let users = [
  { id: 1, name: "Krati", email: "kratiagarwal7812@gmail.com" },
  { id: 2, name: "Kartik", email: "kartikgupta678@gmail.com" },
];

// get: fetch all data from the provided url
app.get("/users", (req, res) => {
  res.json(users);
});

// POST: create new elements on the given url
app.post("/users", (req, res) => {
  let user = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email, // body is of thunderclient or portman
  };

  users.push(user);
  res.json(user);
});



app.put("/users/:id", (req, res) => {
  let user = users.find((u) => u.id == req.params.id);
  user.name = req.body.name;
  user.email = req.body.email;
  res.send("User updated successfully");
  res.json(user);
});

app.delete("/users/:id", (req,res)=>{
  users= users.filter(u=> u.id != req.params.id);

  res.send("User deleted");
})

app.listen(PORT, () => {
  console.log("serving at 5000......");
});
