import { Properties, ShorthandsProperties } from '@/styles/sprinkles.css'

type ShorthandsProps = {
  [key in keyof ShorthandsProperties]?: keyof ShorthandsProperties[key]
}

export type AtomicProps = {
  [key in keyof Properties]?: Properties[key] extends readonly (string | number)[]
    ? Properties[key][number]
    : keyof Properties[key]
} & ShorthandsProps

export interface InlineStyleProps {
  /** inline css width property */
  width?: string
  /** inline css height property */
  height?: string
  /** inline css min-width property */
  minWidth?: string
  /** inline css min-height property */
  minHeight?: string
  /** inline css max-width property */
  maxWidth?: string
  /** inline css max-height property */
  maxHeight?: string
}

export const inlineStylePropsSet = new Set([
  'width',
  'height',
  'minWidth',
  'minHeight',
  'maxWidth',
  'maxHeight',
] as const)

export interface SpaceProps extends ShorthandsProps {
  /** css margin-left property */
  marginLeft?: AtomicProps['marginLeft']
  /** css margin-right property */
  marginRight?: AtomicProps['marginRight']
  /** css margin-top property */
  marginTop?: AtomicProps['marginTop']
  /** css margin-bottom property */
  marginBottom?: AtomicProps['marginBottom']
  /** css padding-top property */
  paddingTop?: AtomicProps['paddingTop']
  /** css padding-bottom property */
  paddingBottom?: AtomicProps['paddingBottom']
  /** css padding-left property */
  paddingLeft?: AtomicProps['paddingLeft']
  /** css padding-right property */
  paddingRight?: AtomicProps['paddingRight']
}

export type LayoutProps = SpaceProps & InlineStyleProps

export const getLayoutProps = <T extends LayoutProps>(props: T) => {
  const {
    margin,
    marginX,
    marginY,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    padding,
    paddingX,
    paddingY,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    width,
    minWidth,
    maxWidth,
    height,
    minHeight,
    maxHeight,
    ...rest
  } = props

  return {
    layoutProps: {
      margin,
      marginX,
      marginY,
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
      padding,
      paddingX,
      paddingY,
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight,
      width,
      minWidth,
      maxWidth,
      height,
      minHeight,
      maxHeight,
    },
    ...rest,
  }
}
