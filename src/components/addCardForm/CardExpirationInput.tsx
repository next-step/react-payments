import { InputFieldName, MaxLength } from "@common/constants";
import { UseFormRegister, UseFormWatch } from "@hooks/useForm";
import { InvalidEvent } from "react";

interface CardExpirationInputProps {
  register?: UseFormRegister;
  watch?: UseFormWatch;
}

const monthPattern = "^0?[1-9]|1[012]$";
const monthInvalidMessage = "Input month format, 1 ~ 12";

const yearPattern = "^0?[1-9]|[1-9][0-9]$";
const yearInvalidMessage = "Input year format, 0 ~ 99";

const CardExpirationInput = ({ register, watch }: CardExpirationInputProps) => {
  watch?.(InputFieldName.MonthExpiration);
  watch?.(InputFieldName.YearExpiration);

  return (
    <div className="input-container">
      <span className="input-title">만료일</span>
      <div className="input-box w-50">
        <input
          className="input-basic"
          type="text"
          placeholder="MM"
          onInvalidCapture={(e: InvalidEvent<HTMLInputElement>) =>
            e.target.setCustomValidity(monthInvalidMessage)
          }
          maxLength={MaxLength.CardExpirationInput}
          {...register?.(InputFieldName.MonthExpiration, {
            required: true,
            pattern: monthPattern,
            invalidMessage: monthInvalidMessage,
          })}
        />
        <input
          className="input-basic"
          type="text"
          placeholder="YY"
          maxLength={MaxLength.CardExpirationInput}
          onInvalidCapture={(e: InvalidEvent<HTMLInputElement>) =>
            e.target.setCustomValidity(yearInvalidMessage)
          }
          {...register?.(InputFieldName.YearExpiration, {
            required: true,
            pattern: yearPattern,
            invalidMessage: yearInvalidMessage,
          })}
        />
      </div>
    </div>
  );
};

export default CardExpirationInput;
