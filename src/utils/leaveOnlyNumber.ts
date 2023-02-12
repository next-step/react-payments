export default function leaveOnlyNumber(value: string) {
  return value.replace(/[^0-9]*/g, "");
}
