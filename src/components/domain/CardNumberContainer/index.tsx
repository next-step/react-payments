import { Input, Dash, Label } from 'components/common';

import { useInputFocusing, useRefs } from 'hooks';

import { INPUT_NAME, MAX_LENGTH } from 'constants/card';
import type { CardNumber } from 'types/card';

interface CardNumberContainerProps {
  cardNumber: CardNumber;
  handleChangeCardNumber: React.ChangeEventHandler<HTMLInputElement>;
}

function CardNumberContainer({ cardNumber, handleChangeCardNumber }: CardNumberContainerProps) {
  const { num1, num2, num3, num4 } = cardNumber;

  const [num1Ref, num2Ref, num3Ref, num4Ref] = useRefs<HTMLInputElement>(4);

  useInputFocusing({
    refs: [num1Ref, num2Ref, num3Ref, num4Ref],
    deps: [num1, num2, num3, num4],
    maxLength: MAX_LENGTH.CARD_NUMBER,
  });

  return (
    <div className="input-container">
      <Label>카드 번호</Label>
      <div className="input-box">
        <Input
          ref={num1Ref}
          placeholder="1234"
          type="text"
          value={num1}
          name={INPUT_NAME.NUM1}
          onChange={handleChangeCardNumber}
          maxLength={MAX_LENGTH.CARD_NUMBER}
          required
        />
        {num1.length === MAX_LENGTH.CARD_NUMBER && <Dash />}
        <Input
          ref={num2Ref}
          placeholder="5678"
          type="text"
          value={num2}
          name={INPUT_NAME.NUM2}
          onChange={handleChangeCardNumber}
          maxLength={MAX_LENGTH.CARD_NUMBER}
          required
        />
        {num2.length === MAX_LENGTH.CARD_NUMBER && <Dash />}
        <Input
          ref={num3Ref}
          placeholder="1234"
          type="password"
          value={num3}
          name={INPUT_NAME.NUM3}
          onChange={handleChangeCardNumber}
          maxLength={MAX_LENGTH.CARD_NUMBER}
          required
        />
        {num3.length === MAX_LENGTH.CARD_NUMBER && <Dash />}
        <Input
          ref={num4Ref}
          placeholder="5678"
          type="password"
          value={num4}
          name={INPUT_NAME.NUM4}
          onChange={handleChangeCardNumber}
          maxLength={MAX_LENGTH.CARD_NUMBER}
          required
        />
      </div>
    </div>
  );
}

export default CardNumberContainer;
