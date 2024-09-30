import express from "express";
import path from "path";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();
// console.log(process.env.MONGO_DB_SERVER);

mongoose
  .connect(process.env.MONGO_DB_SERVER)
  .then(() => {
    console.log("mongodb server connected");
  })
  .catch((err) => console.log(err));

const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const Message = mongoose.model("Message", messageSchema);

const app = express();

// Setting up the View Engine
app.set("view engine", "ejs");

// Using Middlewares
app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

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

// app.get("/", (req, res) => {
//   res.render("index", { name: "Pranav" });
// });

// Authentication (using next params)
const isAuthenticated = (req, res, next) => {
  const { token } = req.cookies;

  if (token) {
    next();
  } else {
    res.render("login");
  }
};

app.get("/", isAuthenticated, (req, res) => {
  res.render("logout");
});

app.post("/login", (req, res) => {
  res.cookie("token", "tok-val", {
    httpOnly: true,
    expires: new Date(Date.now() + 60 * 1000),
  });
  res.redirect("/");
});

app.get("/logout", (req, res) => {
  res.cookie("token", null, {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.redirect("/");
});

app.get("/success", (req, res) => {
  res.render("success");
});

app.post("/contact", async (req, res) => {
  // await Message.create({ name: req.body.name, email: req.body.email });
  const { name, email } = req.body;
  await Message.create({ name, email });

  res.redirect("/success");
});

app.get("/users", (req, res) => {
  res.json({
    users,
  });
});

app.get("/add", async (req, res) => {
  await Message.create({ name: "Pranav", email: "pranav@email.com" });
  res.send("MongoDB Connection");
});

app.listen(5000, () => {
  console.log("Server is working");
});
