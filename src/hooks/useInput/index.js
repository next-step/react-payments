import { useFormContext } from "../useFormProvider";

const useInput = (props) => {
  const { name, required, length, maxLength, max, min, digit } = props;
  const { register, getValues } = useFormContext();

  const checkValue = (value) => {
    console.log(value);
    const currentValue = getValues(name);

    if (value.length > length) {
      value = currentValue;
    }

    console.log(value, value.length);

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
    const value = checkValue(e.target.value);

    return { target: { value } };
  };

  return {
    ...register(
      name,
      {
        required,
        maxLength,
        minLength: length,
      },
      handleChange
    ),
  };
};

export default useInput;
