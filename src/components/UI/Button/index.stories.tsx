import { ComponentMeta } from '@storybook/react';

import Button from '.';

export default {
    title: 'Components/UI/Button',
    component: Button,
} as ComponentMeta<typeof Button>;

export const Default = () => {
    return <Button>추가하기</Button>;
};
