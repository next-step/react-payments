import FlexCenter from '../flex-center/FlexCenter';
import ModalItemContainer from './parts/ModalItemContainer';
import ModalItemDot from './parts/ModalItemDot';
import ModalItemName from './parts/ModalItemName';

const dummyData = [
  [{ name: '클린 카드' }, { name: '클린 카드' }, { name: '클린 카드' }, { name: '클린 카드' }],
  [{ name: '클린 카드' }, { name: '클린 카드' }, { name: '클린 카드' }, { name: '클린 카드' }],
];

const Modal = () => {
  return (
    <div className="modal-dimmed">
      <div className="modal">
        {dummyData.map((item, i) => (
          <FlexCenter key={i}>
            {item.map(({ name }, i) => (
              <ModalItemContainer key={i}>
                <ModalItemDot />
                <ModalItemName name={name} />
              </ModalItemContainer>
            ))}
          </FlexCenter>
        ))}
      </div>
    </div>
  );
};

export default Modal;
