import { Pages } from "./const";

export type TPages = typeof Pages[keyof typeof Pages];

export function isPages(value: string): value is TPages {
  return Object.values(Pages).includes(value as TPages);
}
