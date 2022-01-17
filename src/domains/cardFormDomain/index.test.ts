import CardFormDomain from '.';

describe('CardFormDomain', () => {
  describe('changeCardNumber', () => {
    it('changes cardNumber', () => {
      const cardFormDomain = new CardFormDomain();

      cardFormDomain.changeCardNumber('1234');

      expect(cardFormDomain.cardNumber).toBe('1234');
    });
  });
});
