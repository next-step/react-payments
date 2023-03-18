import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardContext, CardProvider, expireDatesInit } from '@/stores/CardContext';
import { initialCardStore } from '@/stores/CardContext/cardStore';
import { ErrorContextProvider } from '@/stores/ErrorContext';

import { ExpireDateInput } from './ExpireDateInput';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'CardCreator/ExpireDatesInputList/ExpireDateInput',
  component: ExpireDateInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    index: { control: 'false' },
    needDividerRender: { type: 'boolean' },
  },
} as ComponentMeta<typeof ExpireDateInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ExpireDateInput> = ({ expireDate, ...props }) => {
  return (
    <ErrorContextProvider>
      <CardProvider value={{ ...initialCardStore, expireDates: [expireDate!, expireDate!] }}>
        <CardContext.Consumer>
          {(store) => store && <ExpireDateInput expireDate={store.expireDates[props.index]} {...props} />}
        </CardContext.Consumer>
      </CardProvider>
    </ErrorContextProvider>
  );
};

export const Month = Template.bind({});
export const Year = Template.bind({});
export const WithDivider = Template.bind({});

Month.args = {
  expireDate: expireDatesInit[0],
  index: 0,
};

Year.args = {
  expireDate: expireDatesInit[1],
  index: 1,
};

WithDivider.args = {
  expireDate: {
    ...expireDatesInit[0],
    value: '12',
  },
  index: 0,
};
