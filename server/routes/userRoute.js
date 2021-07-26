import express from "express";
import userController from "../controllers/userController";


const userRouter =express.Router();

userRouter.post("/signup",userController.signupUser);
userRouter.get("/all",userController.getAllUsers);
userRouter.get("/:id", userController.getOneUser);
userRouter.patch("/:id", userController.updateOneUser);
userRouter.delete("/:id", userController.deleteOneUser);

export default userRouter;