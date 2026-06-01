import {
  updateScore,
  incrementScore,
  getTop,
  getRank,
} from "./leaderboard.service.js";

export async function addScore(req, res) {
  const { player, score } = req.body;

  await updateScore(player, score);

  res.json({
    success: true,
  });
}

export async function increaseScore(req, res) {
  const { player, amount } = req.body;

  const score = await incrementScore(
    player,
    amount
  );

  res.json({
    player,
    score,
  });
}

export async function leaderboard(req, res) {
  const top = await getTop(
    Number(req.query.limit) || 10
  );

  res.json(top);
}

export async function rank(req, res) {
  const player = req.params.player;

  const playerRank = await getRank(player);

  res.json({
    player,
    rank: playerRank,
  });
}