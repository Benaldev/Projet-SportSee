export function formatPerformance(rawPerformance) {
  return rawPerformance.data.map((item) => ({
    ...item,
    kind: rawPerformance.kind[item.kind],
  }));
}

export function formatScore(rawScore) {
  return rawScore.todayScore || rawScore.score;
}

export function formatLabel(day) {
  const days = ["L", "M", "M", "J", "V", "S", "D"];
  return days[day - 1] || day;
}
