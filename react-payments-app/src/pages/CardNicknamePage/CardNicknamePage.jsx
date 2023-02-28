import Header from '../../components/common/Header/Header';
import Card from '../../components/domain/Card/Card';
import CardNicknameInput from '../../components/domain/CardInput/CardNickname/CardNicknameInput';
import Button from '../../components/common/Button/Button';
import { useCard } from '../../store/CardContext';
import { useNavigate } from 'react-router-dom';

const CardNicknamePage = () => {
  const { cardInfo } = useCard();
  const { cardNumbers, cardOwner, cardExpirationDate } = cardInfo;
  const navigate = useNavigate();
  return (
    <div>
      <div className='app flex-column-center'>
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

        <CardNicknameInput />

        <Button title='완료' />
      </div>
    </div>
  );
};

export default CardNicknamePage;
