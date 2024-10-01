import { app } from "./app.js";
import { connectDB } from "./data/database.js";
import dotenv from "dotenv";

dotenv.config();

connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server is working on PORT: ${process.env.PORT}`);
});
