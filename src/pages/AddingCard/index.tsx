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

import { useRouter } from 'hooks';
import { useCardNumber, useExpiredDate, useOwner, useCompanyPicker } from './hooks';

import { PATHS } from 'constants/router';
import type { ICard } from 'types/card';

function AddingCard() {
  const { navigate, goBack } = useRouter();
  const { cardNumber, handleChangeCardNumber } = useCardNumber();
  const { expiredDate, handleChangeExpiredDate } = useExpiredDate();
  const { owner, handleChangeOwner } = useOwner();
  const { open, company, updateCompany, openPicker } = useCompanyPicker();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const navigateState: ICard = {
      cardNumber,
      expiredDate,
      owner,
      company,
    };

    navigate(PATHS.CONFIRM, { state: navigateState });
  };

  return (
    <div className="app">
      <Header
        title="카드 추가"
        leftSideComponent={<Button fontSize={24} onClick={goBack}>{`＜`}</Button>}
      />
      <Label>카드사 선택</Label>
      <div onClick={openPicker}>
        <Card cardNumber={cardNumber} owner={owner} company={company} expiredDate={expiredDate} />
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
        <CardOwnerContainer owner={owner} handleChangeOwner={handleChangeOwner} />
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
