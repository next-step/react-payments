import Overlay from './Overlay';
import ModalRow from './ModalRow';
import { useState } from 'react';
import { useCard } from '../../../store/CardContext';
import { CHANGE_CARD } from '../../../constants/action';

export const Modal = ({ data }) => {
  const row1 = data.slice(0, 4);
  const row2 = data.slice(-4);

  const [isClicked, setIsClicked] = useState(false);
  const className = isClicked ? 'modal-closed' : 'modal-open';

  const { changeCardInfo } = useCard();

  const closeModal = (isClicked) => {
    setIsClicked(isClicked);
    //TODO: [UI] animation 추가
  };
  const handleCompanySelected = (isClicked, selectedId) => {
    closeModal(isClicked);
    changeCardInfo(CHANGE_CARD.COMPANY, selectedId);
    //TODO: 선택된 id로 카드정보 변경 및 카드 색상 변경 로직 추가
  };

  return (
    <div id='modal-container' className={`modal-container ` + className}>
      <Overlay onClick={closeModal} />
      <div className='modal'>
        <ModalRow data={row1} onClick={handleCompanySelected} />
        <ModalRow data={row2} onClick={handleCompanySelected} />
      </div>
    </div>
  );
};
