import { fireEvent, render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders without crash', () => {
    render(<App />);
  });

  it('renders card-form title', () => {
    const { getByTitle, getByRole } = render(<App />);

    fireEvent.click(getByTitle('back'));

    expect(getByRole('heading', { name: '카드 목록' })).toBeInTheDocument();
  });
});
