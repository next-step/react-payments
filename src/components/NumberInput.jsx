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

    console.log(myref, nextRef);
    if (nextRef !== undefined && onlyNumberValue.length === maxLength) {
      nextRef.current.focus();
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
