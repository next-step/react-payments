import { PaymentCardType } from '@types';
import { createContext } from 'react';

export const CardsContext = createContext<PaymentCardType[]>([]);

interface CardProviderProps {
	children: React.ReactNode;
}

const getCards = () => [
	{
		id: '1',
		cardNumber: '1234123412341234',
		cardExpiredDate: '12/28',
		cardHolderName: 'GAEUN KIM',
		cardSecurityCode: '123',
		cardPassword: '12',
		createdAt: new Date('2024-01-01'),
	},
];

export function CardsProvider({ children }: CardProviderProps) {
	const cards = getCards();
	return (
		<CardsContext.Provider value={cards}>{children}</CardsContext.Provider>
	);
}
