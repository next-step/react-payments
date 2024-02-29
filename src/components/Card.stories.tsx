import type {Meta, StoryObj} from '@storybook/react';

import Card from './Card';

import {
	FIRST_NUMBER, FOURTH_NUMBER, SECOND_NUMBER, THIRD_NUMBER,
} from '../constants/cardNumber';
import {MONTH, YEAR} from '../constants/expirationDate';

const cardNumber = {
	[FIRST_NUMBER]: '1111',
	[SECOND_NUMBER]: '1111',
	[THIRD_NUMBER]: '1111',
	[FOURTH_NUMBER]: '1111',
};

const expirationDate = {
	[MONTH]: '12',
	[YEAR]: '23',
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
