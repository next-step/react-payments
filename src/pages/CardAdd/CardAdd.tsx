import { useMemo } from 'react';

import {
  CardBox,
  NumberInputBox,
  ExpirationInputBox,
  SecretCodeInputBox,
  PasswordInputBox,
  OwnerNameInputBox,
  NextButtonBox,
  TitleBox,
  CardSelectModal,
  CardSelectButton,
} from '@/components/CardAdd';
import {
  useCardNumber,
  useCardExpiration,
  useCardOwnerName,
  useCardSelectModal,
  useCardSecretCode,
  useCardPassword,
} from '@/hooks/card';

export default function CardAdd() {
  const { cardNumber, 카드번호가모두입력된, handleChangeCardNumber } = useCardNumber();
  const { cardExpiration, 만료일이모두입력된, handleChangeExpiration } = useCardExpiration();
  const { cardOwnerName, handleChangeCardOwnerName } = useCardOwnerName();
  const { cardSecretCode, 카드CVC가모두입력된, handleChangeCardSecretCode } = useCardSecretCode();
  const { cardPassword, 카드비밀번호가모두입력된, handleChangeCardPassword } = useCardPassword();
  const { isModalOpen, selectedCard, 카드사가선택된, handleClickOpenModal, handleClickCloseModal, handleClickCard } =
    useCardSelectModal();

  const isCompleted = useMemo(() => {
    return [
      카드번호가모두입력된,
      만료일이모두입력된,
      카드CVC가모두입력된,
      카드비밀번호가모두입력된,
      카드사가선택된,
    ].every((elem) => elem === true);
  }, [만료일이모두입력된, 카드CVC가모두입력된, 카드번호가모두입력된, 카드비밀번호가모두입력된, 카드사가선택된]);

  return (
    <div className="root">
      <form className="app">
        {isModalOpen && <CardSelectModal onClick={handleClickCard} onCloseModal={handleClickCloseModal} />}
        <TitleBox />
        <CardBox
          cardNumber={cardNumber}
          cardExpiration={cardExpiration}
          cardOwnerName={cardOwnerName}
          selectedCard={selectedCard}
        />
        <CardSelectButton onClick={handleClickOpenModal} />
        <NumberInputBox cardNumber={cardNumber} onChange={handleChangeCardNumber} />
        <ExpirationInputBox cardExpiration={cardExpiration} onChange={handleChangeExpiration} />
        <OwnerNameInputBox cardOwnerName={cardOwnerName} onChange={handleChangeCardOwnerName} />
        <SecretCodeInputBox cardSecretCode={cardSecretCode} onChange={handleChangeCardSecretCode} />
        <PasswordInputBox cardPassword={cardPassword} onChange={handleChangeCardPassword} />
        <NextButtonBox isCompleted={isCompleted} />
      </form>
    </div>
  );
}
