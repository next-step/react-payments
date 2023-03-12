import { ComponentMeta, ComponentStory } from '@storybook/react';

import Card, { CardSize, CardVariant } from '.';

export default {
    title: 'Components/UI/Card',
    component: Card,
    argTypes: {
        size: {
            options: [...Object.keys(CardSize)],
            control: { type: 'radio' },
        },
        variant: {
            options: [...Object.keys(CardVariant)],
            control: { type: 'select' },
        },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;
export const Default = Template.bind({});
Default.args = {
    size: 'large',
    color: 'black',
};
