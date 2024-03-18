import { SYMBOL } from '@/constants/symbol';

interface SegmentConfig {
  separator?: string;
  length?: number;
}

export const Formatter = {
  masking(text: string) {
    return text.replace(/./g, SYMBOL.ASTERISK);
  },

  segment(
    text: string | undefined,
    { separator = SYMBOL.HYPHEN, length = 4 }: SegmentConfig
  ) {
    const isRenderSeparator = text && text.length % length === 0;

    return `${text || ''}${isRenderSeparator ? separator : ''}`;
  },
};
