import InputContainer from '../../../components/InputContainer';
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
      <>
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
        <input className="input-basic w-15" type="password" maxLength={1} value={0} />
        <input className="input-basic w-15" type="password" maxLength={1} value={0} />
      </>
    </InputContainer>
  );
}
