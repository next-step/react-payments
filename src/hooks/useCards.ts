import { CardsContext } from '@contexts';
import { useContext } from 'react';

export default function useCards() {
	return useContext(CardsContext);
}
