export default function shuffle(arr: unknown[]) {
  return [...arr].sort(() => Math.random() - 0.5);
}
