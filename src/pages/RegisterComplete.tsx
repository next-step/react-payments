import { cardRepository } from '../repositories';
import { useMemo, useRef } from 'react';
import { CardBox, PageTitle } from '../components';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button, Input } from '../components/form';

export default function RegisterComplete() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const cardNumber = searchParams.get('card');
  const cardList = useMemo(() => cardRepository.getItem(), []);
  const cardData = useMemo(() => cardList.find((item) => item.cardNumber === cardNumber), []);
  const nicknameRef = useRef<HTMLInputElement>(null);

  const endRegisterCard = () => {
    const { value } = nicknameRef.current;

    if (value.length) {
      const updateCardData = cardList.map((item) => ({
        ...item,
        nickname: item.cardNumber === cardNumber ? value : item.nickname
      }));

      cardRepository.setItem(updateCardData);
    }

    navigate('/');
  };

  return (
    <div className="app flex-column-center">
      <PageTitle title="카드등록이 완료되었습니다."></PageTitle>
      <CardBox {...cardData} type="big"/>
      <Input
        ref={nicknameRef}
        className="input-underline"
        placeholder="카드의 별칭을 입력해주세요."
      />

      <Button className="mt-50" onClick={endRegisterCard}>다음</Button>
    </div>
  );
}