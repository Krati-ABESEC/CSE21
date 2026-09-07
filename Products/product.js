import express from "express";

const app = express();
const PORT = 5000;
app.use(express.json());

const products = [
  { id: 1, name: "SmartPhone", Brand: "Samsung", prize: 36000 },
  { id: 2, name: "Laptop", Brand: "HP", prize: 70000 }
];

app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/products", (req, res) => {
  let product = {
    id: products.length + 1,
    name: req.body.name,
    Brand: req.body.Brand,
    prize: req.body.prize,
  };

  products.push(product);
  res.json(product);
});

app.delete("/products/:id", (req, res) => {
  products = products.filter((p) => p.id != req.params.id);
  res.send("Product deleted");
});

app.listen(PORT, () => {
  console.log("serving at 5000....");
});
