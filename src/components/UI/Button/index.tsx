import { styled } from '@/lib/stitches.config';

const Button = styled('button', {
  border: 0,
  width: '$10',
  height: '$7',
  background: '$white',
  boxShadow: '1px 4px 6px rgba(0, 0, 0, 0.2)',
  borderRadius: '8px',
  '&:disabled': {
    background: '#F4F4F4',
    borderColor: '#DEDEDE',
    color: '#BBBBBB',
  },
});

export default Button;
