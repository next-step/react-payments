import Header from '../../components/common/Header/Header';
import Card from '../../components/domain/Card/Card';
import CardNicknameInput from '../../components/domain/CardInput/CardNickname/CardNicknameInput';
import Button from '../../components/common/Button/Button';

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

        <CardNicknameInput />

        <Button title='완료' />
      </div>
    </div>
  );
};

export default CardNicknamePage;
