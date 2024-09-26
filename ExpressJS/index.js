import express from "express";
import path from "path";

const app = express();

// Setting up the View Engine
app.set("view engine", "ejs");

app.use(express.static(path.join(path.resolve(), "public")));

app.get("/getproducts", (req, res) => {
  // res.send("Hi");

  // res.sendStatus(400);

  res.json({
    success: true,
    products: [],
  });

  // res.status(400).send("Random Error")
});

// app.get("/", (req, res) => {
//   const pathLocation = path.resolve(); // gives the current directory path
//   // path.join(pathLocation, "./index.html") -> joins the pathLocation path to index.html
//   res.sendFile(path.join(pathLocation, "./index.html"));
// });

app.get("/", (req, res) => {
  res.render("index", { name: "Pranav" });
});

app.listen(5000, () => {
  console.log("Server is working");
});
