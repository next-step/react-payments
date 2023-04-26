type THookBaseInputHandler = {
  onChange?: (newValue: string) => void;
  onFulfill?: (value: string) => void;
  nextRef?: React.RefObject<HTMLInputElement | HTMLButtonElement>;
  maxLength?: number;
};

const useBasicInput = ({ onChange, onFulfill, nextRef, maxLength }: THookBaseInputHandler) => {
  const handleFullfilled = (value: string) => {
    if (maxLength && value.length === maxLength) {
      onFulfill?.(value);
      nextRef?.current?.focus();
    }
  };

  const handleChange = (newValue: string) => {
    onChange?.(newValue);
    handleFullfilled(newValue);
  };

  return { handleFullfilled, handleChange };
};

export default useBasicInput;
