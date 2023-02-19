import React, { Dispatch, useState } from 'react';
import Title from '../components/common/Title';
import CardPreview from '../components/CardPreview';
import CardRegisterForm from '../components/CardForm';
import Button from '../components/common/Button';
import { ICardData } from '../type/CardType';
import { Link } from 'react-router-dom';

interface IContext {
  state: ICardData;
  dispatch: Dispatch<ICardData>;
}

export const CardDispatch = React.createContext<IContext>({} as IContext);

const PaymentCardRegister = () => {
  const [state, dispatch] = useState({
    digit1: '',
    digit2: '',
    digit3: '',
    digit4: '',
    expire: '',
    name: '',
    cvc: '',
    ps1: '',
    ps2: '',
  });
  const [success, setSuccess] = useState<boolean>(false);

  return (
    <>
      <Title title={'< 카드 추가'} path={'/'} />

      <CardDispatch.Provider value={{ state, dispatch }}>
        <CardPreview />
        <CardRegisterForm />
      </CardDispatch.Provider>

      <Link to={'/complete'}>
        <Button text={'다음'} />
      </Link>
    </>
  );
};

export default PaymentCardRegister;
