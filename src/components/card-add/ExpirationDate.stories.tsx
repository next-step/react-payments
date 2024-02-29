import {useState} from 'react';

import type {Meta} from '@storybook/react';

import ExpirationDate from './ExpirationDate';

import type ExpirationDateType from '../../types/ExpirationDateType';

import {MONTH, YEAR} from '../../constants/expirationDate';

type ExpirationDateProps = {
	expirationDate: ExpirationDateType;
	setExpirationDate: (prevState: ExpirationDateType | ((prevState: ExpirationDateType) => ExpirationDateType)) => void;
};

const meta = {
	title: 'CARD-ADD/ExpirationDate',
	component: ExpirationDate,
} satisfies Meta<typeof ExpirationDate>;

export default meta;

export function Basic(args: ExpirationDateProps) {
	const [expirationDate, setExpirationDate] = useState({
		[MONTH]: '12',
		[YEAR]: '23',
	});

	return <ExpirationDate {...args} expirationDate={expirationDate} setExpirationDate={setExpirationDate} />;
}
