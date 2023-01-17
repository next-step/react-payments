import { TSingleNumber } from "./types";

export function isSingleNumber(
  singleNumber: number
): singleNumber is TSingleNumber {
  return 0 < singleNumber && singleNumber <= 9;
}
