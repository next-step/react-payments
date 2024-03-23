import createProvidedContext from '@/utils/createProvidedContext';
import { ChangeEvent, ReactElement, useCallback, useReducer } from 'react';
import reducer, { REDUCER_ACTION_TYPE } from './CardFormReducer';

export type CardFormFields = {
  cardNumber: string;
  expirationMonth: string;
  expirationYear: string;
  ownerName: string;
  verificationCode: string;
  cardPassword: string;
};
export type CardFormOptions = {
  cardCompany: string;
  cardNickname: string;
};

export type CardFormFieldErrors = {
  cardNumber: boolean;
  expirationMonth: boolean;
  expirationYear: boolean;
  ownerName: boolean;
  verificationCode: boolean;
  cardPassword: boolean;
};

export type CardFormState = {
  fields: CardFormFields;
  options: CardFormOptions;
  isErrorField: CardFormFieldErrors;
};

export const INITIAL_CARD_FORM_STATE: CardFormState = {
  fields: {
    cardNumber: '',
    expirationMonth: '',
    expirationYear: '',
    ownerName: '',
    verificationCode: '',
    cardPassword: '',
  },
  options: {
    cardCompany: '',
    cardNickname: '',
  },
  isErrorField: {
    cardNumber: false,
    expirationMonth: false,
    expirationYear: false,
    ownerName: false,
    verificationCode: false,
    cardPassword: false,
  },
};

const useCardFormContext = (initialState: CardFormState) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleCardNumberInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.UPDATE_CARD_NUMBER,
      payload: e.target.value,
    });
  }, []);
  const handleExpirationMonthInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.UPDATE_EXPIRATION_MONTH,
      payload: e.target.value,
    });
  }, []);
  const handleExpirationYearInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.UPDATE_EXPIRATION_YEAR,
      payload: e.target.value,
    });
  }, []);
  const handleOwnerNameInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.UPDATE_OWNER_NAME,
      payload: e.target.value,
    });
  }, []);
  const handleVerificationCodeInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.UPDATE_VERIFICATION_CODE,
      payload: e.target.value,
    });
  }, []);
  const handleCardPasswordInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.UPDATE_CARD_PASSWORD,
      payload: e.target.value,
    });
  }, []);

  const updateCardCompany = useCallback((cardCompany: string) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.UPDATE_CARD_COMPANY,
      payload: cardCompany,
    });
  }, []);

  const handleCardNicknameInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.UPDATE_CARD_NICKNAME,
      payload: e.target.value,
    });
  }, []);

  const handleNumPadClick = useCallback((value: string) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.UPDATE_CARD_PASSWORD,
      payload: value,
    });
  }, []);

  const handleBackspaceClick = useCallback(() => {
    dispatch({
      type: REDUCER_ACTION_TYPE.DELETE_CARD_PASSWORD,
    });
  }, []);

  return {
    state,
    handleCardNumberInputChange,
    handleExpirationMonthInputChange,
    handleExpirationYearInputChange,
    handleOwnerNameInputChange,
    handleVerificationCodeInputChange,
    handleCardPasswordInputChange,
    updateCardCompany,
    handleCardNicknameInputChange,
    handleNumPadClick,
    handleBackspaceClick,
  };
};

type UseCardFormContext = ReturnType<typeof useCardFormContext>;

const [useProvidedContext, Provider] = createProvidedContext<UseCardFormContext>();

type CardFormProvider = {
  value: CardFormState;
  children?: ReactElement;
};

const CardFormProvider = ({ children, value }: CardFormProvider): ReactElement => {
  return <Provider value={useCardFormContext(value)}>{children}</Provider>;
};

export { CardFormProvider, useProvidedContext as useProvidedCardFormContext };
