import { PaymentCardType } from '@types';
import { createContext, useState } from 'react';

export const CardsContext = createContext<
	| [PaymentCardType[], React.Dispatch<React.SetStateAction<PaymentCardType[]>>]
	| undefined
>(undefined);

interface CardProviderProps {
	children: React.ReactNode;
}

const getCards: () => PaymentCardType[] = () => {
	return [
		{
			id: '1',
			cardNumber: '1234123412341234',
			cardExpiredDate: '1228',
			cardHolderName: 'NEW',
			cardSecurityCode: '123',
			cardPassword: '12',
			createdAt: new Date('2024-01-01'),
			cardAlias: '삼성카드',
		},
		{
			id: '2',
			cardNumber: '1234123412341234',
			cardExpiredDate: '1124',
			cardHolderName: 'GAEUN KIM',
			cardSecurityCode: '123',
			cardPassword: '12',
			createdAt: new Date('2023-01-01'),
			cardAlias: '현대카드',
		},
	];
};

export function CardsProvider({ children }: CardProviderProps) {
	const state = useState(getCards);

	return (
		<CardsContext.Provider value={state}>{children}</CardsContext.Provider>
	);
}
