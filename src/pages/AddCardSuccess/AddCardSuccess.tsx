import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import CardNickname from './components/CardNickname';
import { CardContext } from '../../App';

interface Props {
  onNext: () => void;
}

const AddCardSuccess = ({ onNext }: Props) => {
  const cardState = CardContext.useSelector(({ context }) => context.cardState);
  const { send } = CardContext.useActorRef();

  const handleAddCard = () => {
    send({ type: 'SAVE_CARD_LIST', value: cardState });
    onNext();
  };

  return (
    <div className='app flex-column-center'>
      <div className='flex-center'>
        <Header className='mb-10'>
          <span>카드등록이 완료되었습니다.</span>
        </Header>
      </div>

      <Card size='big' {...cardState} />
      <CardNickname />

      <div className='button-box mt-50'>
        <Button onClick={handleAddCard}>확인</Button>
      </div>
    </div>
  );
};

export default AddCardSuccess;
