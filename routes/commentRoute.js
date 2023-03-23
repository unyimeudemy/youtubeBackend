import express from "express";
import {
  deleteComment,
  addComment,
  getComments,
} from "../controllers/commentController.js";

import { verifyToken } from "../verifyToken.js";

const router = express.Router();

router.post("/", verifyToken, addComment);

router.delete("/:ID", verifyToken, deleteComment);

router.get("/:videoID", getComments);

export default router;
