import { useEffect, useState } from 'react';

import { CreditCard } from '@/components/UI';
import { Text } from '@/components/UI';
import { styled } from '@/lib/stitches.config';
import { getItem } from '@/storage/storage';

const CardList = () => {
    const [cards, setCards] = useState([]);
    const haveCards = cards?.length > 0;

    useEffect(() => {
        const newCard = getItem('cardList');
        setCards(newCard);
    }, []);

    if (!haveCards) {
        return <Text size="5"> 카드를 등록해주세요.</Text>;
    }

    return (
        <div className="flex-column-center">
            <CardListWrapper>
                <div className="flex-column-center gap-20">
                    {cards.length > 0 &&
                        cards.map((card, index) => (
                            <CreditCard key={index} cardInfo={card} size="small" />
                        ))}
                </div>
            </CardListWrapper>
        </div>
    );
};

const CardListWrapper = styled('div', {
    overflow: 'scroll',
    width: '100%',
    height: '$12',
});

export default CardList;
