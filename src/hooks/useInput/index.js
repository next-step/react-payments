import { useFormContext } from "../useFormProvider";

const useInput = (props) => {
  const { name, required, length, maxLength, max, min, digit } = props;
  const { register, getValues, setValue } = useFormContext();

  const checkValue = (e) => {
    let { value } = e.target;
    const currentValue = getValues(name);

    if (value.length > length) {
      value = currentValue;
    }

    if (value.length > maxLength) {
      value = currentValue;
    }

    if (max && Number(value) > max) {
      value = max;
    }

    if (min && Number(value) < min) {
      value = min;
    }

    if (digit) {
      value = value[digit.pad](digit.length, digit.fill);
    }

    return value;
  };

  const handleChange = (e) => {
    const value = (e.target.value = checkValue(e));
    setValue(name, value);
  };

  return {
    ...register(name, {
      required,
      maxLength,
      minLength: length,
    }),
    onChange: handleChange,
  };
};

export default useInput;
