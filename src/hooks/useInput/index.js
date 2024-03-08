import { useFormContext } from "../useFormProvider";

const useInput = (props) => {
  const { name, type, required, length, maxLength, max, min, digit } = props;
  const { register, getValues } = useFormContext();

  const checkValue = (value) => {
    const currentValue = getValues(name);

    if (type === "number") {
      const reg = /[^0-9]/g;

      // 밖 조건식과 한번에  쓰는게 좋을까?
      if (value.match(reg)) {
        value = currentValue;
      }
    }

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
