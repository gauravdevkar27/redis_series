import redis from "../redis/client.js";

const KEY = "leaderboard";

export async function updateScore(player, score) {
  await redis.zAdd(KEY, [
    {
      score: Number(score),
      value: player,
    },
  ]);
}

export async function incrementScore(player, amount) {
  return redis.zIncrBy(
    KEY,
    Number(amount),
    player
  );
}

export async function getTop(limit = 10) {
  return redis.zRangeWithScores(
    KEY,
    0,
    limit - 1,
    {
      REV: true,
    }
  );
}

export async function getRank(player) {
  const rank = await redis.zRevRank(
    KEY,
    player
  );

  return rank === null ? null : rank + 1;
}

