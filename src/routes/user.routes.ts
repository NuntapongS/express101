import express from "express";
import { userController } from "../controllers/user.controllers";

export const userRoutes = express.Router();

userRoutes.get("", userController.getUsers);
userRoutes.post("", userController.createUser);
