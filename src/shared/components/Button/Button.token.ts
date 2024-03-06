import { styleToken } from '@/shared/styles';

export const buttonColorToken = {
  teal: {
    solid: {
      default: {
        backgroundColor: styleToken.color.teal200,
        color: styleToken.color.white,
        border: 'unset',
      },
      hover: {
        backgroundColor: styleToken.color.teal100,
        color: styleToken.color.white,
        border: 'unset',
      },
    },
    outline: {
      default: {
        backgroundColor: styleToken.color.white,
        color: styleToken.color.teal200,
        border: `1px solid ${styleToken.color.teal200}`,
      },
      hover: {
        backgroundColor: styleToken.color.white,
        color: styleToken.color.teal200,
        border: `1px solid ${styleToken.color.teal200}`,
      },
    },
    ghost: {
      default: {
        backgroundColor: styleToken.color.white,
        color: styleToken.color.teal200,
        border: 'unset',
      },
      hover: {
        backgroundColor: styleToken.color.white,
        color: styleToken.color.teal200,
        border: 'unset',
      },
    },
  },
  gray: {
    solid: {
      default: {
        backgroundColor: styleToken.color.gray400,
        color: styleToken.color.white,
        border: 'unset',
      },
      hover: {
        backgroundColor: styleToken.color.gray300,
        color: styleToken.color.white,
        border: 'unset',
      },
    },
    outline: {
      default: {
        backgroundColor: styleToken.color.white,
        color: styleToken.color.gray400,
        border: `1px solid ${styleToken.color.gray400}`,
      },
      hover: {
        backgroundColor: styleToken.color.white,
        color: styleToken.color.gray400,
        border: `1px solid ${styleToken.color.gray400}`,
      },
    },
    ghost: {
      default: {
        backgroundColor: styleToken.color.white,
        color: styleToken.color.gray400,
        border: 'unset',
      },
      hover: {
        backgroundColor: styleToken.color.white,
        color: styleToken.color.gray400,
        border: 'unset',
      },
    },
  },
} as const;
