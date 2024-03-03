import { useState } from "react";

const UseInput = () => {
  const [InputValue, setInputValue] = useState<string[]>([]);

  const handleInput = (input: string) => {
    setInputValue([...InputValue, input]);
  };

  return { InputValue, handleInput };
};

export default UseInput;
