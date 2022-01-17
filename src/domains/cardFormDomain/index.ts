export default class CardFormDomain {
  cardNumber: string;

  constructor() {
    this.cardNumber = '';
  }

  changeCardNumber(newCardNumber: string) {
    if (Number(newCardNumber) || Number(newCardNumber) === 0) {
      this.cardNumber = newCardNumber;
    }
  }
}
