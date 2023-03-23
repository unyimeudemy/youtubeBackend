import express from "express";
import {
  addVideo,
  addView,
  deleteVideo,
  getByTags,
  getVideo,
  random,
  search,
  sub,
  trend,
  updateVideo,
} from "../controllers/videoController.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//CREATE A VIDEO
router.post("/", verifyToken, addVideo);

router.put("/:ID", verifyToken, updateVideo);

router.delete("/:ID", verifyToken, deleteVideo);

router.get("/find/:ID", getVideo);

router.put("/view/:ID", addView);

router.get("/trend", trend);

router.get("/random", random);

router.get("/sub", sub);

router.get("/tags", getByTags);

router.get("/search", search);

export default router;
