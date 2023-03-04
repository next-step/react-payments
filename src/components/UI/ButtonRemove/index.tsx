import { styled } from '@/lib/stitches.config';

const RemoveButton = styled('span', {
  padding: '3px 10px',
  fontSize: '$6',
  cursor: 'pointer',
  color: '$grey2',
  '&::before': {
    content: 'ⓧ',
  },
  variants: {
    onRight: {
      true: {
        position: 'absolute',
        zIndex: '10',
        right: 0,
      },
    },
  },
});

export default RemoveButton;
