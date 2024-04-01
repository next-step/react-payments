const TYPE = {
  MOBILE: 'mobile',
  DESKTOP: 'desktop',
} as const;

const ERROR = {
  INVALID_LAYOUT_TYPE: '적절하지 않은 LayoutType 입니다.',
} as const;

const ROOT_ID = {
  MOBILE: 'root-mobile',
  DESKTOP: 'root-desktop',
} as const;

const MESSAGE = { ERROR } as const;

export const LAYOUT = { TYPE, MESSAGE, ROOT_ID } as const;
