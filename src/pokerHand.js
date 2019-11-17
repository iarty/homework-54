
export default (state) => {
  const card = state
  card.sort((a, b) => { return b.priorRank - a.priorRank });
  return `Hight card (${card[0].rank} ${card[0].suit})`;
}
