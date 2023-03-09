import { CardFormType, ColorType, CompanyType } from 'types';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PaymentsContext } from 'context/Payments';
import { isCardFormValidation } from 'utils/InputValidation';
import uuid from 'react-uuid';

const initialCardFormState: CardFormType = {
  cardNumbers: {
    text: '',
    isValid: true,
  },
  expireDate: {
    month: {
      text: 'MM',
      isValid: true,
    },
    year: {
      text: 'YY',
      isValid: true,
    },
  },
  password: {
    start: {
      text: '',
      isValid: true,
    },
    end: {
      text: '',
      isValid: true,
    },
  },
  cvc: {
    text: '',
    isValid: true,
  },
  ownerName: {
    text: 'empty',
  },
  color: {
    text: '',
    isValid: false,
  },
  company: {
    text: '',
    isValid: false,
  },
};

const useFormPage = () => {
  const [state, setState] = useState(initialCardFormState);
  const paymentsCtx = useContext(PaymentsContext);
  const navigate = useNavigate();

  const handleCompanyList = (e) => {
    const color = e.currentTarget.children[0].getAttribute('color') as ColorType;
    const company = e.currentTarget.children[1].textContent as CompanyType;

    setState((prev) => ({
      ...prev,
      company: {
        text: company,
        isValid: true,
      },
      color: {
        text: color,
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
      color: currentFormCard.color.text,
      company: currentFormCard.company.text,
      alias: '',
      id: uuid(),
    };
    paymentsCtx.addCard(newCard);
    localStorage.setItem('id', newCard.id);
    navigate('/alias');
  };

  return {
    state,
    setState,
    handleCompanyList,
    handleBackButton,
    handleSubmit,
  };
};

export default useFormPage;
