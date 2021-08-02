import express from "express";
import Validator from "../middleware/Validator";
import UserController from "../controllers/userController.js";
import Datachecker from "../middleware/Datachecker";


const userRouter = express.Router();

userRouter.post("/signup",
    Validator.newAccountRules(),
    Validator.validateInput,
    Datachecker.validateEmailDuplication,
    Datachecker.checkAge,
    UserController.signupUser);



    userRouter.get("/all", UserController.getAllUsers);
    userRouter.get("/all/mentors", UserController.getAllMentors);
userRouter.get("/:id",Validator.checkId(),Validator.validateInput, UserController.getOneUser);
userRouter.patch("/:id",Validator.checkId(),Validator.validateInput, UserController.updateOneUser);
userRouter.delete("/:id", Validator.checkId(),Validator.validateInput,UserController.deleteOneUser);
userRouter.patch("/:id/role",UserController.updateOneUserRole);

userRouter.post("/signin", UserController.signinUser);

export default userRouter;