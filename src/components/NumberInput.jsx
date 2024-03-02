/* eslint-disable react/prop-types */
import { getNumberString } from "../util/regExp";

export default function NumberInput({
  myref,
  value,
  setValue,
  type,
  maxLength,
  nextRef,
}) {
  const onChangeInputFn = (event) => {
    const onlyNumberValue = getNumberString(event.target.value);

    if (nextRef !== undefined && onlyNumberValue.length === maxLength) {
      nextRef.focus();
    }

    setValue(onlyNumberValue);
  };

  return (
    <input
      ref={myref}
      value={value}
      onChange={onChangeInputFn}
      className="input-basic"
      type={type}
      maxLength={maxLength}
    />
  );
}
