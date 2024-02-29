import {useState} from 'react';

import type {Meta} from '@storybook/react';

import CardPassword from './CardPassword';

import {type FIRST_NUMBER, type SECOND_NUMBER} from '../../constants/cardNumber';

type CardPasswordType = {
	[FIRST_NUMBER]: string;
	[SECOND_NUMBER]: string;
};

const meta = {
	title: 'CARD-ADD/CardPassword',
	component: CardPassword,
} satisfies Meta<typeof CardPassword>;

export default meta;

export function Basic(args: CardPasswordType) {
	const [cardPassword, setCardPassword] = useState({
		firstNumber: '1',
		secondNumber: '5',
	});

	return <CardPassword {...args} cardPassword={cardPassword} setCardPassword={setCardPassword} />;
}
