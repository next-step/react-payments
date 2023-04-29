type TReactSetter<T> = React.Dispatch<React.SetStateAction<T>>;
type TEditProperty<T> = { value: T; set: TReactSetter<T> };

export type TCardComponentProps<T = string[]> = {
  value?: T;
  onChange?: (argument: T) => void;
  onFulfill?: (argument: T) => void;
  prevRef?: React.RefObject<HTMLInputElement | HTMLButtonElement>;
  nextRef?: React.RefObject<HTMLInputElement | HTMLButtonElement>;
  forwardedRef?: React.ForwardedRef<HTMLInputElement>;
  children?: React.ReactNode;
  caption?: string;
};

export type TCardEditProperties = {
  cardNumbers: TEditProperty<string[]>;
  expiredMonth: TEditProperty<string>;
  expiredYear: TEditProperty<string>;
  owner: TEditProperty<string>;
  cvc: TEditProperty<string>;
  pin: TEditProperty<string>;
  cardTypeSelected: TEditProperty<boolean>;
};

export type TCardEditRefs = {
  refs: { [key: string]: React.RefObject<HTMLInputElement | HTMLButtonElement> };
};
