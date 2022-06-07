export function generateAnswer(numberAlternatives) {
  const index = Math.round(Math.random() * (numberAlternatives - 1));
  return index;
}
