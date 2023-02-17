import Input from 'components/Input';

import { MAX_LENGTH } from 'constants/card';
import type { CardNumber } from 'types/card';

interface CardNumberContainerProps {
  cardNumber: CardNumber;
  updateCardNumber: (name: string, value: string) => void;
}

function CardNumberContainer({ cardNumber, updateCardNumber }: CardNumberContainerProps) {
  const { num1, num2, num3, num4 } = cardNumber;

  const handleChangeCardNumber: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value, nextElementSibling } = e.currentTarget;

    if (isOverMaxLength(value) && !nextElementSibling) {
      return;
    }

    if (isMaxLength(value) && nextElementSibling && isInputElement(nextElementSibling)) {
      nextElementSibling.focus();
    }

    updateCardNumber(name, value);
  };

  return (
    <div className="input-container">
      <span className="input-title">카드 번호</span>
      <div className="input-box">
        <Input type="text" value={num1} name="num1" onChange={handleChangeCardNumber} />
        <Input type="text" value={num2} name="num2" onChange={handleChangeCardNumber} />
        <Input type="password" value={num3} name="num3" onChange={handleChangeCardNumber} />
        <Input type="password" value={num4} name="num4" onChange={handleChangeCardNumber} />
      </div>
    </div>
  );
}

const isOverMaxLength = (value: string) => value.length > MAX_LENGTH.CARD_NUMBER;
const isMaxLength = (value: string) => value.length === MAX_LENGTH.CARD_NUMBER;
const isInputElement = (args: any): args is HTMLInputElement => args !== undefined;

export default CardNumberContainer;
