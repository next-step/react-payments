import { styled } from '@/stitches.config';

export const StyledSecurityCodeTooltip = styled('div', {
  position: 'relative',
});

export const StyledTooltip = styled('div', {
  position: 'absolute',
  top: '0',
  right: '0',
  width: '180px',
  maxHeight: '200px',
  padding: '15px',
  boxSizing: 'border-box',
  background: 'Wheat',
  boxShadow: '0px 0px 3px rgba(0,0,0,0.1)',
  borderRadius: '30px',
  fontSize: '12px',
  fontWeight: 'bold',
  transform: 'translate(100%, -100%)',
});
