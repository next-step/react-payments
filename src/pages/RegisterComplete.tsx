import Repository from '../core/Repository';
import { useMemo } from 'react';
import { CardBox } from '../components';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button, Input } from '../components/form';
import { useInput } from '../hooks';

export default function RegisterComplete() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const cardNumber = searchParams.get('card');
  const cardList = useMemo(() => Repository.get('card-list'), []);
  const cardData = useMemo(() => cardList.find((item) => item.cardNumber === cardNumber), []);

  const nickName = useInput('');

  const endRegisterCard = () => {
    if (nickName.value.length) {
      const updateCardData = cardList.map((item) => ({
        ...item,
        nickName: item.cardNumber === cardNumber ? nickName.value : null,
      }));

      Repository.set('card-list', updateCardData);
    }

    navigate('/');
  };

  return (
    <div className="app flex-column-center">
      <h2 className="page-title mb-10">카드등록이 완료되었습니다.</h2>
      <CardBox {...cardData} type="big"/>
      <Input
        className="input-underline"
        placeholder="카드의 별칭을 입력해주세요."
        {...nickName}
      />

      <Button className="mt-50" onClick={endRegisterCard}>다음</Button>
    </div>
  );
}