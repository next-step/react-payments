import { fireEvent, render } from '@testing-library/react';

import Header from './Header';

describe('Header', () => {
  const handleClickGoBack = jest.fn();

  const renderHeader = () => render(<Header onClickGoBack={handleClickGoBack} />);
  it('renders title', () => {
    const { container } = renderHeader();

    expect(container).toHaveTextContent('카드 추가');
  });

  it('renders go back button', () => {
    const { getByTitle } = renderHeader();

    expect(getByTitle('back')).toBeInTheDocument();
  });

  it('listens go back button click event', () => {
    const { getByTitle } = renderHeader();

    fireEvent.click(getByTitle('back'));

    expect(handleClickGoBack).toBeCalled();
  });
});
