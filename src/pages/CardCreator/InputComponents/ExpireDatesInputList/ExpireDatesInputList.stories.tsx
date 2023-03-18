import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ErrorContextProvider } from '@/stores/ErrorContext';
import { CardContext, CardProvider, expireDatesInit } from '@/stores/CardContext';

import { ExpireDatesInputListPure } from './ExpireDatesInputList';
import { getInitialCardStore } from '@/stores/CardContext/cardStore';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'CardCreator/ExpireDatesInputList',
  component: ExpireDatesInputListPure,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ExpireDatesInputListPure>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ExpireDatesInputListPure> = (props) => {
  return (
    <ErrorContextProvider>
      <CardProvider value={{ ...getInitialCardStore(), expireDates: props.expireDates! }}>
        <CardContext.Consumer>
          {(store) => <ExpireDatesInputListPure expireDates={store?.expireDates} />}
        </CardContext.Consumer>
      </CardProvider>
    </ErrorContextProvider>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  expireDates: expireDatesInit,
};
