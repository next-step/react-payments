import { ChangeEventHandler, useEffect, useState } from "react";

import Styled from "./LabeledTextInput.styles";

interface Props {
  label: string;
  onChange?: (value: string) => void;
  maxLength?: number;
}

const LabeledTextInput = ({ label, onChange, maxLength }: Props) => {
  const [value, setValue] = useState("");

  const _onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    onChange?.(value);
  }, [value]);

  return (
    <Styled.InputWrapper label={label}>
      {maxLength && (
        <Styled.Indicator>
          {value.length} / {maxLength}
        </Styled.Indicator>
      )}
      <input type="text" value={value} onChange={_onChange} maxLength={maxLength} />
    </Styled.InputWrapper>
  );
};

export default LabeledTextInput;
export { Props };
