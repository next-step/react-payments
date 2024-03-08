import { styleToken } from './styleToken';

const colorValues = Object.values(styleToken.color);
const fontSizeValues = Object.values(styleToken.fontSize);
const fontWeightValues = Object.values(styleToken.fontWeight);
const containerTags = [
  'article',
  'section',
  'div',
  'main',
  'nav',
  'footer',
  'header',
  'aside',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'p',
  'span',
  'ul',
  'ol',
  'li',
  'figure',
  'figcaption',
  'blockquote',
  'pre',
  'code',
];

const argTypes = {
  as: {
    options: containerTags,
  },
  display: {
    options: ['flex', 'block', 'inline', 'inline-block', 'none', 'grid', 'inline-flex', 'inline-grid'],
  },
  flexDirection: {
    options: ['row', 'column', 'row-reverse', 'column-reverse'],
  },
  justifyContent: {
    options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
  },
  alignItems: {
    options: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
  },
  alignContent: {
    options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch'],
  },
  flexWrap: {
    options: ['nowrap', 'wrap', 'wrap-reverse'],
  },
  flexBasis: {
    control: 'text',
  },
  flexGrow: {
    control: 'text',
  },
  flexShrink: {
    control: 'text',
  },
  order: {
    control: 'number',
  },
  alignSelf: {
    options: ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
  },
  gap: {
    control: 'text',
  },
  margin: {
    control: 'text',
  },
  marginTop: {
    control: 'text',
  },
  marginRight: {
    control: 'text',
  },
  marginBottom: {
    control: 'text',
  },
  marginLeft: {
    control: 'text',
  },
  padding: {
    control: 'text',
  },
  paddingTop: {
    control: 'text',
  },
  paddingRight: {
    control: 'text',
  },
  paddingBottom: {
    control: 'text',
  },
  paddingLeft: {
    control: 'text',
  },
  width: {
    control: 'text',
  },
  height: {
    control: 'text',
  },
  minWidth: {
    control: 'text',
  },
  maxWidth: {
    control: 'text',
  },
  minHeight: {
    control: 'text',
  },
  maxHeight: {
    control: 'text',
  },
  color: {
    options: colorValues,
  },
  backgroundColor: {
    options: colorValues,
  },
  fontSize: {
    options: fontSizeValues,
  },
  fontWeight: {
    options: fontWeightValues,
  },
  lineHeight: {
    control: 'text',
  },
  textAlign: {
    options: ['left', 'right', 'center', 'justify', 'initial', 'inherit'],
  },
  backgroundImage: {
    control: 'text',
  },
  backgroundSize: {
    control: 'text',
  },
  backgroundPosition: {
    control: 'text',
  },
  backgroundRepeat: {
    control: 'text',
  },
  boxShadow: {
    control: 'text',
  },
  borderRadius: {
    control: 'text',
  },
  border: {
    control: 'text',
  },
  borderWidth: {
    control: 'text',
  },
  borderColor: {
    options: colorValues,
  },
  borderStyle: {
    options: ['none', 'solid', 'dotted', 'dashed', 'double', 'groove', 'ridge', 'inset', 'outset'],
  },
  position: {
    options: ['static', 'relative', 'fixed', 'absolute', 'sticky'],
  },
  top: {
    control: 'text',
  },
  right: {
    control: 'text',
  },
  bottom: {
    control: 'text',
  },
  left: {
    control: 'text',
  },
  cursor: {
    options: [
      'auto',
      'default',
      'none',
      'pointer',
      'wait',
      'text',
      'move',
      'not-allowed',
      'crosshair',
      'zoom-in',
      'zoom-out',
    ],
  },
  zIndex: {
    control: 'number',
  },
  opacity: {
    control: 'range',
    min: 0,
    max: 1,
    step: 0.1,
  },
  overflow: {
    options: ['visible', 'hidden', 'scroll', 'auto'],
  },
  transition: {
    control: 'text',
  },
};

export const storybookControls = {
  argTypes,
};
