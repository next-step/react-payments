import { Link } from 'react-router-dom';

import { Box, Button } from '@/components/Common';
import {
  CardBox,
  NumberInputBox,
  ExpirationInputBox,
  SecretCodeInputBox,
  PasswordInputBox,
  OwnerNameInputBox,
  NextButtonBox,
  TitleBox,
} from '@/components/CardAdd';
import { useCardNumber, useCardExpiration, useCardOwnerName } from '@/hooks/card';

export default function CardAdd() {
  const { cardNumber, handleChangeCardNumber } = useCardNumber();
  const { cardExpiration, handleChangeExpiration } = useCardExpiration();
  const { cardOwnerName, handleChangeCardOwnerName } = useCardOwnerName();

  return (
    <div className="root">
      <div className="app">
        <TitleBox />
        <CardBox cardNumber={cardNumber} cardExpiration={cardExpiration} cardOwnerName={cardOwnerName} />
        <NumberInputBox cardNumber={cardNumber} onChange={handleChangeCardNumber} />
        <ExpirationInputBox cardExpiration={cardExpiration} onChange={handleChangeExpiration} />
        <OwnerNameInputBox cardOwnerName={cardOwnerName} onChange={handleChangeCardOwnerName} />
        <SecretCodeInputBox />
        <PasswordInputBox />
        <NextButtonBox />
      </div>
    </div>
  );
}
