import {
  Card,
  CardNumberContainer,
  ExpiredDateContainer,
  CardOwnerContainer,
  CardPasswordContainer,
} from 'components/domain';

import { useCardNumber, useExpiredDate, useCardOwner } from './hooks';
import { CardCompany } from 'types/card';
import SecretCodeContainer from 'components/domain/SecretCodeContainer';

function AddingCard() {
  const { cardNumber, handleChangeCardNumber } = useCardNumber();
  const { expiredDate, handleChangeExpiredDate } = useExpiredDate();
  const { cardOwner, handleChangeCardOwner } = useCardOwner();

  return (
    <div className="app">
      <h2 className="page-title">{`<`} 카드 추가</h2>
      <span className="input-title">카드사 선택</span>
      <Card
        cardNumber={cardNumber}
        name={cardOwner}
        company={CardCompany.Hana}
        expiredDate={expiredDate}
      />
      <CardNumberContainer
        cardNumber={cardNumber}
        handleChangeCardNumber={handleChangeCardNumber}
      />
      <ExpiredDateContainer
        expiredDate={expiredDate}
        handleChangeExpiredDate={handleChangeExpiredDate}
      />
      <CardOwnerContainer cardOwner={cardOwner} handleChangeCardOwner={handleChangeCardOwner} />
      <SecretCodeContainer />
      <CardPasswordContainer />
      <div className="button-box">
        <span className="button-text">다음</span>
      </div>
    </div>
  );
}

export default AddingCard;
