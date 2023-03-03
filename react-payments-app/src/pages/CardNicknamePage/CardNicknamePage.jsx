import Header from '../../components/common/Header/Header';
import Card from '../../components/domain/Card/Card';
import CardNicknameInput from '../../components/domain/CardInput/CardNickname/CardNicknameInput';
import Button from '../../components/common/Button/Button';
import { initialState, useCard } from '../../store/CardContext';
import { useNavigate, Form, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CHANGE_CARD } from '../../constants/action';
import { MAX_INPUT_LENGTH } from '../../constants/numbers';

const CardNicknamePage = () => {
  const [id, setId] = useState(0);
  const [data, setData] = useState(initialState);
  const [cardNickname, setCardNickname] = useState('');

  const { cardInfo, changeCardInfo, registerCard } = useCard();
  const navigate = useNavigate();
  const location = useLocation();
  const cardId = location.pathname.match(/[0-9]/g)
    ? location.pathname.match(/[0-9]/g).join('')
    : '';

  // create버전이면 context에서 온 card정보를, edit버전이면 localStorage에서 온 card정보를 로컬데이터로 설정합니다.
  useEffect(() => {
    setData(cardInfo);

    if (cardId) {
      const card = JSON.parse(localStorage.getItem(cardId));
      setData(card);
      setId(card.id);
    }
  }, []);

  const isValidNickname = (value) => {
    if (value.length > MAX_INPUT_LENGTH.CARD_NICKNAME) {
      console.log('test error');
      changeCardInfo(
        CHANGE_CARD.ERROR,
        `최대 ${MAX_INPUT_LENGTH.CARD_NICKNAME}자리까지만 가능합니다.`
      );
      return;
    }
    changeCardInfo(CHANGE_CARD.ERROR, null);
    return true;
  };

  const handleChange = (cardNickname) => {
    setCardNickname(cardNickname);

    if (!isValidNickname(cardNickname)) {
      changeCardInfo(CHANGE_CARD.ERROR, '이름은 10자가 넘을 수 없어요.');
      return;
    }
    changeCardInfo(CHANGE_CARD.ERROR, null);

    changeCardInfo(CHANGE_CARD.NICKNAME, cardNickname);

    // create버전이라면(이전 단계에서 전역상태로 cardInfo 저장되어 있다면),
    // 새로운 id를 만들어 카드 정보에 넣어준다.
    if (!id) {
      changeCardInfo(CHANGE_CARD.ID, new Date().getTime());
      return;
    }

    // edit 버전이라면, (이전 단계에서 생성된 cardInfo 가 없는 상태라면)
    // 기존 로컬스토리지의 정보로 카드 정보를 생성해준다.
    if (id) {
      changeCardInfo(CHANGE_CARD.ID, id);
      changeCardInfo(CHANGE_CARD.NUMBERS, data.cardNumbers);
      changeCardInfo(CHANGE_CARD.EXP_DATE, data.cardExpirationDate);
      changeCardInfo(CHANGE_CARD.OWNER, data.cardOwner);
      changeCardInfo(CHANGE_CARD.CVC, data.cardCVC);
      changeCardInfo(CHANGE_CARD.PW, data.cardPassword);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    registerCard(cardInfo);

    changeCardInfo(CHANGE_CARD.INIT);
    navigate('/');
  };

  return (
    <>
      <Header
        pageTitle={'카드등록이 완료되었습니다.'}
        headerIcon={'<'}
        onClick={() => navigate('/registration')}
      />
      <Card
        cardNumbers={data.cardNumbers}
        cardOwner={data.cardOwner}
        cardExpirationDate={data.cardExpirationDate}
        cardStatus='big-card'
      />
      <Form
        id={'card-nickname-form'}
        onSubmit={handleSubmit}
        error={cardInfo.error}
      >
        <CardNicknameInput onChange={handleChange} />
      </Form>
      <Button title='완료' type='submit' form='card-nickname-form' />
    </>
  );
};

export default CardNicknamePage;
