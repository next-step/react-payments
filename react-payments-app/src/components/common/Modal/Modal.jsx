import { useState } from 'react';
import { useCard } from '../../../store/CardContext';
import { CHANGE_CARD } from '../../../constants/action';

const Modal = ({ data }) => {
  const rows = splitIntoChunk(data, 4);

  const [isClicked, setIsClicked] = useState(false);
  const className = isClicked ? 'modal-closed' : 'modal-open';

  const closeModal = (isClicked) => {
    setIsClicked(isClicked);
    //TODO: [UI] animation 추가
  };

  const { changeCardInfo } = useCard();

  const handleCompanySelected = (isClicked, selectedId) => {
    closeModal(isClicked);
    changeCardInfo(CHANGE_CARD.COMPANY, selectedId);
    //TODO: 선택된 id로 카드정보 변경 및 카드 색상 변경 로직 추가
  };

  return (
    <div id='modal-container' className={`modal-container ` + className}>
      <div className='modal-dimmed' onClick={closeModal}>
        <div className='modal flex-center'>
          {Array.isArray(data)
            ? rows.map((row) =>
                row.map((company) => (
                  <div
                    key={company.id}
                    id={company.id}
                    className='modal-item-container'
                    onClick={handleCompanySelected}
                  >
                    <div className='modal-item-dot'></div>
                    <span className='modal-item-name'>{company.name}</span>
                  </div>
                ))
              )
            : null}
        </div>
      </div>
    </div>
  );
};

export default Modal;

const splitIntoChunk = (arr, chunk) => {
  // 빈 배열 생성
  const result = [];

  for (let index = 0; index < arr.length; index += chunk) {
    let tempArray;
    // slice() 메서드를 사용하여 특정 길이만큼 배열을 분리함
    tempArray = arr.slice(index, index + chunk);
    // 빈 배열에 특정 길이만큼 분리된 배열을 추가
    result.push(tempArray);
  }

  return result;
};
