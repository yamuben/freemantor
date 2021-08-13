import express from "express";
import SessionController from "../controllers/sessionController";

import verifyToken from "../middleware/verifyToken.js";
import verifyAccess from "../middleware/verifyAccess.js";

const sessionRouter =express.Router();

sessionRouter.post("/request",verifyToken,verifyAccess("user"),SessionController.sessionRequest);
sessionRouter.get("/all",SessionController.getAllSessions);
sessionRouter.get("/:id", SessionController.getOneSession);
sessionRouter.patch("/:id", SessionController.updateOneSession);
sessionRouter.patch("/:id/accept" ,verifyToken,verifyAccess("mentor"), SessionController.acceptOneSession);
sessionRouter.patch("/:id/decline" ,verifyToken,verifyAccess("mentor"), SessionController.declineOneSession);
sessionRouter.delete("/:id", SessionController.deleteOneSession);

export default sessionRouter;