import { ComponentMeta, ComponentStory } from '@storybook/react';

import CreditCard from '.';

export default {
    title: 'Components/UI/CreditCard',
    component: CreditCard,
} as ComponentMeta<typeof CreditCard>;

const Template: ComponentStory<typeof CreditCard> = (args) => (
    <CreditCard {...args} />
);
export const Default = Template.bind({});
Default.args = {};

const MOCK_CARD_INFO = {
    CARD_NUMBERS: {
        1: '1111',
        2: '1111',
        3: '1111',
        4: '1111',
    },
    OWNER_NAME: 'Dahye',
    EXPIRE_DATE: { month: '10', year: '66' },
};

export const SmallCard = Template.bind({});
SmallCard.args = {
    size: 'small',
    cardInfo: MOCK_CARD_INFO,
};

export const WithCardInfo = Template.bind({});
WithCardInfo.args = {
    cardInfo: MOCK_CARD_INFO,
};
