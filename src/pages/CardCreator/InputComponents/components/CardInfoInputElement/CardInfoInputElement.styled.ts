import { styled } from '@/stitches.config';

export const StyledCardInfoInputElement = styled('div', {
  position: 'relative',
});

export const StyledInput = styled('input', {
  color: '$inputColor',
  boxSizing: 'border-box',
});

export const StyledErrorMessage = styled('span', {
  position: 'absolute',
  top: '100%',
  left: '0',
  color: 'red',
  fontSize: '10px',
  width: 'max-content',
});
