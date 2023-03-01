import { useNavigate } from 'react-router-dom';

import {
  Card,
  CardNumberContainer,
  ExpiredDateContainer,
  CardOwnerContainer,
  CardPasswordContainer,
  SecretCodeContainer,
  CardCompanyPicker,
} from 'components/domain';
import { Button, Header, Label } from 'components/common';

import { useCardNumber, useExpiredDate, useCardOwner, useCompanyPicker } from './hooks';

import { PATHS } from 'constants/router';
import type { CardType } from 'types/card';

function AddingCard() {
  const navigate = useNavigate();
  const { cardNumber, handleChangeCardNumber } = useCardNumber();
  const { expiredDate, handleChangeExpiredDate } = useExpiredDate();
  const { cardOwner, handleChangeCardOwner } = useCardOwner();
  const { open, company, updateCompany, openPicker } = useCompanyPicker();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const navigateState: CardType = {
      cardNumber,
      expiredDate,
      cardOwner,
      company,
    };

    navigate(PATHS.CONFIRM, { state: navigateState });
  };

  return (
    <div className="app">
      <Header
        title="카드 추가"
        leftSideComponent={<Button fontSize={24} onClick={() => navigate(-1)}>{`<`}</Button>}
      />
      <Label>카드사 선택</Label>
      <div onClick={openPicker}>
        <Card
          cardNumber={cardNumber}
          cardOwner={cardOwner}
          company={company}
          expiredDate={expiredDate}
        />
      </div>
      <form onSubmit={handleSubmit}>
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
          <Button type="submit" fontSize={16}>
            다음
          </Button>
        </div>
      </form>
      {open && <CardCompanyPicker updateCompany={updateCompany} />}
    </div>
  );
}

export default AddingCard;
