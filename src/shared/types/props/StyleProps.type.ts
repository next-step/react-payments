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
  | `flex${'Wrap' | 'Basis' | 'Grow' | 'Shrink' | 'Direction'}`
  | 'justifyContent'
  | `align${'Items' | 'Content' | 'Self'}`
  | 'order'
  | 'gap'
>;

export type GridProps =
  PickCSSProperties<`grid${'Gap' | 'RowGap' | 'ColumnGap' | 'TemplateRows' | 'TemplateColumns' | 'TemplateAreas' | 'Area'}`>;

export type SpacingProps = PickCSSProperties<
  | 'margin'
  | `margin${'Top' | 'Right' | 'Bottom' | 'Left'}`
  | 'padding'
  | `padding${'Top' | 'Right' | 'Bottom' | 'Left'}`
>;

export type SizeProps = PickCSSProperties<'width' | 'height' | 'minWidth' | 'maxWidth' | 'minHeight' | 'maxHeight'>;

export type TypographyProps = PickCSSProperties<
  'color' | 'fontSize' | 'fontWeight' | 'lineHeight' | 'textAlign' | 'letterSpacing' | 'whiteSpace' | 'textOverflow'
>;

export type BackgroundProps = PickCSSProperties<`background${'Color' | 'Image' | 'Size' | 'Position' | 'Repeat'}`>;

export type BoxModelProps = PickCSSProperties<
  'boxShadow' | 'border' | `border${`Radius` | 'Width' | 'Color' | 'Style'}`
>;

export type PositionProps = PickCSSProperties<'position' | 'top' | 'right' | 'bottom' | 'left'>;

export type OtherProps = PickCSSProperties<'cursor' | 'zIndex' | 'opacity' | 'overflow' | 'transition' | 'outline'>;
