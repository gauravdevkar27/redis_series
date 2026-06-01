import express from "express";
import leaderboardRoutes from "./leaderboard/leaderboard.routes.js";

const app = express();

app.use(express.json());

app.use("/leaderboard", leaderboardRoutes);

app.get("/", (_, res) => {
  res.send("Leaderboard Running");
});

app.listen(3000, () => {
  console.log(
    `Server running on 3000`
  );
});