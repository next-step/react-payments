import { FontSizeType, FontWeightType, ColorType } from 'types';

export type TextProps = {
  fontSize: FontSizeType;
  label: string;
  weight?: FontWeightType;
  fontColor?: ColorType;
  className?: string;
};
export type RootProps = Partial<TextProps>;
