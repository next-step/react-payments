import React, { createContext, useState } from 'react'
import {CardType} from "../type/CardType.ts";

interface CardContextType {
    cards: CardType[]
    addCard: (newCard: CardType) => void
    modifyCard: (newCard: CardType) => void
}

const CardContext = createContext<CardContextType>({
    cards: [],
    addCard: () => {},
    modifyCard: () => {}
});

export const CardProvider: React.FC<{ children: React.ReactNode}> = ({ children }) => {
    const [cards, setCards] = useState<CardType[]>([])

    const addCard = (newCard: CardType) => {
        setCards(prevCards => [...prevCards, newCard]);
    }

    const modifyCard = (newCard: CardType) => {
        setCards(prevCards => {
            const cards = prevCards.slice(0, prevCards.length -1);
            return [...cards, newCard];
        })
    }

    return (
        <CardContext.Provider value={{ cards, addCard, modifyCard }}>
            {children}
        </CardContext.Provider>
    )
}

export default CardContext