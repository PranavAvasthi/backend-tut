import express from "express";
import {
  deleteUserById,
  getAllUsers,
  getUserById,
  registerNewUser,
  specialFunc,
  updateUserById,
} from "../controllers/user.js";

const router = express.Router();

router.get("/all", getAllUsers);

router.post("/new", registerNewUser);

router.get("/userid/special", specialFunc);

// This contains all the methods for the particular route & is preferred.
router
  .route("/userid/:id")
  .get(getUserById)
  .put(updateUserById)
  .delete(deleteUserById);

// Keep all the dynamic routes below in the file.
// router.get("/userid/:id", getUserById);
// router.put("/userid/:id", updateUserById);
// router.delete("/userid/:id", deleteUserById);

export default router;
