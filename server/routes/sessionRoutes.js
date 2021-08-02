import express from "express";
import SessionController from "../controllers/sessionController";


const sessionRouter =express.Router();

sessionRouter.post("/request",SessionController.sessionRequest);
sessionRouter.get("/all",SessionController.getAllSessions);
sessionRouter.get("/:id", SessionController.getOneSession);
sessionRouter.patch("/:id", SessionController.updateOneSession);
sessionRouter.delete("/:id", SessionController.deleteOneSession);

export default sessionRouter;