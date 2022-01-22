import { MaxLength } from "@common/constants";
import { IUseInputState } from "@hooks/useInput";

interface CardPasswordInputProps {
  passwordInputStateList: IUseInputState[];
}

const CardPasswordInput = ({
  passwordInputStateList,
}: CardPasswordInputProps) => {
  return (
    <div className="input-container">
      <span className="input-title">카드 비밀번호</span>
      {passwordInputStateList.map((passwordInputState, i) => (
        <input
          className="input-basic w-15"
          type={passwordInputState.type}
          maxLength={MaxLength.CardPasswordInput}
          onChange={passwordInputState.onChange}
          value={passwordInputState.value}
          key={i}
        />
      ))}
      <input className="input-basic w-15" type="password" value={0} disabled />
      <input className="input-basic w-15" type="password" value={0} disabled />
    </div>
  );
};

export default CardPasswordInput;
