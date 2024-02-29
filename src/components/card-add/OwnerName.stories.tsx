import {useState} from 'react';

import type {Meta} from '@storybook/react';

import OwnerName from './OwnerName';

type OwnerNameProps = {
	ownerName: string;
	setOwnerName: (value: string) => void;
};

const meta = {
	title: 'CARD-ADD/OwnerName',
	component: OwnerName,
} satisfies Meta<typeof OwnerName>;

export default meta;

export function Basic(args: OwnerNameProps) {
	const [ownerName, setOwnerName] = useState('');

	return <OwnerName {...args} ownerName={ownerName} setOwnerName={setOwnerName} />;
}
