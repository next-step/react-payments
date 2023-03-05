import {
  Card,
  CardNumberContainer,
  CardExpiredDateContainer,
  CardOwnerContainer,
  CardPasswordContainer,
  CardSecretCodeContainer,
  CardCompanyPicker,
} from 'components/domain';
import { Button, Header, Label } from 'components/common';

import { useRouter } from 'hooks';
import { useNumbers, useExpiredDate, useOwner, useCompanyPicker } from './hooks';

import { PATHS } from 'constants/router';
import type { ICardWithoutId } from 'types/card';

function AddingCard() {
  const { go, goBack } = useRouter();
  const { numbers, handleChangeNumbers } = useNumbers();
  const { expiredDate, handleChangeExpiredDate } = useExpiredDate();
  const { owner, handleChangeOwner } = useOwner();
  const { open, company, updateCompany, openPicker } = useCompanyPicker();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const navigateState: ICardWithoutId = {
      numbers,
      expiredDate,
      owner,
      company,
    };

    go(PATHS.CONFIRM, { state: navigateState });
  };

  return (
    <div className="app">
      <Header
        title="카드 추가"
        leftSideComponent={<Button fontSize={24} onClick={goBack}>{`＜`}</Button>}
      />
      <Label>카드사 선택</Label>
      <div onClick={openPicker}>
        <Card numbers={numbers} owner={owner} company={company} expiredDate={expiredDate} />
      </div>
      <form onSubmit={handleSubmit}>
        <CardNumberContainer numbers={numbers} handleChangeNumbers={handleChangeNumbers} />
        <CardExpiredDateContainer
          expiredDate={expiredDate}
          handleChangeExpiredDate={handleChangeExpiredDate}
        />
        <CardOwnerContainer owner={owner} handleChangeOwner={handleChangeOwner} />
        <CardSecretCodeContainer />
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
