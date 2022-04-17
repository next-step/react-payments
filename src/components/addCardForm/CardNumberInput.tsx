import { InputFieldName, InputType, MaxLength } from "@common/constants";
import { UseFormRegister, UseFormWatch } from "@hooks/useForm";

interface CardNumberInputProps {
  register?: UseFormRegister;
  watch?: UseFormWatch;
}

const CardNumberPattern = `\\d{${MaxLength.CardNumberInput}}`;
const invalidMessage = `Input cardNumber format, ${MaxLength.CardNumberInput} digit`;

const CardNumberInput = ({ register, watch }: CardNumberInputProps) => {
  watch?.(InputFieldName.CardNumber1);
  watch?.(InputFieldName.CardNumber2);
  watch?.(InputFieldName.CardNumber3);
  watch?.(InputFieldName.CardNumber4);

  return (
    <div className="input-container">
      <span className="input-title">카드 번호</span>
      <div className="input-box">
        <input
          className="input-basic"
          type={InputType.text}
          maxLength={MaxLength.CardNumberInput}
          {...register?.(InputFieldName.CardNumber1, {
            pattern: CardNumberPattern,
            required: true,
            invalidMessage,
          })}
        />
        <input
          className="input-basic"
          type={InputType.text}
          maxLength={MaxLength.CardNumberInput}
          {...register?.(InputFieldName.CardNumber2, {
            pattern: CardNumberPattern,
            required: true,
            invalidMessage,
          })}
        />
        <input
          className="input-basic"
          type={InputType.password}
          maxLength={MaxLength.CardNumberInput}
          {...register?.(InputFieldName.CardNumber3, {
            pattern: CardNumberPattern,
            required: true,
            invalidMessage,
          })}
        />
        <input
          className="input-basic"
          type={InputType.password}
          maxLength={MaxLength.CardNumberInput}
          {...register?.(InputFieldName.CardNumber4, {
            pattern: CardNumberPattern,
            required: true,
            invalidMessage,
          })}
        />
      </div>
    </div>
  );
};

export default CardNumberInput;
