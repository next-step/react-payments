import { styled } from '@/lib/stitches.config';

export const Grid = styled('div', {
  boxSizing: 'border-box',
  display: 'grid',
  margin: '$3',

  variants: {
    columns: {
      3: {
        gridTemplateColumns: 'repeat(3, 1fr)',
      },
      virtual: {
        gridTemplateAreas: `
          'div div div'
          'div div div'
          'div div div'
          'div div div'
        `,
      },
    },
  },
});

export default Grid;
