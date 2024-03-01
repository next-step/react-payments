import { StyleProps } from '@/shared/types';

export type PlaceholderProps = {
  color?: StyleProps['color'];
  letterSpacing?: StyleProps['letterSpacing'];
  textAlign?: StyleProps['textAlign'];
};

export type FocusProps = {
  outline?: StyleProps['outline'];
};

export type TextFieldVariant = 'outline' | 'filled' | 'flushed' | 'unstyled';
