import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardContext, CardProvider, getInitialCardStore } from '@/stores/CardContext';

import { SecurityCodesInputList } from './SecurityCodesInputList';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'CardCreator/SecurityCodesInputList',
  component: SecurityCodesInputList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SecurityCodesInputList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SecurityCodesInputList> = ({ securityCodes }) => {
  return (
    <CardProvider value={{ ...getInitialCardStore(), securityCodes: securityCodes! }}>
      <CardContext.Consumer>
        {(store) => store && <SecurityCodesInputList securityCodes={store.securityCodes} />}
      </CardContext.Consumer>
    </CardProvider>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  securityCodes: getInitialCardStore().securityCodes,
};
