import { useFormContext } from "react-hook-form";

// Input 컴포넌트만을 위한 커스텀 훅인데 굳이 따로 추상화를할 필요가 있을까?
// checkValue를 따로 뺴는게 가독성에 더 좋을지?
// checkValue를 useCallback을 써서 처리를 하는게 좋을지?
// => 복잡한 작업이 아니라서 useCallback을 사용할 정도는 아닌거 같음
const useInput = (props) => {
  const { name, maxLength, max, min, digit } = props;
  const { register, getValues, setValue } = useFormContext();

  const checkValue = (e) => {
    let { value } = e.target;
    const currentValue = getValues(name);

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
    ...register(name),
    onChange: handleChange,
  };
};

export default useInput;
