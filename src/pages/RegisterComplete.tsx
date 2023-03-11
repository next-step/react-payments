import { cardRepository } from '../repositories';
import { useEffect, useRef } from 'react';
import { Button, Card, Input, PageTitle } from '../components/atoms';
import { useNavigate } from 'react-router-dom';
import { useCardRegister } from './hooks';

const MAX_LENGTH = 10;

export default function RegisterComplete() {
  const navigate = useNavigate();
  const { cardNumber, cardList, findCard } = useCardRegister();
  const cardData = findCard(cardNumber);
  const nicknameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    nicknameRef.current.value = cardData?.nickname || '';
    if (!cardData) {
      navigate('/');
    }
  }, []);

  const endRegisterCard = () => {
    const value = nicknameRef.current.value.trim();
    const nickName = value.length ? value : cardData.cardCompany;
    const updateCardData = cardList.map((item) => ({
      ...item,
      nickname: item.cardNumber === cardNumber ? nickName : item.nickname
    }));

    cardRepository.setItem(updateCardData);
    navigate('/');
  };

  return (
    <div className="app flex-column-center">
      <PageTitle title="카드등록이 완료되었습니다."/>
      <Card {...cardData} type="big"/>
      <Input
        ref={nicknameRef}
        className="input-underline"
        placeholder="카드의 별칭을 입력해주세요."
        maxLength={MAX_LENGTH}
      />

      <Button className="mt-50" onClick={endRegisterCard}>다음</Button>
    </div>
  );
}
