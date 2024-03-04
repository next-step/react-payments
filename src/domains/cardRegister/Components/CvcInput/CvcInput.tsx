import { useEffect, useState } from "react";
import Box from "../../../../components/Box/Box";
import LabelBox from "../../../../components/LabelBox/LabelBox";
import LimitedLengthInput from "../../../../components/LimitedLengthInput/LimitedLengthInput";

interface CvcInputProps {
  value?: string;
  onChange?: (value: string) => void;
}

export default function CvcInput({ value, onChange }: CvcInputProps) {
  const [word, setWord] = useState(value || "");

  function changeWord(value: string) {
    setWord(value);
    onChange && onChange(value);
  }

  useEffect(() => {
    value && setWord(value);
  }, [value]);
  return (
    <LabelBox description="보안 코드(CVC/CVV)">
      <Box
        height="45px"
        width="100%"
        backgroundColor="#ECEBF1"
        contentPosition="centerMiddle"
      >
        <LimitedLengthInput
          title="CSC Code input"
          type="password"
          textAlign="center"
          colorTheme="primary"
          maxLength={3}
          value={value || word}
          onChange={changeWord}
        />
      </Box>
    </LabelBox>
  );
}
