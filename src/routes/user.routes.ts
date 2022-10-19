import express from "express";
import { userController } from "../controllers/user.controllers";

export const userRoutes = express.Router();

userRoutes.get("", userController.getUsers);
userRoutes.get("/:id", userController.getUserByID);
userRoutes.post("", userController.createUser);
userRoutes.put("/:id", userController.updateUserByID);
