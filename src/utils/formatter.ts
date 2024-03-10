import { SYMBOL } from '@/constants/symbol';

interface SegmentConfig {
  separator?: string;
  length?: number;
}

export const Formatter = {
  ellipsis(text: string, n: number) {
    if (text.length > n) {
      return `${text.slice(0, n)}...`;
    }

    return text;
  },

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
