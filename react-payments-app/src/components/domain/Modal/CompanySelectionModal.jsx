import { Modal } from '../../common/Modal/Modal';
import { cardCompanies } from '../../../server/cardCompanies';

const CompanySelectionModal = () => {
  return (
    <>
      <Modal data={cardCompanies} />
    </>
  );
};

export default CompanySelectionModal;
