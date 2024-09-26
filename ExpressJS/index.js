import express from "express";
import path from "path";

const app = express();

app.get("/getproducts", (req, res) => {
  // res.send("Hi");

  // res.sendStatus(400);

  res.json({
    success: true,
    products: [],
  });

  // res.status(400).send("Random Error")
});

app.get("/", (req, res) => {
  const pathLocation = path.resolve(); // gives the current directory path
  // path.join(pathLocation, "./index.html") -> joins the pathLocation path to index.html
  res.sendFile(path.join(pathLocation, "./index.html"));
});

app.listen(5000, () => {
  console.log("Server is working");
});
