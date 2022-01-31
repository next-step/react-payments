import { InputFieldName, InputType, MaxLength } from "@common/constants";
import { UseFormRegister } from "@hooks/useForm";

interface CardPasswordInputProps {
  register?: UseFormRegister;
}

const cardPasswordPattern = `\\d{${MaxLength.CardPasswordInput}}`;
const invalidMessage = "input Password format, digit";

const CardPasswordInput = ({ register }: CardPasswordInputProps) => {
  return (
    <div className="input-container">
      <span className="input-title">카드 비밀번호</span>
      <input
        className="input-basic w-15"
        type={InputType.password}
        maxLength={MaxLength.CardPasswordInput}
        {...register?.(InputFieldName.CardPassword1, {
          required: true,
          pattern: cardPasswordPattern,
          invalidMessage,
        })}
      />
      <input
        className="input-basic w-15"
        type={InputType.password}
        maxLength={MaxLength.CardPasswordInput}
        {...register?.(InputFieldName.CardPassword2, {
          required: true,
          pattern: cardPasswordPattern,
          invalidMessage,
        })}
      />
      <input
        className="input-basic w-15"
        type={InputType.password}
        value={0}
        disabled
      />
      <input
        className="input-basic w-15"
        type={InputType.password}
        value={0}
        disabled
      />
    </div>
  );
};

export default CardPasswordInput;
