import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import { CardContext } from '../../App';
import CardNameInput from '../../components/CardNameInput/CardNameInput';
import useCardNickname from './hooks/useNickname';

interface Props {
  onNext: () => void;
}

const AddCardSuccess = ({ onNext }: Props) => {
  const cardState = CardContext.useSelector(({ context }) => context.cardState);
  const { send } = CardContext.useActorRef();
  const { nickname, handleNickname } = useCardNickname();

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
      <CardNameInput nickname={nickname} onChange={handleNickname} />

      <div className='button-box mt-50'>
        <Button onClick={handleAddCard}>확인</Button>
      </div>
    </div>
  );
};

export default AddCardSuccess;
