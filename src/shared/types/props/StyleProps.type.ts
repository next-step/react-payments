import { CSSProperties } from 'react';

export type StyleProps = FlexboxProps &
  GridProps &
  SpacingProps &
  SizeProps &
  TypographyProps &
  BackgroundProps &
  BoxModelProps &
  PositionProps &
  OtherProps;

type PickCSSProperties<Properties extends keyof CSSProperties> = Partial<Pick<CSSProperties, Properties>>;

export type FlexboxProps = PickCSSProperties<
  | 'display'
  | 'flex'
  | 'flexDirection'
  | 'justifyContent'
  | 'alignItems'
  | 'alignContent'
  | 'flexWrap'
  | 'flexBasis'
  | 'flexGrow'
  | 'flexShrink'
  | 'order'
  | 'alignSelf'
  | 'gap'
>;

export type GridProps = PickCSSProperties<
  | 'gridGap'
  | 'gridRowGap'
  | 'gridColumnGap'
  | 'gridTemplateRows'
  | 'gridTemplateColumns'
  | 'gridTemplateAreas'
  | 'gridArea'
>;

export type SpacingProps = PickCSSProperties<
  | 'margin'
  | 'marginTop'
  | 'marginRight'
  | 'marginBottom'
  | 'marginLeft'
  | 'padding'
  | 'paddingTop'
  | 'paddingRight'
  | 'paddingBottom'
  | 'paddingLeft'
>;

export type SizeProps = PickCSSProperties<'width' | 'height' | 'minWidth' | 'maxWidth' | 'minHeight' | 'maxHeight'>;

export type TypographyProps = PickCSSProperties<
  'color' | 'fontSize' | 'fontWeight' | 'lineHeight' | 'textAlign' | 'letterSpacing' | 'whiteSpace' | 'textOverflow'
>;

export type BackgroundProps = PickCSSProperties<
  'backgroundColor' | 'backgroundImage' | 'backgroundSize' | 'backgroundPosition' | 'backgroundRepeat'
>;

export type BoxModelProps = PickCSSProperties<
  'boxShadow' | 'borderRadius' | 'border' | 'borderWidth' | 'borderColor' | 'borderStyle'
>;

export type PositionProps = PickCSSProperties<'position' | 'top' | 'right' | 'bottom' | 'left'>;

export type OtherProps = PickCSSProperties<'cursor' | 'zIndex' | 'opacity' | 'overflow' | 'transition' | 'outline'>;
