import { createGlobalTheme } from '@vanilla-extract/css'
import * as tokens from '@/styles/tokens'

export const vars = createGlobalTheme(':root', {
  ...tokens,
})
