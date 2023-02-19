import { styled } from '../../lib/stitches.config';

const CardNumberBox = styled('div', {
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '10px 0',
  bottom: '40px',
  left: '70px',
});

const CardNumber = styled('p', {
  width: '49px',
  height: '29px',
  fontWeight: '300',
  fontSize: '20px',
  color: '$grey2',
});

const CardName = styled('h3', {
  wordBreak: 'break-all',
  fontWeight: '300',
  lineHeight: '23px',
  color: '$grey4',
});

const CardBottomBox = styled('div', {
  position: 'absolute',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  maxWidth: '230px',
  bottom: '5px',
});

const Card = styled('div', {
  position: 'relative',
  backgroundColor: '$white',
  top: 0,
  boxShadow: '1px 4px 6px rgba(0, 0, 0, 0.2)',
  borderRadius: '12px',
  padding: '20px 30px',
  variants: {
    size: {
      small: {
        paddingRight: '50px',
        width: '200px',
        height: '130px',
      },
      large: {
        left: '50px',
        width: '300px',
        height: '190px',
      },
    },
    move: {
      left: {
        left: '60px',
      },
    },
  },
});

export default Object.assign(Card, {
  NumberBox: CardNumberBox,
  BottomBox: CardBottomBox,
  Number: CardNumber,
  Name: CardName,
});
