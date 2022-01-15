import { render } from '@testing-library/react';

import Card from './Card';

describe('Card', () => {
  const renderCard = (
    {
      name, expireDate, company, cardNumber,
    }:
    { name?: string, expireDate?: string, company?: string, cardNumber?: string } = {},
  ) => render(
    <Card name={name || ''} expireDate={expireDate || ''} company={company || ''} cardNumber={cardNumber || ''} />,
  );

  it('renders name, expire date, company', () => {
    const { getByText } = renderCard({
      name: 'dongwoo',
      expireDate: '12/20',
      company: 'samsung',
      cardNumber: '1111 1111 1111 1111',
    });

    expect(getByText('dongwoo')).toBeInTheDocument();
    expect(getByText('12/20')).toBeInTheDocument();
    expect(getByText('samsung')).toBeInTheDocument();
    expect(getByText('1111 1111 1111 1111')).toBeInTheDocument();
  });

  context('without name, expire date', () => {
    it('renders default content', () => {
      const { getByText } = renderCard();

      expect(getByText('NAME')).toBeInTheDocument();
      expect(getByText('MM/YY')).toBeInTheDocument();
    });
  });
});
