import { CardFormType, CompanyType } from 'types';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PaymentsContext } from 'context/Payments';
import { isCardFormValidation } from 'utils/InputValidation';
import uuid from 'react-uuid';

interface PropsType {
  state: CardFormType;
  setState: React.Dispatch<React.SetStateAction<CardFormType>>;
}

const useFormPage = ({ state, setState }: PropsType) => {
  const paymentsCtx = useContext(PaymentsContext);
  const navigate = useNavigate();

  const handleCompanyList = (e) => {
    const company = e.currentTarget.children[1].textContent as CompanyType;
    setState((prev) => ({
      ...prev,
      company: {
        text: company,
        isValid: true,
      },
    }));
  };

  const handleBackButton = () => {
    navigate('/');
  };
  const handleSubmit = () => {
    const currentFormCard = state;
    if (!isCardFormValidation(currentFormCard)) return;
    const newCard = {
      cardNumbers: currentFormCard.cardNumbers.text,
      expireDate: {
        month: currentFormCard.expireDate.month.text,
        year: currentFormCard.expireDate.year.text,
      },
      password: {
        start: currentFormCard.password.start.text,
        end: currentFormCard.password.end.text,
      },
      cvc: currentFormCard.cvc.text,
      ownerName: currentFormCard.ownerName.text,
      company: currentFormCard.company.text,
      alias: '',
      id: uuid(),
    };
    paymentsCtx.addCard(newCard);
    localStorage.setItem('id', newCard.id);
    navigate('/alias');
  };

  return {
    handleCompanyList,
    handleBackButton,
    handleSubmit,
  };
};

export default useFormPage;
