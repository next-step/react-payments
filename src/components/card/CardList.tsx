import { useNavigate } from 'react-router-dom';
import Card from './Card.tsx';
import * as S from './CardList.style.ts';
import { CARD_SIZE } from './Card.constant.ts';
import PlusIcon from '../../assets/plus_icon.svg?react';
import { PAGES } from '../../routes/route.constant.ts';

const CardList = () => {
  const navigation = useNavigate();

  return (
    <S.Container>
      <Card
        size={CARD_SIZE.SMALL}
        name={'현대카드'}
        ownerName={'LEE'}
        year={21}
        month={4}
        number={'1111-2222-****-****'}
      />
      <S.CreateCardButton onClick={() => navigation(PAGES.REGIS)}>
        <PlusIcon />
      </S.CreateCardButton>
    </S.Container>
  );
};

export default CardList;
