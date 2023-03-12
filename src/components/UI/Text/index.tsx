import { styled } from '@/lib/stitches.config';

const Text = styled('span', {
  lineHeight: '1',
  margin: '0',
  fontWeight: 400,
  display: 'block',
  fontSize: '$5',
  variants: {
    size: {
      '1': {
        fontSize: '$1',
      },
      '2': {
        fontSize: '$2',
      },
      '3': {
        fontSize: '$3',
      },
      '4': {
        fontSize: '$4',
      },
      '5': {
        fontSize: '$5',
      },
      '6': {
        fontSize: '$6',
      },
      '7': {
        fontSize: '$7',
      },
    },
    color: {
      danger: {
        color: '$danger',
      },
      default: {
        color: '$grey4',
      },
    },
  },
});

export default Text;
