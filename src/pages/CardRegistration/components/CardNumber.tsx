import { ConditionalMark, InputContainer } from '../../../components';
import { MARK } from '../../../constant';
import type { CardAction } from '../reducer';

interface CardNumber {
  cardNumber: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
  cardNumberDispatch: React.Dispatch<CardAction>;
}

export default function CardNumber({ cardNumber, cardNumberDispatch }: CardNumber) {
  const isMarkShow = {
    first: cardNumber.first.length === CONST.cardNumberMaxLength,
    second: cardNumber.second.length === CONST.cardNumberMaxLength,
    third: cardNumber.third.length === CONST.cardNumberMaxLength,
  };

  return (
    <InputContainer inputTitle={'카드 번호'}>
      <div className="input-box">
        <input
          className="input-basic"
          type="text"
          maxLength={CONST.cardNumberMaxLength}
          value={cardNumber.first}
          onChange={(e) => cardNumberDispatch({ type: 'cardNumberFirst', param: e.target.value })}
        />
        <ConditionalMark isShow={isMarkShow.first} mark={MARK.dash} />
        <input
          className="input-basic"
          type="text"
          maxLength={CONST.cardNumberMaxLength}
          value={cardNumber.second}
          onChange={(e) => cardNumberDispatch({ type: 'cardNumberSecond', param: e.target.value })}
        />
        <ConditionalMark isShow={isMarkShow.second} mark={MARK.dash} />
        <input
          className="input-basic"
          type="password"
          maxLength={CONST.cardNumberMaxLength}
          value={cardNumber.third}
          onChange={(e) => cardNumberDispatch({ type: 'cardNumberThird', param: e.target.value })}
        />
        <ConditionalMark isShow={isMarkShow.third} mark={MARK.dash} />
        <input
          className="input-basic"
          type="password"
          maxLength={CONST.cardNumberMaxLength}
          value={cardNumber.fourth}
          onChange={(e) => cardNumberDispatch({ type: 'cardNumberFourth', param: e.target.value })}
        />
      </div>
    </InputContainer>
  );
}

const CONST = {
  cardNumberMaxLength: 4,
};
