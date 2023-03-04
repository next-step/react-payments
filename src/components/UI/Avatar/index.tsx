import { styled } from '@/lib/stitches.config';

import { CardVariant } from '../Card';
export { CardVariant };

export const AvatarShape = {
  square: {
    borderRadius: '10px',
  },
  circle: {
    borderRadius: '50%',
  },
};

const Avatar = styled('div', {
  margin: '0.5rem 1rem',
  width: '2.8rem',
  height: '2.8rem',
  variants: {
    variant: CardVariant,
    shape: AvatarShape,
  },
  defaultVariants: {
    variant: 'pc',
  },
});

export default Avatar;
