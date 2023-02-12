type EventAddType = <T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args: Parameters<T['removeEventListener']> | [string, (params: any) => any | null, ...any]
) => void;

type EventRemoveType = <T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args: Parameters<T['removeEventListener']> | [string, (params: any) => any | null, ...any]
) => void;

export const eventAdd: EventAddType = (obj, ...args) => {
  if (!obj || !obj.addEventListener) return;

  obj.addEventListener(...(args as Parameters<HTMLElement['addEventListener']>));
};

export const eventRemove: EventRemoveType = (obj, ...args) => {
  if (!obj || !obj.removeEventListener) return;

  obj.removeEventListener(...(args as Parameters<HTMLElement['removeEventListener']>));
};
