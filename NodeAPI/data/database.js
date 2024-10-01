import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_DB_SERVER)
    .then(() => {
      console.log("mongodb server connected");
    })
    .catch((err) => console.log(err));
};
