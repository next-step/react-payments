import {useState} from 'react';

import type {Meta, StoryObj} from '@storybook/react';

import CardNumber from './CardNumber';

import type CardNumberType from '../../types/CardNumberType';

const meta = {
	title: 'CARD-ADD/CardNumber',
	component: CardNumber,
} satisfies Meta<typeof CardNumber>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = args => {
	const [cardNumber, setCardNumber] = useState<CardNumberType>({
		firstNumber: '1234',
		secondNumber: '5678',
		thirdNumber: '1357',
		fourthNumber: '2468',
	});

	return <CardNumber {...args} cardNumber={cardNumber} setCardNumber={setCardNumber} />;
};
