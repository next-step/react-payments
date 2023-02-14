import { Link } from 'react-router-dom';

import { Input, Box, Button } from '@/components/Common';
import { CardBox, CardNumberInputBox, CardExpirationInputBox, CardSecretCodeInputBox } from '@/components/Card';

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

          <Box title="카드 소유자 이름(선택)" className="input-container">
            <Input type="text" className="input-basic" placeholder="카드에 표시된 이름과 동일하게 입력하세요." />
          </Box>

          <CardSecretCodeInputBox />

          <Box title="카드 비밀번호" className="input-container">
            <Input className="input-basic w-15" type="password" />
            <Input className="input-basic w-15" type="password" />
            <Input className="input-basic w-15" type="password" />
            <Input className="input-basic w-15" type="password" />
          </Box>

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
