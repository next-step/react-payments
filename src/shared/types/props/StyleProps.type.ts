import { CSSProperties } from 'react';

export type StyleProps = FlexboxProps &
  SpacingProps &
  SizeProps &
  TypographyProps &
  BackgroundProps &
  BoxModelProps &
  PositionProps &
  OtherProps;

export type FlexboxProps = {
  display?: CSSProperties['display'];
  flexDirection?: CSSProperties['flexDirection'];
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
  alignContent?: CSSProperties['alignContent'];
  flexWrap?: CSSProperties['flexWrap'];
  flexBasis?: CSSProperties['flexBasis'];
  flexGrow?: CSSProperties['flexGrow'];
  flexShrink?: CSSProperties['flexShrink'];
  order?: CSSProperties['order'];
  alignSelf?: CSSProperties['alignSelf'];
  gap?: CSSProperties['gap'];
};

export type SpacingProps = {
  margin?: CSSProperties['margin'];
  marginTop?: CSSProperties['marginTop'];
  marginRight?: CSSProperties['marginRight'];
  marginBottom?: CSSProperties['marginBottom'];
  marginLeft?: CSSProperties['marginLeft'];
  padding?: CSSProperties['padding'];
  paddingTop?: CSSProperties['paddingTop'];
  paddingRight?: CSSProperties['paddingRight'];
  paddingBottom?: CSSProperties['paddingBottom'];
  paddingLeft?: CSSProperties['paddingLeft'];
};

export type SizeProps = {
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  minWidth?: CSSProperties['minWidth'];
  maxWidth?: CSSProperties['maxWidth'];
  minHeight?: CSSProperties['minHeight'];
  maxHeight?: CSSProperties['maxHeight'];
};

export type TypographyProps = {
  color?: CSSProperties['color'];
  fontSize?: CSSProperties['fontSize'];
  fontWeight?: CSSProperties['fontWeight'];
  lineHeight?: CSSProperties['lineHeight'];
  textAlign?: CSSProperties['textAlign'];
};

export type BackgroundProps = {
  backgroundColor?: CSSProperties['backgroundColor'];
  backgroundImage?: CSSProperties['backgroundImage'];
  backgroundSize?: CSSProperties['backgroundSize'];
  backgroundPosition?: CSSProperties['backgroundPosition'];
  backgroundRepeat?: CSSProperties['backgroundRepeat'];
};

export type BoxModelProps = {
  boxShadow?: CSSProperties['boxShadow'];
  borderRadius?: CSSProperties['borderRadius'];
  border?: CSSProperties['border'];
  borderWidth?: CSSProperties['borderWidth'];
  borderColor?: CSSProperties['borderColor'];
  borderStyle?: CSSProperties['borderStyle'];
};

export type PositionProps = {
  position?: CSSProperties['position'];
  top?: CSSProperties['top'];
  right?: CSSProperties['right'];
  bottom?: CSSProperties['bottom'];
  left?: CSSProperties['left'];
};

export type OtherProps = {
  cursor?: CSSProperties['cursor'];
  zIndex?: CSSProperties['zIndex'];
  opacity?: CSSProperties['opacity'];
  overflow?: CSSProperties['overflow'];
  transition?: CSSProperties['transition'];
};
