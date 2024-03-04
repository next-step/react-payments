import { InputContainer } from '../../../components';
import { CardAction } from '../reducer';

interface CardPassword {
  cardPassword: {
    first: string;
    second: string;
  };
  cardPasswordDispatch: React.Dispatch<CardAction>;
}

export default function CardPassword({ cardPassword, cardPasswordDispatch }: CardPassword) {
  return (
    <InputContainer inputTitle={'카드 비밀번호'}>
      <div className="flex g-8">
        <input
          className="input-basic w-15"
          type="password"
          maxLength={1}
          value={cardPassword.first}
          onChange={(e) => cardPasswordDispatch({ type: 'cardPasswordFirst', param: e.target.value })}
        />
        <input
          className="input-basic w-15"
          type="password"
          maxLength={1}
          value={cardPassword.second}
          onChange={(e) => cardPasswordDispatch({ type: 'cardPasswordSecond', param: e.target.value })}
        />
        <input disabled className="input-basic w-15" type="password" maxLength={1} value={COSNT._value} />
        <input disabled className="input-basic w-15" type="password" maxLength={1} value={COSNT._value} />
      </div>
    </InputContainer>
  );
}

const COSNT = {
  _value: 0,
};
