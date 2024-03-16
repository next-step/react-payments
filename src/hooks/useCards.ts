import { CardsContext } from '@contexts';
import { useContext } from 'react';

export default function useCards() {
	const value = useContext(CardsContext);
	if (value === undefined) {
		throw new Error('useMyContext should be used within MyContext.Provider');
	}
	return value[0];
}
