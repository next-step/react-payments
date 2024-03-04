import { FIRST_NUMBER, SECOND_NUMBER } from "../../constants/cardNumber";
import { getNumberString } from "../../util/regExp";

export default function PasswordInput({ password, setPassword }) {
  const onChangePassword = (event) => {
    const { value, name } = event.target;

    const onlyNumberValue = getNumberString(value);

    setPassword((prev) => {
      return { ...prev, [name]: onlyNumberValue };
    });
  };

  return (
    <>
      <input
        value={password[FIRST_NUMBER]}
        name={FIRST_NUMBER}
        onChange={onChangePassword}
        className="input-basic w-15"
        type="password"
        maxLength="1"
      />

      <input
        value={password[SECOND_NUMBER]}
        name={SECOND_NUMBER}
        onChange={onChangePassword}
        className="input-basic w-15"
        type="password"
        maxLength="1"
      />
      <input
        value="*"
        className="input-basic input-disabled w-15"
        type="password"
        disabled
        maxLength="1"
      />
      <input
        value="*"
        className="input-basic input-disabled w-15"
        type="password"
        disabled
        maxLength="1"
      />
    </>
  );
}
