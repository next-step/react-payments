import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { CardItem } from '../../components/Card/CardItem';
import { retrieveCardById, updateCardNickname } from '../../service/card';
import { Card } from '../../types';

const NICKNAME_MAX_LENGTH = 10;

const CardEditPage = () => {
  const [searchParam] = useSearchParams();
  const [nickname, setNickname] = useState('');
  const navigate = useNavigate();
  const [card, setCard] = useState<Card | null>(null);
  const cardId = searchParam.get('id');

  useEffect(() => {
    const card = retrieveCardById(cardId!);

    if (!card) {
      alert('잘못된 접근 입니다.');
      navigate('/');
      return;
    }

    setCard(card);
  }, [cardId, navigate]);

  const handleNicknameChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (target.value.length > NICKNAME_MAX_LENGTH) return;

    setNickname(target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const nickname최종 = nickname.length === 0 ? '환오은행' : nickname;

    updateCardNickname(cardId!, nickname최종);
    navigate('/');
  };

  if (!card) return <></>;

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex-center">
        <h2 className="page-title mb-10">카드이름을 수정해주세요</h2>
      </div>
      <CardItem card={card!} />
      <div className="input-container flex-center w-100">
        <input
          className="input-underline w-75"
          type="text"
          placeholder="카드의 별칭을 입력해주세요."
          value={nickname}
          onChange={handleNicknameChange}
        />
      </div>
      <div className="button-box mt-50">
        <button className="button-text" style={{ all: 'unset' }}>
          다음
        </button>
      </div>
    </form>
  );
};

export default CardEditPage;
