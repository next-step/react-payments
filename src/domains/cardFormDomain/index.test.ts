import CardFormDomain from '.';

describe('CardFormDomain', () => {
  describe('changeCardNumber', () => {
    it('changes cardNumber', () => {
      const cardFormDomain = new CardFormDomain();

      cardFormDomain.changeCardNumber('1234');

      expect(cardFormDomain.cardNumber).toBe('1234');
    });

    context('when cardNumber isn\'t number', () => {
      it('doesn\'t change cardNumber', () => {
        const cardFormDomain = new CardFormDomain();

        cardFormDomain.changeCardNumber('xxxx');

        expect(cardFormDomain.cardNumber).not.toBe('xxxx');
      });
    });
  });
});
