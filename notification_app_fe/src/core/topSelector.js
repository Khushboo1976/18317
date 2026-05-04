import { computeScore } from "./rankingEngine";

export function getTop(list, limit = 10) {
  const arr = [];

  for (let item of list) {
    const scored = { ...item, score: computeScore(item) };

    arr.push(scored);
    arr.sort((a, b) => b.score - a.score);

    if (arr.length > limit) arr.pop();
  }

  return arr;
}