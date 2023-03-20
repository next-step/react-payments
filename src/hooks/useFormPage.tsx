import { CardUIType, CompanyType, CardFormInputRefsType } from 'types';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PaymentsContext } from 'context/Payments';
import { isCardFormValidation } from 'utils/InputValidation';
import uuid from 'react-uuid';

interface PropsType {
  state: CardUIType;
  setState: React.Dispatch<React.SetStateAction<CardUIType>>;
  formRefs: CardFormInputRefsType;
}

const useFormPage = ({ state, setState, formRefs }: PropsType) => {
  const paymentsCtx = useContext(PaymentsContext);
  const navigate = useNavigate();

  const handleCompanyList = (e) => {
    const company = e.currentTarget.children[1].textContent as CompanyType;
    setState((prev) => ({
      ...prev,
      company,
    }));
  };

  const handleBackButton = () => {
    navigate('/');
  };

  const handleSubmit = () => {
    const currentFormCard = state;
    const newCardValidation = { ...state, password: formRefs.password?.value, cvc: formRefs.cvc?.value };
    if (!isCardFormValidation(newCardValidation)) return;
    const newCard = {
      cardNumbers: currentFormCard.cardNumbers,
      expireDate: {
        month: currentFormCard.expireDateMonth,
        year: currentFormCard.expireDateYear,
      },
      ownerName: currentFormCard.ownerName,
      company: currentFormCard.company,
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
