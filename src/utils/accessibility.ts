import { render, RenderOptions } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';
import { axe, toHaveNoViolations, JestAxeConfigureOptions } from 'jest-axe';
import { isValidElement, ReactElement } from 'react';

expect.extend(toHaveNoViolations);
expect.extend(matchers);

export default async function TestA11y(
  ui: ReactElement | HTMLElement,
  options: RenderOptions & { axeOptions?: JestAxeConfigureOptions } = {},
) {
  try {
    const { axeOptions, ...rest } = options;
    const container = isValidElement(ui) ? render(ui, rest).container : ui;
    const results = await axe(container, axeOptions);
    expect(results).toHaveNoViolations();
  } catch (error) {
    console.log(error);
  }
}
