import { CardFormType, CardFormInputsType, ColorType, CompanyType } from "types";
import { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PaymentsContext } from "context/Payments";
import { isCardFormValidation } from "utils/InputValidation";
import uuid from "react-uuid";

const initialCardFormState: CardFormType = {
  cardNumbers: {
    text: "",
    isValid: false,
  },
  expireDate: {
    month: {
      text: "MM",
      isValid: false,
    },
    year: {
      text: "YY",
      isValid: false,
    },
  },
  password: {
    first: {
      text: "",
      isValid: false,
    },
    end: {
      text: "",
      isValid: false,
    },
  },
  cvc: {
    text: "",
    isValid: false,
  },
  ownerName: {
    text: "empty",
    isValid: false,
  },
  color: {
    text: "",
    isValid: false,
  },
  company: {
    text: "",
    isValid: false,
  },
};

const useFormPage = () => {
  const [state, setState] = useState(initialCardFormState);
  const paymentsCtx = useContext(PaymentsContext);
  const navigate = useNavigate();
  const inputRefs = useRef(new Array(10));
  const [isOpenComanyList, setIsOpenCompanyList] = useState(true);
  const cardFormInputs: CardFormInputsType = {
    cardNumbers: {
      ref: inputRefs.current[0],
    },
    expireDate: {
      month: {
        ref: inputRefs.current[1],
      },
      year: {
        ref: inputRefs.current[2],
      },
    },
    ownerName: {
      ref: inputRefs.current[3],
    },
    cvc: {
      ref: inputRefs.current[4],
    },
    password: {
      first: {
        ref: inputRefs.current[5],
      },
      end: {
        ref: inputRefs.current[6],
      },
    },
  };
  const handleCompanyList = (e) => {
    const color = e.currentTarget.children[0].getAttribute("color") as ColorType;
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
    setIsOpenCompanyList(false);
  };
  const handleBackButton = () => {
    navigate("/");
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
        first: currentFormCard.password.first.text,
        end: currentFormCard.password.end.text,
      },
      cvc: currentFormCard.cvc.text,
      ownerName: currentFormCard.ownerName.text,
      color: currentFormCard.color.text,
      company: currentFormCard.company.text,
      alias: "",
      id: uuid(),
    };
    paymentsCtx.addCard(newCard);
    localStorage.setItem("id", newCard.id);
    navigate("/alias");
  };

  return {
    state,
    setState,
    cardFormInputs,
    handleCompanyList,
    isOpenComanyList,
    setIsOpenCompanyList,
    handleBackButton,
    handleSubmit,
  };
};

export default useFormPage;
