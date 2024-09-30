import express from "express";
import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();

// Using Middlewares
app.use(express.json());

mongoose
  .connect(process.env.MONGO_DB_SERVER)
  .then(() => {
    console.log("mongodb server connected");
  })
  .catch((err) => console.log(err));

const schema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", schema);

app.get("/", (req, res) => {
  res.send("Nice Working");
});

app.get("/users/all", async (req, res) => {
  const users = await User.find({});
  console.log(req.query);

  res.json({
    success: true,
    users,
  });
});

app.post("/users/new", async (req, res) => {
  const { name, email, password } = req.body;

  await User.create({
    name,
    email,
    password,
  });

  res.status(201).json({
    success: true,
    message: "Registered Successfully",
  });
});

app.get("/userid/special", (req, res) => {
  res.json({
    success: true,
    message: "Just Joking",
  })
})

// Keep all the dynamic routes below in the file.
app.get("/userid/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  console.log(req.params);

  res.json({
    success: true,
    user,
  });
});

app.listen(4000, () => {
  console.log("Server is working");
});
