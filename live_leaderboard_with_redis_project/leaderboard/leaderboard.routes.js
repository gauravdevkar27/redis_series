import { Router } from "express";

import {
  addScore,
  increaseScore,
  leaderboard,
  rank,
} from "./leaderboard.controller.js";

const router = Router();

router.post("/score", addScore);

router.post("/increment", increaseScore);

router.get("/", leaderboard);

router.get("/rank/:player", rank);

export default router;