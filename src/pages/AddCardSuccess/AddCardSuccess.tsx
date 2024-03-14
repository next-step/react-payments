import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import { useCardState } from '../../providers/CardState/hooks/useCardState';
import CardNickname from './components/CardNickname';
import { useCardList } from '../../providers/CardList/hooks/useCardList';
import { useQueryParams } from '../../hooks/useQueryParams';
import { useEffect } from 'react';

interface Props {
  onNext: () => void;
}

const AddCardSuccess = ({ onNext }: Props) => {
  const { params } = useQueryParams();
  const id = params.get('id');
  const { cardState, resetCardState, setCardState } = useCardState();
  const { saveCardList, getCard } = useCardList();

  useEffect(() => {
    if (id) {
      const card = getCard(id);
      setCardState({ ...card, nickname: '' });
    }
  }, [getCard, id, setCardState]);

  const handleAddCard = () => {
    saveCardList(cardState);
    resetCardState();
    onNext();
  };

  return (
    <div className='app flex-column-center'>
      <div className='flex-center'>
        <Header className='mb-10'>
          <span>{id ? '카드 수정' : '카드등록이 완료되었습니다.'}</span>
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
