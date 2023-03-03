import { keyframes, styled } from '@/lib/stitches.config';

export const StyledBackDrop = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 10,
  backgroundColor: 'rgba(0, 0, 0, 0.75)',
});

const SlideUp = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(30rem)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
});

export const StyledModal = styled('div', {
  position: 'absolute',
  width: '100%',
  left: 0,
  bottom: 0,
  zIndex: 20,
  padding: '$5 0',
  backgroundColor: '#fff',
  borderRadius: '15px 15px 0 0',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
  animation: `${SlideUp} 300ms ease-out forwards`,
});
