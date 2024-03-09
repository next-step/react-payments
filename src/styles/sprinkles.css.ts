import '@/styles/reset.css'
import { vars } from '@/styles/vars.css.ts'
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'

const flexAlignment = ['flex-start', 'center', 'flex-end', 'stretch'] as const

const flexibility = [0, 1, 2, 3, 4] as const

export const properties = {
  // layout
  display: ['none', 'flex', 'block', 'inline', 'inline-block', 'grid'],
  flexDirection: ['column', 'row', 'column-reverse', 'row-reverse'],
  flexGrow: flexibility,
  flexShrink: flexibility,
  flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],
  justifyContent: [...flexAlignment, 'space-between', 'space-around'],
  justifySelf: flexAlignment,
  alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
  textAlign: ['left', 'center', 'right'],
  overflow: ['auto', 'hidden', 'visible', 'scroll'],
  verticalAlign: ['top', 'middle', 'bottom'],
  position: ['relative', 'absolute', 'fixed', 'static', 'sticky'],
  zIndex: vars.zIndex,

  // spacing
  paddingTop: vars.space,
  paddingBottom: vars.space,
  paddingLeft: vars.space,
  paddingRight: vars.space,
  marginTop: vars.space,
  marginBottom: vars.space,
  marginLeft: vars.space,
  marginRight: vars.space,
  gap: vars.space,

  // radius
  borderRadius: vars.radius,
  borderBottomLeftRadius: vars.radius,
  borderBottomRightRadius: vars.radius,
  borderTopLeftRadius: vars.radius,
  borderTopRightRadius: vars.radius,

  // color
  color: vars.color,
  backgroundColor: vars.color,
  borderColor: vars.color,

  // font props
  whiteSpace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'initial', 'inherit'],
  wordBreak: ['normal', 'break-all', 'keep-all', 'break-word'],
  wordWrap: ['normal', 'break-word', 'initial', 'inherit'],

  // other props
  cursor: ['auto', 'default', 'none', 'pointer'],
} as const

export type Properties = typeof properties

export type ShorthandsProperties = {
  /** css padding-left, padding-right 축약 속성 */
  paddingX: typeof vars.space
  /** css padding-top, padding-bottom 축약 속성 */
  paddingY: typeof vars.space
  /** css padding 축약 속성 */
  padding: typeof vars.space
  /** css margin-left, margin-right 축약 속성 */
  marginX: typeof vars.space
  /** css margin-top, margin-bottom 축약 속성 */
  marginY: typeof vars.space
  /** css margin 축약 속성 */
  margin: typeof vars.space
}

export const sprinkleProperties = defineProperties({
  properties,
  shorthands: {
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
  },
})

export const sprinkles = createSprinkles(sprinkleProperties)

export type Sprinkles = Parameters<typeof sprinkles>[0]
