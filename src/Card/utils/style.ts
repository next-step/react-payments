export const CardSizeVariants = ["big", "small"] as const;

export type CardSize = (typeof CardSizeVariants)[number];
