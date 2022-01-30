import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardItem } from '../../components/Card/CardItem';
import { useCard } from '../../store/CardContext';

const NICKNAME_MAX_LENGTH = 10;

const CardRegistrationCompletePage = () => {
  const { card, setNickname: setNickname최종 } = useCard();
  const [nickname, setNickname] = useState('');
  const navigate = useNavigate();

  const handleNicknameChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (target.value.length > NICKNAME_MAX_LENGTH) return;

    setNickname(target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const nickname최종 = nickname.length === 0 ? '환오은행' : nickname;

    setNickname최종(nickname최종);
    navigate('/');
  };

  if (!card) {
    alert('잘못된 접근입니다.');
    navigate('/');
    return <></>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex-center">
        <h2 className="page-title mb-10">카드등록이 완료되었습니다.</h2>
      </div>
      <CardItem card={card} />
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

export default CardRegistrationCompletePage;
