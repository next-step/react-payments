import { ReactNode } from 'react';
import { RenderOptions, render as originRender } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

export const render = (component: ReactNode, options: RenderOptions = {}) => {
  const user = userEvent.setup();
  return {
    user,
    ...originRender(component, options),
  };
};
