import { cardRepository } from '../repositories';
import { useEffect, useMemo, useRef } from 'react';
import { CardBox, PageTitle } from '../components';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button, Input } from '../components/form';
import { ICardBoxDTO } from '../domain/types';

const MAX_LENGTH = 10;

export default function RegisterComplete() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const cardIndex = Number(searchParams.get('card'));
  const cardList = useMemo<ICardBoxDTO[]>(() => cardRepository.getItem(), []);
  const cardData = useMemo(() => cardList.find((item) => item.index === cardIndex), []);
  const nicknameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    nicknameRef.current.value = cardData?.nickname || '';
    if (!cardData) {
      navigate('/');
    }
  }, []);

  const endRegisterCard = () => {
    const { value } = nicknameRef.current;
    const nickName = value.length ? value : cardData.brand;
    const updateCardData = cardList.map((item) => ({
      ...item,
      nickname: item.index === cardIndex ? nickName : item.nickname
    }));

    cardRepository.setItem(updateCardData);
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
        maxLength={MAX_LENGTH}
      />

      <Button className="mt-50" onClick={endRegisterCard}>다음</Button>
    </div>
  );
}
