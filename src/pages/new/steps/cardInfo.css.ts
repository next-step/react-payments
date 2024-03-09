import { style, styleVariants } from '@vanilla-extract/css';

export const header = style({
  fontSize: '16px',
  fontWeight: '500',
});
export const cardNumberInputContainer = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  alignItems: 'center',
  backgroundColor: '#ecebf1',
  borderRadius: '8px',
});
export const cardNumberInputBox = style({
  display: 'flex',
  alignItems: 'center',
});
export const expireDateInputContainer = style({
  display: 'grid',
  width: '50%',
  gridTemplateColumns: '1fr auto 1fr',
  alignItems: 'center',
  backgroundColor: '#ecebf1',
  borderRadius: '8px',
});

export const passwordInputContainer = style({
  display: 'grid',
  width: 'fit-content',
  gap: '8px',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
});

export const passwordPinBox = style({
  width: '42.5px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
});

export const wFull = style({
  width: '100%',
  flexGrow: 1,
});

export const textCenter = style({
  textAlign: 'center',
});
export const textEnd = style({
  textAlign: 'end',
});
export const textPrimary = style({
  color: '#04C09E',
});
export const delimiter = styleVariants({
  true: [
    textPrimary,
    {
      opacity: 1,
    },
  ],
  false: [
    textPrimary,
    {
      opacity: 0,
    },
  ],
});
export const cvcInputBox = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});
export const cvcInputElem = style([
  textCenter,
  {
    width: '60px',
    letterSpacing: '8px',
  },
]);

export const toolTipBox = style({
  flexGrow: 1,
});
