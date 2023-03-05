import { styled } from '@/lib/stitches.config';

const Button = styled('button', {
  border: 0,
  variants: {
    variant: {
      default: {
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
      },
      removeBtn: {
        boxShadow: 'none',
        zIndex: '10',
        backgroundColor: 'inherit',
        fontSize: '$6',
        cursor: 'pointer',
        color: '$grey2',
        '&::before': {
          content: 'ⓧ',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export default Button;
