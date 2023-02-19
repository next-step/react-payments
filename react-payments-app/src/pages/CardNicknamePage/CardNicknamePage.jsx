import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import CardNickname from '../../components/Input/CardNickname/CardNicknameInput';
import Button from '../../components/Button/Button';

const CardNicknamePage = () => {
  return (
    <div>
      <div className='app flex-column-center'>
        <Header pageTitle={'카드등록이 완료되었습니다.'} />
        <Card
          cardStatus={'big-card'}
          userName={'JEONG'}
          expirationDate={'12/34'}
          cardName={'현정카드'}
          cardNumbers={'1234-5678-****-****'}
          cardNickname={'생활비카드'}
        />

        <CardNickname />

        <Button title='완료' />
      </div>
    </div>
  );
};

export default CardNicknamePage;
