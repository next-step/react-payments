import { UI_SIZE, UI_TYPE, UI_VARIANT } from 'constants/ui.constant'

export type UiVariant = (typeof UI_VARIANT)[keyof typeof UI_VARIANT]
export type UiType = (typeof UI_TYPE)[keyof typeof UI_TYPE]
export type UiSize = (typeof UI_SIZE)[keyof typeof UI_SIZE]
