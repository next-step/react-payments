import { InputContainer, Mark } from 'src/components';
import { MARK } from 'src/constant';
import { CardAction } from '../reducer';

interface CardExpiration {
  expiration: {
    month: string;
    year: string;
  };
  cardExpirationDispatch: React.Dispatch<CardAction>;
}

export default function CardExpiration({ expiration, cardExpirationDispatch }: CardExpiration) {
  return (
    <InputContainer inputTitle={'만료일'}>
      <div className="input-box w-50">
        <input
          className="input-basic"
          type="text"
          placeholder="MM"
          maxLength={2}
          value={expiration.month}
          onChange={(e) => cardExpirationDispatch({ type: 'expirationMonth', param: e.target.value })}
        />
        <Mark mark={MARK.slash} />
        <input
          className="input-basic"
          type="text"
          placeholder="YY"
          maxLength={2}
          value={expiration.year}
          onChange={(e) => cardExpirationDispatch({ type: 'expirationYear', param: e.target.value })}
        />
      </div>
    </InputContainer>
  );
}
