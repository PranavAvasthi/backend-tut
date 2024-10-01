import { User } from "../models/user.js";

export const getAllUsers = async (req, res) => {
  const users = await User.find({});
  console.log(req.query);

  res.json({
    success: true,
    users,
  });
};

export const registerNewUser = async (req, res) => {
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
};

export const specialFunc = (req, res) => {
  res.json({
    success: true,
    message: "Just Joking",
  });
};

export const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  console.log(req.params);

  res.json({
    success: true,
    user,
  });
};

export const updateUserById = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  console.log(req.params);

  res.json({
    success: true,
    message: "updated",
  });
};

export const deleteUserById = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  console.log(req.params);

  res.json({
    success: true,
    message: "deleted",
  });
};
