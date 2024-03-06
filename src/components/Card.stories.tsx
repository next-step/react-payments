import type {Meta, StoryObj} from '@storybook/react';

import Card from './Card';

const cardNumber = {
	firstNumber: '1111',
	secondNumber: '1111',
	thirdNumber: '1111',
	fourthNumber: '1111',
};

const expirationDate = {
	month: '12',
	year: '23',
};

const meta = {
	title: 'CARD/Card',
	component: Card,
	argTypes: {
		variant: {
			options: ['small', 'big'],
			control: {type: 'radio'},
		},
		expirationDate: {
			control: {type: 'object'},
		},
	},
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
	args: {
		variant: 'small',
		cardNumber,
		ownerName: 'SoJeong Yoo',
		expirationDate,
	},
};

export const Big: Story = {
	args: {
		variant: 'big',
		cardNumber,
		ownerName: 'SoJeong Yoo',
		expirationDate,
	},
};
