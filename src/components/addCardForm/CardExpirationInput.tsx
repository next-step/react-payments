import { IUseInputState } from "src/hooks/useInput";
interface CardExpirationInputProps {
  monthInputState: IUseInputState;
  yearInputState: IUseInputState;
}

const CardExpirationInput = ({
  monthInputState,
  yearInputState,
}: CardExpirationInputProps) => {
  return (
    <div className="input-container">
      <span className="input-title">만료일</span>
      <div className="input-box w-50">
        <input
          className="input-basic"
          type="text"
          placeholder="MM"
          maxLength={2}
          value={monthInputState.value}
          onChange={monthInputState.onChange}
        />
        <input
          className="input-basic"
          type="text"
          placeholder="YY"
          maxLength={2}
          value={yearInputState.value}
          onChange={yearInputState.onChange}
        />
      </div>
    </div>
  );
};

export default CardExpirationInput;
