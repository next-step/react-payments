import { Link } from 'react-router-dom';

import { Box, Button } from '@/components/Common';
import {
  CardBox,
  CardNumberInputBox,
  CardExpirationInputBox,
  CardSecretCodeInputBox,
  CardPasswordInputBox,
  CardOwnerNameInputBox,
} from '@/components/Card';

import { useCardNumber, useCardExpiration, useCardOwnerName } from '@/hooks/card';

export default function CardAdd() {
  const { cardNumber, handleChangeCardNumber } = useCardNumber();
  const { cardExpiration, handleChangeExpiration } = useCardExpiration();
  const { cardOwnerName, handleChangeCardOwnerName } = useCardOwnerName();

  return (
    <div>
      <div className="root">
        <div className="app">
          <h2 className="page-title">
            <Link to="/">&lt;</Link>
            <div className="ml-5">카드 추가</div>
          </h2>
          <CardBox cardNumber={cardNumber} cardExpiration={cardExpiration} cardOwnerName={cardOwnerName} />

          <CardNumberInputBox cardNumber={cardNumber} onChange={handleChangeCardNumber} />

          <CardExpirationInputBox cardExpiration={cardExpiration} onChange={handleChangeExpiration} />

          <CardOwnerNameInputBox cardOwnerName={cardOwnerName} onChange={handleChangeCardOwnerName} />

          <CardSecretCodeInputBox />

          <CardPasswordInputBox />

          <Box className="button-box">
            <Link to="/card-completed">
              <Button type="button" className="button-text">
                다음
              </Button>
            </Link>
          </Box>
        </div>
      </div>
    </div>
  );
}
