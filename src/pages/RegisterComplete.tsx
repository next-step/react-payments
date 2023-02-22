import { cardRepository } from '../repository';
import { useMemo } from 'react';
import { CardBox, PageTitle } from '../components';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button, Input } from '../components/form';
import { useInput } from '../hooks';

export default function RegisterComplete() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const cardNumber = searchParams.get('card');
  const cardList = useMemo(() => cardRepository.getItem(), []);
  const cardData = useMemo(() => cardList.find((item) => item.cardNumber === cardNumber), []);
  const nickname = useInput('');

  const endRegisterCard = () => {
    if (nickname.value.length) {
      const updateCardData = cardList.map((item) => ({
        ...item,
        nickname: item.cardNumber === cardNumber ? nickname.value : item.nickname
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
        className="input-underline"
        placeholder="카드의 별칭을 입력해주세요."
        {...nickname}
      />

      <Button className="mt-50" onClick={endRegisterCard}>다음</Button>
    </div>
  );
}