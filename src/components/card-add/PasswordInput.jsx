import { FIRST_NUMBER, SECOND_NUMBER } from "../../constants/cardNumber";
import { getNumberString } from "../../util/regExp";
import { useAutoFocus } from "../../hook/useAutoFocus";
import Input from "../atomic-design-pattern/atom/Input";
import { useCardState } from "../../hook/useCardState";

const nextRefMap = {
  [FIRST_NUMBER]: SECOND_NUMBER,
  [SECOND_NUMBER]: null,
};

export default function PasswordInput() {
  const { cardState, setCardState } = useCardState();
  const [passwordRef, changeFocus] = useAutoFocus(nextRefMap);
  const onChangePassword = (event) => {
    const { value, name, maxLength } = event.target;

    const onlyNumberValue = getNumberString(value);

    changeFocus(onlyNumberValue.length === maxLength, name);

    setCardState((prev) => {
      const newPassword = { ...prev.password, [name]: onlyNumberValue };
      return { ...prev, password: newPassword };
    });
  };

  return (
    <>
      <Input
        value={cardState.password[FIRST_NUMBER]}
        name={FIRST_NUMBER}
        ref={(el) => (passwordRef.current[FIRST_NUMBER] = el)}
        onChange={onChangePassword}
        className="w-15"
        type="password"
        maxLength="1"
      />

      <Input
        value={cardState.password[SECOND_NUMBER]}
        name={SECOND_NUMBER}
        ref={(el) => (passwordRef.current[SECOND_NUMBER] = el)}
        onChange={onChangePassword}
        className="w-15"
        type="password"
        maxLength="1"
      />
      <Input
        value="*"
        className="input-disabled w-15"
        type="password"
        disabled
        maxLength="1"
      />
      <Input
        value="*"
        className="input-disabled w-15"
        type="password"
        disabled
        maxLength="1"
      />
    </>
  );
}
