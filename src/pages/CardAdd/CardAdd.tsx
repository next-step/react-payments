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

import { useCardNumber, useCardExpiration } from '@/hooks/card';

export default function CardAdd() {
  const { cardNumber, handleChangeCardNumber } = useCardNumber();
  const { cardExpiration, handleChangeExpiration } = useCardExpiration();

  return (
    <div>
      <div className="root">
        <div className="app">
          <h2 className="page-title">
            <Link to="/">&lt;</Link>
            <div className="ml-5">카드 추가</div>
          </h2>
          <CardBox cardNumber={cardNumber} cardExpiration={cardExpiration} />

          <CardNumberInputBox cardNumber={cardNumber} onChange={handleChangeCardNumber} />

          <CardExpirationInputBox cardExpiration={cardExpiration} onChange={handleChangeExpiration} />

          <CardOwnerNameInputBox />

          <CardSecretCodeInputBox />

          <CardPasswordInputBox />

          <Box className="button-box">
            <Button type="button" className="button-text">
              다음
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}
