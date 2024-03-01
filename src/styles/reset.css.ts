// reference: mirror-xyz/degen/components/src/css/reset.css.ts
import { style } from '@vanilla-extract/css'
import { vars } from './vars.css'

export const base = style({
  // Prevent padding and border from affecting element width
  boxSizing: 'border-box',

  // Remove margin and padding in all browsers
  margin: 0,
  padding: 0,

  // Allow adding border to element by just adding borderWidth
  borderColor: vars.color.black,
  borderStyle: vars.borderStyle.solid,
  borderWidth: vars.borderWidth.none,

  fontSize: '100%',

  verticalAlign: 'baseline',
})

const block = style({
  display: 'block',
})

const button = style({
  background: 'none',
})

const list = style({
  listStyle: 'none',
})

const quote = style({
  quotes: 'none',
  selectors: {
    '&:before, &:after': {
      content: "''",
    },
  },
})

const table = style({
  borderCollapse: 'collapse',
  borderSpacing: 0,
})

const appearance = style({
  appearance: 'none',
})

const field = style([
  block,
  appearance,
  style({
    outline: 'none',
    '::placeholder': {
      opacity: '0.1',
    },
  }),
])

// Custom reset rules
const mark = style({
  color: 'inherit',
})

const select = style([
  field,
  style({
    selectors: {
      '&::-ms-expand': {
        display: 'none',
      },
    },
  }),
])

const input = style([
  field,
  style({
    selectors: {
      // Hide browser increment/decrement buttons
      '&::-webkit-outer-spin-button': {
        WebkitAppearance: 'none',
      },
      '&::-webkit-inner-spin-button': {
        WebkitAppearance: 'none',
      },
      // Hide browser clear input button
      '&::-ms-clear': {
        display: 'none',
      },
      '&::-webkit-search-cancel-button': {
        WebkitAppearance: 'none',
      },
    },
  }),
])

const a = style({
  textDecoration: 'none',
  color: 'inherit',
})

export const element = {
  article: block,
  aside: block,
  details: block,
  div: block,
  figcaption: block,
  figure: block,
  footer: block,
  header: block,
  hgroup: block,
  menu: block,
  nav: block,
  section: block,
  ul: list,
  ol: list,
  blockquote: quote,
  q: quote,
  a,
  button,
  table,
  mark,
  select,
  textarea: field,
  input,
}

export type Element = keyof typeof element
