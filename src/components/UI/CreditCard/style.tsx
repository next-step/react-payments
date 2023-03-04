import Card, { type CardVariants } from '@/components/UI/Card';
import { styled } from '@/lib/stitches.config';
export { CardVariants };

export { Card as CardRoot };
export const NumberBox = styled('div', {
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '10px 0',
  bottom: '40px',
  left: '70px',
});

export const Number = styled('p', {
  width: '49px',
  height: '29px',
  fontWeight: '300',
  fontSize: '20px',
  color: 'inherit',
});

export const Name = styled('h3', {
  wordBreak: 'break-all',
  fontWeight: '300',
  lineHeight: '23px',
  color: 'inherit',
});

export const BottomBox = styled('div', {
  position: 'absolute',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  maxWidth: '230px',
  bottom: '5px',
});
