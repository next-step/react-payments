import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardContext, CardProvider, getInitialCardStore } from '@/stores/CardContext';
import { ErrorContextProvider } from '@/stores/ErrorContext';

import { ExpireMonthInput } from './ExpireMonthInput';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'CardCreator/ExpireDatesInputList/ExpireMonthInput',
  component: ExpireMonthInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    index: { control: 'false' },
    needDividerRender: { type: 'boolean' },
  },
} as ComponentMeta<typeof ExpireMonthInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ExpireMonthInput> = ({ expireDate, ...props }) => {
  return (
    <ErrorContextProvider>
      <CardProvider value={{ ...getInitialCardStore(), expireDates: [expireDate!, expireDate!] }}>
        <CardContext.Consumer>
          {(store) => store && <ExpireMonthInput expireDate={store.expireDates[props.index]} {...props} />}
        </CardContext.Consumer>
      </CardProvider>
    </ErrorContextProvider>
  );
};

export const Month = Template.bind({});
export const Year = Template.bind({});
export const WithDivider = Template.bind({});

Month.args = {
  expireDate: getInitialCardStore().expireDates[0],
  index: 0,
};

WithDivider.args = {
  expireDate: {
    ...getInitialCardStore().expireDates[0],
    value: '12',
  },
  index: 0,
};
