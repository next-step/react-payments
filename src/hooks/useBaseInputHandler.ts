type THookBaseInputHandler = {
  onChange?: (newValue: string) => void;
  onFulfill?: (value: string) => void;
  nextRef?: React.RefObject<HTMLInputElement | HTMLButtonElement>;
  maxLength?: number;
};

export default ({ onChange, onFulfill, nextRef, maxLength }: THookBaseInputHandler) => {
  const handleChange = (newValue: string) => {
    onChange?.(newValue);
    handleFullfilled(newValue);
  };

  const handleFullfilled = (value: string) => {
    if (maxLength && value.length === maxLength) {
      onFulfill?.(value);
      nextRef?.current?.focus();
    }
  };

  return { handleChange, handleFullfilled };
};
