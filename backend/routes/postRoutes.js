import express from "express";
import { postController } from "../controller/like.controller.js";

const router = express.Router();

router.get("/", postController.read);

router.post("/", postController.create);

router.put("/like/:id", postController.update);

router.delete("/:id", postController.remove);

export default router;
