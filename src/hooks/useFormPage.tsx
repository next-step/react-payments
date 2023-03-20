import { CardUIType, CompanyType, CardFormInputRefsType } from 'types';
import { useContext } from 'react';
import { PaymentsContext } from 'context/Payments';
import { isCardFormValidation } from 'utils/InputValidation';
import uuid from 'react-uuid';
import useRouter from 'routes/useRouter';

interface PropsType {
  state: CardUIType;
  setState: React.Dispatch<React.SetStateAction<CardUIType>>;
  formRefs: CardFormInputRefsType;
}

const useFormPage = ({ state, setState, formRefs }: PropsType) => {
  const paymentsCtx = useContext(PaymentsContext);
  const { push } = useRouter();

  const handleCompanyList = (e) => {
    const company = e.currentTarget.children[1].textContent as CompanyType;
    setState((prev) => ({
      ...prev,
      company,
    }));
  };

  const handleBackButton = () => {
    push('/');
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
    push('/alias');
  };

  return {
    handleCompanyList,
    handleBackButton,
    handleSubmit,
  };
};

export default useFormPage;
