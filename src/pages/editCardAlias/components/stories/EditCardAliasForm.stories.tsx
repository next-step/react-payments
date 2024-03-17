import { Meta, StoryObj } from '@storybook/react';
import EditCardAliasForm from '../EditCardAliasForm';
import { CardsProvider } from '@contexts';

const meta = {
	title: 'PAGES/Cards/EditCardAliasForm',
	component: EditCardAliasForm,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof EditCardAliasForm>;

type Story = StoryObj<typeof EditCardAliasForm>;

const TestWithCardAlias = () => {
	const cardData = {
		id: '2',
		cardNumber: '1234123412341234',
		cardExpiredDate: '1124',
		cardHolderName: 'GAEUN KIM',
		cardSecurityCode: '123',
		cardPassword: '12',
		createdAt: new Date('2023-01-01'),
		cardAlias: '현대카드',
	};
	return <EditCardAliasForm data={cardData} />;
};

export const WithCardAlias: Story = {
	render: () => (
		<CardsProvider>
			<TestWithCardAlias />,
		</CardsProvider>
	),
};

const TestWithoutCardAlias = () => {
	const cardData = {
		id: '2',
		cardNumber: '1234123412341234',
		cardExpiredDate: '1124',
		cardHolderName: 'GAEUN KIM',
		cardSecurityCode: '123',
		cardPassword: '12',
		createdAt: new Date('2023-01-01'),
		cardAlias: '',
	};
	return <EditCardAliasForm data={cardData} />;
};

export const WithoutCardAlias: Story = {
	render: () => (
		<CardsProvider>
			<TestWithoutCardAlias />,
		</CardsProvider>
	),
};

export default meta;
