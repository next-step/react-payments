import { StyleProps } from '@/shared/types';

export type PlaceholderProps = {
  fontSize?: StyleProps['fontSize'];
  color?: StyleProps['color'];
  letterSpacing?: StyleProps['letterSpacing'];
  textAlign?: StyleProps['textAlign'];
};

export type FocusProps = {
  outline?: StyleProps['outline'];
};

export const TEXT_FIELD_VARIANTS = ['outline', 'filled', 'flushed', 'unstyled'] as const;
export type TextFieldVariant = (typeof TEXT_FIELD_VARIANTS)[number];
