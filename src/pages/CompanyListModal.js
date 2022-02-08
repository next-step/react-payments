import Modal from '../components/modal/Modal';
import ModalItems from '../components/modal/ModalItems';
import ModalItem from '../components/modal/ModalItem';
import companyList from '../companyList';

const CompanyListModal = ({ onClickHandler }) => {
  return (
    <Modal onClickHandler={onClickHandler}>
      <ModalItems>
        {companyList.map((company, i) => (
          <ModalItem
            key={`ModalItem-${i}`}
            name={company}
            onClickHandler={onClickHandler}
          />
        ))}
      </ModalItems>
    </Modal>
  );
};

export default CompanyListModal;
