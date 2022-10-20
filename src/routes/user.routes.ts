import express from "express";
import { userController } from "../controllers/user.controllers";
import { verifyAPIKey } from "../middleware";

export const userRoutes = express.Router();

userRoutes.get("", userController.getUsers);
userRoutes.get("/:id", userController.getUserByID);
userRoutes.post("", verifyAPIKey(), userController.createUser);
userRoutes.put("/:id", userController.updateUserByID);
userRoutes.delete("/:id", userController.deleteUserByID);
