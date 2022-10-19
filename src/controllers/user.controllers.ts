import { NextFunction, Request, Response } from "express";
import { User } from "../generate/client";
import UserModel from "../model/user";
import { UserServices } from "../services/user.services";

class UserController {
  createUser = async (req: Request, res: Response, next: NextFunction) => {
    const user: User = req.body;
    try {
      const rs = await new UserServices().create(user);
      return res.status(201).json(new UserModel(rs).toJSON);
    } catch (err) {
      console.error(err);
      next(err);
    }
  };

  getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const rs = await new UserServices().getUsers();
      return res.status(200).json(rs.map(user => new UserModel(user).toJSON));
    } catch (err) {
      console.error(err);
      next(err);
    }
  };

  getUserByID = async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);
    try {
      const rs = await new UserServices().getUserByID(id);
      return res.status(200).json(new UserModel(rs).toJSON);
    } catch (err) {
      console.error(err);
      next(err);
    }
  };
}

export const userController = new UserController();
