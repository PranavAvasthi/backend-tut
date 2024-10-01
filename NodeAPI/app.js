import express from "express";
import userRouter from "./routes/user.js";

export const app = express();

// Using Middlewares
app.use(express.json());
app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.send("Nice Working");
});
