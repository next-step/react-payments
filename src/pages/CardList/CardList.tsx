import { useEffect, useMemo, useState } from 'react';

import { CreditCard } from '@/components/UI';
import { Text } from '@/components/UI';
import { useRouter } from '@/hooks/useRouter';
import { styled } from '@/lib/stitches.config';
import { getItem } from '@/storage/storage';
import { StorageKey } from '@/storage/storageKey';

const CardList = () => {
    const [cards, setCards] = useState([]);
    const haveCards = cards?.length > 0;
    const { go } = useRouter();

    useEffect(() => {
      const cardList = getItem(StorageKey.CARD_LIST);
      setCards(cardList.reverse());
  }, []);

    if (!haveCards) {
        return <Text size="5"> 카드를 등록해주세요.</Text>;
    }

    return (
        <div className="flex-column-center">
            <CardListWrapper>
                <div className="flex-column-center gap-20">
                  {cards.map((card, index) => (
                      <div key={index} onClick={() => go(`/detail/${index}`)}>
                          <CreditCard cardInfo={card} size="small" />
                      </div>
                  ))}
              </div>
          </CardListWrapper>
      </div>
  );
};

const CardListWrapper = styled('div', {
    overflow: 'scroll',
    margin: '0 $12',
    width: '100%',
    height: '$12',
});

export default CardList;
