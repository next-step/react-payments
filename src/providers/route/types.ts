import { Pages } from "./const";

export type TPages = typeof Pages[keyof typeof Pages];
