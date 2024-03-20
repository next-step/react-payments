import { CardContext } from '../../App';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import CardNameInput from '../../components/CardNameInput/CardNameInput';
import Header from '../../components/Header/Header';
import { useEditCardName } from './hooks/useEditCardName';

interface Props {
  onNext: () => void;
}

const EditCardName = ({ onNext }: Props) => {
  const { cardState, handleNickname } = useEditCardName();
  const { send } = CardContext.useActorRef();

  const handleAddCard = () => {
    if (!cardState) return;
    send({ type: 'SAVE_CARD_LIST', value: cardState });
    onNext();
  };

  if (!cardState) {
    return (
      <div className='app flex-column-center'>
        <div>카드를 찾을 수 없습니다.</div>
      </div>
    );
  }

  return (
    <div className='app flex-column-center'>
      <div className='flex-center'>
        <Header className='mb-10'>
          <span>카드 수정</span>
        </Header>
      </div>

      <Card size='big' {...cardState} />
      <CardNameInput nickname={cardState.nickname} onChange={handleNickname} />

      <div className='button-box mt-50'>
        <Button onClick={() => handleAddCard()}>확인</Button>
      </div>
    </div>
  );
};

export default EditCardName;
