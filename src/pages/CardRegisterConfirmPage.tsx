import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CreditCard } from '@/components';
import { Button } from '@/components/UI';
import { styled } from '@/lib/stitches.config';
import { getItem } from '@/storage/storage';

const initialState = {
    CARD_NUMBERS: {
        1: '',
        2: '',
        3: '',
        4: '',
    },
    OWNER_NAME: '',
    EXPIRE_DATE: { month: '', year: '' },
};

export const CardRegisterConfirmPage = () => {
    const [card, setCard] = useState(initialState);
    const navigate = useNavigate();

    useEffect(() => {
        const newCard = getItem('cardList').at(-1);

      setCard(newCard);
  }, []);
    return (
        <CardRegisterConfirmPageLayout>
            <h2>카드 등록이 완료되었습니다.</h2>
            <CreditCard size="small" cardInfo={card} />
            <Button onClick={() => navigate('/list')}>카드 목록</Button>
        </CardRegisterConfirmPageLayout>
    );
};

const CardRegisterConfirmPageLayout = styled('div', {
    position: 'relative',
    height: '100%',
    margin: '0 2rem',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
    placeContent: 'end center',

    [`& > button`]: {
        position: 'absolute',
        bottom: '1rem',
        right: '0',
    },
});
