import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { composeStories } from '@storybook/testing-react';
//
import TestA11y from '@/libs/accessibility';
import * as ButtonStories from './Button.stories';

const { DefaultTemplate } = composeStories(ButtonStories);

describe('Button', () => {
  it('Button', async () => {
    await TestA11y(<DefaultTemplate />);

    const $target = screen.getByRole('button');
    expect($target).toHaveTextContent('다음');

    const spy = vi.spyOn(window, 'alert').mockImplementation(() => {});
    await userEvent.click($target);
    expect(spy).toHaveBeenCalled();
  });
});
