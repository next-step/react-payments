import { styled } from '@/stitches.config';

export const StyledNicknameInput = styled('input', {
  marginBottom: '10px',
  variants: {
    error: {
      true: {
        borderBottom: '2px red solid',
      },
    },
  },
});

export const StyledNicknameInputErrorMessage = styled('div', {
  color: 'red',
});
