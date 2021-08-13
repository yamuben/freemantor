import express from "express";
import Validator from "../middleware/Validator";
import UserController from "../controllers/userController.js";
import Datachecker from "../middleware/Datachecker";
import verifyToken from "../middleware/verifyToken.js";
import verifyAccess from "../middleware/verifyAccess.js";


const userRouter = express.Router();

userRouter.post("/signup",
    Validator.newAccountRules(),
    Validator.validateInput,
    Datachecker.validateEmailDuplication,
    Datachecker.checkAge,
    UserController.signupUser);



    userRouter.get("/all", UserController.getAllUsers);
    userRouter.get("/all/mentors",verifyToken,verifyAccess("user"), UserController.getAllMentors);
userRouter.get("/:id", verifyToken,verifyAccess("user"), Validator.checkId(),Validator.validateInput, UserController.getOneUser);
userRouter.patch("/:id",Validator.checkId(),Validator.validateInput, UserController.updateOneUser);
userRouter.delete("/:id", Validator.checkId(),Validator.validateInput,UserController.deleteOneUser);
userRouter.patch("/:id/role",verifyToken,verifyAccess("admin"),UserController.updateOneUserRole);

userRouter.post("/signin", UserController.signinUser);

export default userRouter;