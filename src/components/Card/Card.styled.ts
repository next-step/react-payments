import { styled } from '@/stitches.config';

export const StyledCard = styled('div', {
  position: 'relative',
  flexCenter: 'column',
  width: '208px',
  height: '130px',
  fontSize: '30px',
  color: '$cardNumber',
  background: '$cardBackground',
  boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.25)',
  borderRadius: '5px',

  variants: {
    pointCursor: {
      true: {
        cursor: 'pointer',
      },
    },
  },
});

export const StyledErrorMessage = styled('span', {
  color: 'red',
  fontWeight: 'bold',
});
