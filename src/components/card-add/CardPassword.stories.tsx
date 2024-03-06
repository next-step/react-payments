import {useState} from 'react';

import type {Meta} from '@storybook/react';

import CardPassword from './CardPassword';

import type CardPasswordNumberType from '../../types/CardPasswordNumberType';

const meta = {
	title: 'CARD-ADD/CardPassword',
	component: CardPassword,
} satisfies Meta<typeof CardPassword>;

export default meta;

export function Basic(args: CardPasswordNumberType) {
	const [cardPassword, setCardPassword] = useState({
		firstNumber: '1',
		secondNumber: '5',
	});

	return <CardPassword {...args} cardPassword={cardPassword} setCardPassword={setCardPassword} />;
}
