import { MaxLength } from "@common/constants";
import { IUseInputState } from "@hooks/useInput";

interface CardNumberInputProps {
  cardNumInputStateList: IUseInputState[];
}

const CardNumberInput = ({ cardNumInputStateList }: CardNumberInputProps) => {
  return (
    <div className="input-container">
      <span className="input-title">카드 번호</span>
      <div className="input-box">
        {cardNumInputStateList.map((carNumInputState, i) => (
          <input
            className="input-basic"
            type={carNumInputState.type}
            maxLength={MaxLength.CardNumberInput}
            value={carNumInputState.value}
            onChange={carNumInputState.onChange}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default CardNumberInput;
