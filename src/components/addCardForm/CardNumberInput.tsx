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
            type={i < 2 ? "text" : "password"}
            maxLength={MaxLength.CardNumberInput}
            value={carNumInputState.value}
            onChange={carNumInputState.onChange}
          />
        ))}
      </div>
    </div>
  );
};

export default CardNumberInput;
