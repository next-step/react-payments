import Input from '../Input';

import updateValidValue from '../../utils/updateValidValue';

import { CARD_NUMBER_LIMIT } from '../../constants/cardLimit';

import type { CardNumberType } from '../../types/CardFormType';

type CardNumberProps = {
  cardNumber: CardNumberType;
  setCardNumber: (
    prevState: CardNumberType | ((prevState: CardNumberType) => CardNumberType)
  ) => void;
};

export default function CardNumber({
  cardNumber,
  setCardNumber,
}: CardNumberProps) {
  const handleChangeCardNumber = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value, name } = event.target;

    updateValidValue({
      limit: CARD_NUMBER_LIMIT,
      setter(value) {
        setCardNumber((prev) => ({
          ...prev,
          [name]: value,
        }));
      },
      value,
      isMonth: false,
      isNumber: true,
    });
  };

  return (
    <div className="input-container">
      <span className="input-title">카드 번호</span>
      <div className="input-box">
        <Input
          variant="basic"
          type="text"
          value={cardNumber.firstNumber}
          name={'firstNumber'}
          onChange={handleChangeCardNumber}
        />
        <Input
          variant="basic"
          type="text"
          value={cardNumber.secondNumber}
          name={'secondNumber'}
          onChange={handleChangeCardNumber}
        />
        <Input
          variant="basic"
          type="password"
          value={cardNumber.thirdNumber}
          name={'thirdNumber'}
          onChange={handleChangeCardNumber}
        />
        <Input
          variant="basic"
          type="password"
          value={cardNumber.fourthNumber}
          name={'fourthNumber'}
          onChange={handleChangeCardNumber}
        />
      </div>
    </div>
  );
}
