export function scoreNotification(item) {
  const base =
    item.placement_weight * 0.5 +
    item.result_weight * 0.3 +
    item.events_weight * 0.2;
  const currentTime = Date.now() / 1000;
  const age = currentTime - item.timestamp;
  const recency = Math.exp(-age / 3600);
  return base + freshness;
}