const UI_VARIANT = {
  FILL: 'fill',
  OUTLINE: 'outline',
  GHOST: 'ghost',
} as const

const UI_SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
} as const

const UI_TEXT_ALIGN = {
  CENTER: 'center',
  LEFT: 'left',
  RIGHT: 'right',
} as const

export type UiVariant = (typeof UI_VARIANT)[keyof typeof UI_VARIANT]
export type UiSize = (typeof UI_SIZE)[keyof typeof UI_SIZE]
export type UiTextAlign = (typeof UI_TEXT_ALIGN)[keyof typeof UI_TEXT_ALIGN]

export { UI_VARIANT, UI_SIZE, UI_TEXT_ALIGN }
