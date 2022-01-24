export const RoutePath = {
  CardList: "/",
  AddCard: "/add-card",
  AddCardComplete: "/add-card-complete",
} as const;

export const CardType = {
  big: "big",
  small: "small",
} as const;

export type CardData = {
  cardName?: string;
  cardNumber?: string;
  expired?: string;
  userName?: string;
  alias?: string;
};

export const MaxLength = {
  CardNumberInput: 4,
  CardExpirationInput: 2,
  OwnerNameInput: 30,
  CardSecurityCodeInput: 3,
  CardPasswordInput: 1,
} as const;

export const InputType = {
  text: "text",
  password: "password",
} as const;

export type InputTypeAttribute = keyof typeof InputType;

export const DigitRegex = /^$|^\d*$/;
export const AlphabetRegex = /^$|^[A-Za-z]*$/;
