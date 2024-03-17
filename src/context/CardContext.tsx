import React, { createContext, useState } from 'react'
import {CardType} from "../type/CardType.ts";

interface CardContextType {
    cards: CardType[]
    addCard: (newCard: CardType) => void
}

const CardContext = createContext<CardContextType>({
    cards: [],
    addCard: () => {}
});

export const CardProvider: React.FC<{ children: React.ReactNode}> = ({ children }) => {
    const [cards, setCards] = useState<CardType[]>([])

    const addCard = (newCard: CardType) => {
        setCards(prevCards => [...prevCards, newCard]);
    }

    return (
        <CardContext.Provider value={{ cards, addCard }}>
            {children}
        </CardContext.Provider>
    )
}

export default CardContext