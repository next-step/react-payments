import {
  Card,
  CardNumberContainer,
  ExpiredDateContainer,
  CardOwnerContainer,
  CardPasswordContainer,
  SecretCodeContainer,
  CardCompanyPicker,
} from 'components/domain';
import { useCardNumber, useExpiredDate, useCardOwner, useCompanyPicker } from './hooks';

function AddingCard() {
  const { cardNumber, handleChangeCardNumber } = useCardNumber();
  const { expiredDate, handleChangeExpiredDate } = useExpiredDate();
  const { cardOwner, handleChangeCardOwner } = useCardOwner();
  const { open, company, updateCompany, openPicker } = useCompanyPicker();

  return (
    <div className="app">
      <h2 className="page-title">{`<`} 카드 추가</h2>
      <span className="input-title">카드사 선택</span>
      <div onClick={openPicker}>
        <Card
          cardNumber={cardNumber}
          name={cardOwner}
          company={company}
          expiredDate={expiredDate}
        />
      </div>
      <form>
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
      </form>
      {open && <CardCompanyPicker updateCompany={updateCompany} />}
    </div>
  );
}

export default AddingCard;
