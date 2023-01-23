import { TCardNumbers } from "./types";

export default function convertToCardNumbers([
  first = "",
  second = "",
  third = "",
  fourth = "",
]: TCardNumbers | string[]) {
  return [
    [...first].join(""),
    [...second].join(""),
    [...third].map(() => "*").join(""),
    [...fourth].map(() => "*").join(""),
  ]
    .filter(Boolean)
    .join("-");
}
