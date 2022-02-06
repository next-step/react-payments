import Modal from './Modal';
import ModalItems from './ModalItems';
import { companyList } from '../../App';
import ModalItem from './ModalItem';

const CompanyListModal = ({ onClickHandler }) => {
  return (
    <Modal onClickHandler={onClickHandler}>
      <ModalItems>
        {companyList.map((company, i) => (
          <ModalItem
            key={`ModalItem-${i}`}
            name={company.name}
            onClickHandler={onClickHandler}
            color={company.color}
          />
        ))}
      </ModalItems>
    </Modal>
  );
};

export default CompanyListModal;
