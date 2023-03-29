import { keyframes, styled } from '@/stitches.config';

const fadeIn = keyframes({
  '0%': {
    transform: 'translateY(30%)',
    opacity: '0.4',
  },
  '100%': {
    transform: 'translateY(0)',
    opacity: '1',
  },
});

export const StyledCardModalWrapper = styled('div', {
  // @ts-ignore
  flexCenter: 'column',
  width: '100%',
  height: '100%',

  '> * ': {
    transition: 'all .5s',
    animation: `${fadeIn} .5s`,
  },
});

export const StyledControllersContainer = styled('div', {
  // @ts-ignore
  flexCenter: 'column',
  justifyContent: 'flex-start',
  width: '60%',
  height: '20%',
  maxHeight: '180px',
  marginTop: '20px',
});

export const StyledConfirmButton = styled('button', {
  width: '100%',
  height: '2.5em',
  borderRadius: '10px',
  backgroundColor: 'GreenYellow',
  cursor: 'pointer',
  border: 'none',
  fontSize: '20px',
  fontWeight: 'bold',
  boxShadow: '0 0 15px rgba(255,255,255,.2)',
  textShadow: '0 0 10px rgba(0,0,0,.3)',
  marginBottom: '15px',
});

export const StyledCardModalButton = styled('button', {
  width: '100%',
  height: '2.5em',
  borderRadius: '10px',
  cursor: 'pointer',
  border: 'none',
  fontSize: '20px',
  fontWeight: 'bold',
  boxShadow: '0 0 15px rgba(255,255,255,.2)',
  textShadow: '0 0 10px rgba(0,0,0,.3)',
});
