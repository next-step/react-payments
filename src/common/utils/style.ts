export const widthVariable = [100, 75, 50, 25, 15] as const;

export type InputWidth = (typeof widthVariable)[number];

export const textAlignVariable = ["left", "center", "right"] as const;

export type TextAlign = (typeof textAlignVariable)[number];
