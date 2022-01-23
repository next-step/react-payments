import { useContext } from 'react';
import { CardContext } from '../App';
import Modal from '../components/modal/Modal';
import ModalItems from '../components/modal/ModalItems';
import { companyList } from '../App';
import ModalItem from '../components/modal/ModalItem';
import uuid from 'react-uuid';

const CompanyListModal = ({ onClickHandler }) => {
  return (
    <Modal onClickHandler={onClickHandler}>
      <ModalItems>
        {companyList.map((company) => (
          <ModalItem
            key={uuid()}
            name={company}
            onClickHandler={onClickHandler}
          />
        ))}
      </ModalItems>
    </Modal>
  );
};

export default CompanyListModal;
