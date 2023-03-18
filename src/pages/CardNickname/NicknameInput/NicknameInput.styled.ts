import { styled } from '@/stitches.config';

export const StyledNicknameInput = styled('input', {
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
  marginTop: '10px',
});
