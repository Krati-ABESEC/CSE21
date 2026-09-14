import express from "express";

const app = express();
const PORT = 8000;
app.use(express.json());

let products = [
  { id: 1, name: "SmartPhone", Brand: "Samsung", price: 36000 },
  { id: 2, name: "Laptop", Brand: "Dell", price: 55000 },
  { id: 3, name: "Tablet", Brand: "Lenovo", price: 22000 },
  { id: 4, name: "SmartWatch", Brand: "Apple", price: 42000 },
  { id: 5, name: "Headphones", Brand: "Sony", price: 8500 },
  { id: 6, name: "Television", Brand: "LG", price: 48000 },
  { id: 7, name: "Refrigerator", Brand: "Whirlpool", price: 52000 },
  { id: 8, name: "WashingMachine", Brand: "Samsung", price: 38000 },
  { id: 9, name: "Microwave", Brand: "IFB", price: 12000 },
  { id: 10, name: "AirConditioner", Brand: "Voltas", price: 41000 },
  { id: 11, name: "Keyboard", Brand: "Logitech", price: 2500 },
  { id: 12, name: "Mouse", Brand: "HP", price: 1200 },
  { id: 13, name: "Monitor", Brand: "Acer", price: 15000 },
  { id: 14, name: "Printer", Brand: "Canon", price: 14000 },
  { id: 15, name: "Camera", Brand: "Nikon", price: 65000 },
  { id: 16, name: "Speaker", Brand: "JBL", price: 7500 },
  { id: 17, name: "PowerBank", Brand: "MI", price: 1800 },
  { id: 18, name: "Earbuds", Brand: "OnePlus", price: 4500 },
  { id: 19, name: "Router", Brand: "TP-Link", price: 3200 },
  { id: 20, name: "Projector", Brand: "Epson", price: 30000 },
  { id: 21, name: "GamingConsole", Brand: "Sony", price: 50000 },
  { id: 22, name: "GameController", Brand: "Microsoft", price: 5500 },
  { id: 23, name: "ExternalHardDrive", Brand: "Seagate", price: 6500 },
  { id: 24, name: "SSD", Brand: "WesternDigital", price: 7000 },
  { id: 25, name: "USBDrive", Brand: "SanDisk", price: 900 },
  { id: 26, name: "Soundbar", Brand: "Boat", price: 6000 },
  { id: 27, name: "FitnessBand", Brand: "Fitbit", price: 5000 },
  { id: 28, name: "CoffeeMaker", Brand: "Philips", price: 8500 },
  { id: 29, name: "AirPurifier", Brand: "Dyson", price: 45000 },
  { id: 30, name: "SmartBulb", Brand: "Wipro", price: 1200 }
];

app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/products", (req, res) => {
  let product = {
    id: products.length + 1,
    name: req.body.name,
    Brand: req.body.Brand,
    price: req.body.prize,
  };

  products.push(product);
  res.json(product);
});

app.put("/products/:id", (req, res) => {
  let product = products.find((p) => p.id == req.params.id);
  product.name = req.body.name;
  product.Brand = req.body.Brand;
  product.price = req.body.price;

  res.send("User updated successfully");
  res.json(product);
});

app.delete("/products/:id", (req, res) => {
  products = products.filter((p) => p.id != req.params.id);
  res.send("Product deleted");
});

try {
  app.listen(PORT, () => {
    console.log("serving at 5000....");
  });
} catch (error) {
  console.log("error has occurred during listening: ", error);
  throw err;
}
