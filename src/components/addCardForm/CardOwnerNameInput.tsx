import { MaxLength, InputType, InputFieldName } from "@common/constants";
import { UseFormRegister, UseFormWatch } from "@hooks/useForm";

interface CardOwnerNameInputProps {
  register?: UseFormRegister;
  watch?: UseFormWatch;
}
const namePattern = "^[a-zA-Z]+|[a-zA-Z]+ [a-zA-Z]+$";
const invalidMessage = `input Name format:{firstName} {LastName} (only alphabet)`;

const CardOwnerNameInput = ({ register, watch }: CardOwnerNameInputProps) => {
  const formData = watch?.(InputFieldName.OwnerName) ?? {};
  const currentInputLength: number =
    formData[InputFieldName.OwnerName]?.length ?? 0;

  return (
    <div className="input-container">
      <span className="input-title">
        카드 소유자 이름(선택) (현재 입력 자릿수: {currentInputLength}) 최대
        입력 자릿수: {MaxLength.OwnerNameInput})
      </span>
      <input
        type={InputType.text}
        className="input-basic"
        maxLength={MaxLength.OwnerNameInput}
        {...register?.(InputFieldName.OwnerName, {
          required: false,
          pattern: namePattern,
          invalidMessage,
        })}
      />
    </div>
  );
};

export default CardOwnerNameInput;
