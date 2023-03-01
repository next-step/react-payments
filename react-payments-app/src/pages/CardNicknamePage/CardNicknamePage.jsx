import Header from '../../components/common/Header/Header';
import Card from '../../components/domain/Card/Card';
import CardNicknameInput from '../../components/domain/CardInput/CardNickname/CardNicknameInput';
import Button from '../../components/common/Button/Button';
import { useCard } from '../../store/CardContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { CHANGE_CARD } from '../../constants/action';
import { MAX_INPUT_LENGTH } from '../../constants/numbers';
import Form from '../../components/common/Input/Form';

const CardNicknamePage = () => {
  const { cardInfo, changeCardInfo } = useCard();
  const { cardNumbers, cardOwner, cardExpirationDate } = cardInfo;

  const navigate = useNavigate();

  const [cardNickname, setCardNickname] = useState('');

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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidNickname(cardNickname)) {
      changeCardInfo(CHANGE_CARD.NICKNAME, cardNickname);
      navigate('/');
    }
  };
  return (
    <>
      <Header
        pageTitle={'카드등록이 완료되었습니다.'}
        headerIcon={'<'}
        onClick={() => navigate('/registration')}
      />
      <Card
        cardNumbers={cardNumbers}
        cardOwner={cardOwner}
        cardExpirationDate={cardExpirationDate}
        cardStatus='big-card'
      />
      <Form
        id={'card-nickname-form'}
        handleSubmit={handleSubmit}
        error={cardInfo.error}
      >
        <CardNicknameInput onChange={handleChange} />
      </Form>
      <Button title='완료' type='submit' form='card-nickname-form' />
    </>
  );
};

export default CardNicknamePage;
