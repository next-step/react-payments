import { CardsContext } from '@contexts';
import { useContext } from 'react';

export default function useSetCards() {
	const value = useContext(CardsContext);
	if (value === undefined) {
		throw new Error('useSetCards should be used within MyContext.Provider');
	}
	return value[1];
}
