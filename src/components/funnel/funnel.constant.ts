const ERROR = {
  NOT_INITIALIZED: 'setStep 함수의 인자로 이동할 Step을 넣어주세요.',
} as const;

const MESSAGE = { ERROR } as const;

export const FUNNEL = { MESSAGE } as const;
