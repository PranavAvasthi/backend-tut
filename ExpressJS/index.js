import express from "express";
import path from "path";

const app = express();

const users = [];

// Setting up the View Engine
app.set("view engine", "ejs");

// Using Middlewares
app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));

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

app.get("/success", (req, res) => {
  res.render("success");
});

app.post("/", (req, res) => {
  users.push({ username: req.body.name, email: req.body.email });

  res.redirect("/success");
});

app.get("/users", (req, res) => {
  res.json({
    users,
  });
});

app.listen(5000, () => {
  console.log("Server is working");
});
