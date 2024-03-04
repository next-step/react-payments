import ConditionalMark from '../../../components/ConditionalMark';
import InputContainer from '../../../components/InputContainer';
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
  return (
    <InputContainer inputTitle={'카드 번호'}>
      <div className="input-box">
        <input
          className="input-basic"
          type="text"
          maxLength={4}
          value={cardNumber.first}
          onChange={(e) => cardNumberDispatch({ type: 'cardNumberFirst', param: e.target.value })}
        />
        <ConditionalMark isShow={cardNumber.first.length === 4} mark={MARK.dash} />
        <input
          className="input-basic"
          type="text"
          maxLength={4}
          value={cardNumber.second}
          onChange={(e) => cardNumberDispatch({ type: 'cardNumberSecond', param: e.target.value })}
        />
        <ConditionalMark isShow={cardNumber.second.length === 4} mark={MARK.dash} />
        <input
          className="input-basic"
          type="password"
          maxLength={4}
          value={cardNumber.third}
          onChange={(e) => cardNumberDispatch({ type: 'cardNumberThird', param: e.target.value })}
        />
        <ConditionalMark isShow={cardNumber.third.length === 4} mark={MARK.dash} />
        <input
          className="input-basic"
          type="password"
          maxLength={4}
          value={cardNumber.fourth}
          onChange={(e) => cardNumberDispatch({ type: 'cardNumberFourth', param: e.target.value })}
        />
      </div>
    </InputContainer>
  );
}
