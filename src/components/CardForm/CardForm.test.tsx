import { fireEvent, render } from '@testing-library/react';

import given from 'given2';

import CardFormDomain from '../../domains/cardFormDomain';

import CardForm from './CardForm';

describe('CardForm', () => {
  const presenter = {
    cardNumber: given?.cardNumber || '',
    changeCardNumber: jest.fn(),
  };

  const renderCardForm = () => render(
    <CardForm
      onClickGoBack={jest.fn()}
      cardFormDomain={presenter as CardFormDomain}
    />,
  );

  beforeEach(() => {
    given('cardNumber', () => '');
  });

  it('renders without crash', () => {
    renderCardForm();
  });

  it('renders card-number input', () => {
    const { getByLabelText } = renderCardForm();

    expect(getByLabelText('카드 번호')).toBeInTheDocument();
  });

  it('listens change event when change card-number input', () => {
    const { getByRole } = renderCardForm();

    expect(presenter.changeCardNumber).toBeCalledTimes(0);

    fireEvent.change(getByRole('textbox'), {
      target: { value: '1234' },
    });

    expect(presenter.changeCardNumber).toBeCalledTimes(1);
  });

  it('renders "-" every 4 digit', () => {
    const { queryByText } = renderCardForm();

    expect(queryByText('-')).toBeInTheDocument();
  });
});
