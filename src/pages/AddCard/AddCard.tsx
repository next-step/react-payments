import { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import CardNumbers from './components/CardNumbers';
import CardExpiration from './components/CardExpiration';
import CardOwner from './components/CardOwner';
import CardSecurityCode from './components/CardSecurityCode';
import CardPassword from './components/CardPassword';
import { useCardState } from '../../providers/CardState/hooks/useCardState';
import { Modal } from '../../components/Modal/Modal';
import { BrandList } from './components/BrandList';
import { useCardBrands } from './hooks/useCardBrands';

interface Props {
  onNext: () => void;
  onGoBack: () => void;
}

const AddCard = ({ onNext, onGoBack }: Props) => {
  const { cardState, resetCardState } = useCardState();
  const { selectBrand } = useCardBrands();
  const [showModal, setShowModal] = useState<boolean>(true);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  useEffect(() => {
    resetCardState();
  }, []);

  return (
    <>
      <Header className='mb-10'>
        <div onClick={onGoBack}>{'<'}&nbsp;</div>
        <span>카드추가</span>
      </Header>

      <Card {...cardState} onClick={openModal} />
      <CardNumbers />
      <CardExpiration />
      <CardOwner />
      <CardSecurityCode />
      <CardPassword />

      <div className='button-box'>
        <Button onClick={onNext}>다음</Button>
      </div>

      {showModal && (
        <Modal onClickDimmed={closeModal}>
          <BrandList onClick={selectBrand} />
        </Modal>
      )}
    </>
  );
};

export default AddCard;
