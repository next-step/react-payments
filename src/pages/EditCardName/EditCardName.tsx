import { useEffect } from 'react';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import { useQueryParams } from '../../hooks/useQueryParams';
import { CardContext } from '../../App';
import CardNickname from '../AddCardSuccess/components/CardNickname';

interface Props {
  onNext: () => void;
}

const EditCardName = ({ onNext }: Props) => {
  const { params } = useQueryParams();
  const id = params.get('id');

  const cardState = CardContext.useSelector(({ context }) => context.cardState);
  const { send } = CardContext.useActorRef();

  const handleAddCard = () => {
    send({ type: 'cardList.saveCardList', value: cardState });
    onNext();
  };

  useEffect(() => {
    if (id) {
      send({ type: 'cardList.getCard', value: id });
    }
  }, [id]);

  return (
    <div className='app flex-column-center'>
      <div className='flex-center'>
        <Header className='mb-10'>
          <span>카드 수정</span>
        </Header>
      </div>

      <Card size='big' {...cardState} />
      <CardNickname nickname='' />

      <div className='button-box mt-50'>
        <Button onClick={handleAddCard}>확인</Button>
      </div>
    </div>
  );
};

export default EditCardName;
