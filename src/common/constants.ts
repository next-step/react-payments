export const RoutePath = {
  CardList: "/",
  AddCard: "/add-card",
  AddCardComplete: "/add-card-complete",
} as const;

export const CardType = {
  big: "big",
  small: "small",
} as const;

export const MaxLength = {
  CardNumberInput: 4,
  CardExpirationInput: 2,
  OwnerNameInput: 30,
  CardSecurityCodeInput: 3,
  CardPasswordInput: 1,
  Alias: 10,
} as const;

export const InputType = {
  text: "text",
  password: "password",
} as const;

export const InputFieldName = {
  CardNumber1: "CardNumber1",
  CardNumber2: "CardNumber2",
  CardNumber3: "CardNumber3",
  CardNumber4: "CardNumber4",
  MonthExpiration: "MonthExpiration",
  YearExpiration: "YearExpiration",
  OwnerName: "OwnerName",
  CardPassword1: "CardPassword1",
  CardPassword2: "CardPassword2",
  SecurityCode: "SecurityCode",
} as const;
