export default class CardFormDomain {
  cardNumber: string;

  constructor() {
    this.cardNumber = '';
  }

  changeCardNumber(newCardNumber: string) {
    this.cardNumber = newCardNumber;
  }
}
