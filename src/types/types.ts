export interface IInputState<T = string> {
  value?: T;
  isValidate?: boolean;
}

// 하나의 InputElement에 해당하는 타입
export interface IInputElement<T = string> extends IInputState<T> {
  ref?: HTMLInputElement | null;
  setRef?: (this: IInputState<any>, ref?: HTMLInputElement | null) => void;
}
