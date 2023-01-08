import { screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
//
import TestA11y from '@/libs/accessibility';
import { 카드_테마, 카드_기본번호 } from '@/constants';
import * as CardStories from './Card.stories';

const { DefaultTemplate } = composeStories(CardStories);

describe('Card 테마를 테스트한다.', () => {
  const cardTheme = Object.fromEntries(Object.entries(카드_테마).map((a) => a.reverse()));

  it('카드가 비어있는 경우 Empty Card 이다.', async () => {
    await TestA11y(<DefaultTemplate isEmpty />);

    const $target = screen.getByTestId('card-top');
    waitFor(() => expect($target).toBeEmptyDOMElement());
  });

  it('카드 테마가 없는 경우 카드 타이틀은 공백이다.', async () => {
    await TestA11y(<DefaultTemplate />);

    const $target = screen.getByTestId('card-title');
    waitFor(() => expect($target).toHaveTextContent(''));
  });

  it.each(Object.entries(카드_기본번호))(
    '카드 앞 자리가 %s 인 경우 카드 타이틀은 %s 이다.',
    async (first, second) => {
      await TestA11y(<DefaultTemplate cardNumber={first} />);

      const $target = screen.getByTestId('card-title');
      waitFor(() => expect($target).toHaveTextContent(cardTheme[second]));
    },
  );
});
