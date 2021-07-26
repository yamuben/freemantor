import express from "express";
import UserController from "../controllers/userController.js";


const userRouter =express.Router();

userRouter.post("/signup",UserController.signupUser);
userRouter.get("/all",UserController.getAllUsers);
userRouter.get("/:id", UserController.getOneUser);
userRouter.patch("/:id", UserController.updateOneUser);
userRouter.delete("/:id", UserController.deleteOneUser);

export default userRouter;