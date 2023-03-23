import express from "express";
import { verifyToken } from "../verifyToken.js";
import {
  deleteUser,
  dislike,
  getUser,
  like,
  subscribe,
  unsubscribe,
  updateUser,
} from "../controllers/userController.js";

const router = express.Router();

// UPDATE A USER
router.put("/:ID", verifyToken, updateUser);

//DELETE A USER
router.delete("/:ID", verifyToken, deleteUser);

//GET A USER
router.get("/find/:ID", getUser);

//SUBSCRIBE A USER
router.put("/sub/:ID", verifyToken, subscribe);

//UNSUBSCRIBE A USER
router.put("/unsub/:ID", verifyToken, unsubscribe);

//LIKE A VIDEO
router.put("/like/:videoID", verifyToken, like);

//DISLIKE A VIDEO
router.put("/unlike/:videoID", verifyToken, dislike);

export default router;
