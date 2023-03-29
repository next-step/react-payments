import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardContext, CardProvider, getInitialCardStore } from '@/stores/CardContext';

import { ExpireDatesInputList } from './ExpireDatesInputList';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'CardCreator/ExpireDatesInputList',
  component: ExpireDatesInputList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ExpireDatesInputList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ExpireDatesInputList> = (props) => {
  return (
    <CardProvider value={{ ...getInitialCardStore(), expireDates: props.expireDates! }}>
      <CardContext.Consumer>
        {(store) => store && <ExpireDatesInputList expireDates={store?.expireDates} />}
      </CardContext.Consumer>
    </CardProvider>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  expireDates: getInitialCardStore().expireDates,
};
