export enum CardPasswordNumber {
  Zero = 0,
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5,
  Six = 6,
  Seven = 7,
  Eight = 8,
  Nine = 9,
}

export const CARD_PASSWORD_NUMBERS = [
  CardPasswordNumber.Zero,
  CardPasswordNumber.One,
  CardPasswordNumber.Two,
  CardPasswordNumber.Three,
  CardPasswordNumber.Four,
  CardPasswordNumber.Five,
  CardPasswordNumber.Six,
  CardPasswordNumber.Seven,
  CardPasswordNumber.Eight,
  CardPasswordNumber.Nine,
] as const;
