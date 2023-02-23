import { UI_SIZE, UI_VARIANT, UI_TEXT_ALIGN } from 'constants/ui.constant'

export type UiVariant = (typeof UI_VARIANT)[keyof typeof UI_VARIANT]
export type UiSize = (typeof UI_SIZE)[keyof typeof UI_SIZE]
export type UiTextAlign = (typeof UI_TEXT_ALIGN)[keyof typeof UI_TEXT_ALIGN]
