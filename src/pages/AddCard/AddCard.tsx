import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import CardNumbers from './components/CardNumbers';
import CardExpiration from './components/CardExpiration';
import CardOwner from './components/CardOwner';
import CardSecurityCode from './components/CardSecurityCode';
import CardPassword from './components/CardPassword';
import { useCardState } from '../../hooks/useCardState';

interface Props {
  onNext: () => void;
}

const AddCard = ({ onNext }: Props) => {
  const { cardState } = useCardState();

  const handleAddCard = () => {
    onNext();
  };

  return (
    <>
      <Header className='mb-10'>
        <div onClick={onNext}>{'<'}&nbsp;</div>
        <span>카드추가</span>
      </Header>

      <Card {...cardState} />
      <CardNumbers />
      <CardExpiration />
      <CardOwner />
      <CardSecurityCode />
      <CardPassword />

      <div className='button-box'>
        <Button onClick={handleAddCard}>다음</Button>
      </div>
    </>
  );
};

export default AddCard;
