import { fireEvent, render } from '@testing-library/react';

import App from './App';

import CardFormDomain from './domains/cardFormDomain';

const DOMAINS = {
  cardFormDomain: new CardFormDomain(),
};

describe('App', () => {
  const renderApp = () => render(<App domains={DOMAINS} />);

  it('renders without crash', () => {
    renderApp();
  });

  it('renders card-form title', () => {
    const { getByTitle, getByRole } = renderApp();

    fireEvent.click(getByTitle('back'));

    expect(getByRole('heading', { name: '카드 목록' })).toBeInTheDocument();
  });
});
