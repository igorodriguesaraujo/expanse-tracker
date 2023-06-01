import { Router } from "express";
import userController from "../controllers/userController";

const userRoutes = Router();

userRoutes.post("/", userController.store);

export default userRoutes;
