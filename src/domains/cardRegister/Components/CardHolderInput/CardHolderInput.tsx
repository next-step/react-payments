import { useEffect, useState } from "react";
import Box from "../../../../components/Box/Box";
import LabelBox from "../../../../components/LabelBox/LabelBox";
import LimitedLengthInput from "../../../../components/LimitedLengthInput/LimitedLengthInput";
import styles from "./CardHolderInput.module.css";

interface CardHolderInputProps {
  value?: string;
  onChange?: (value: string) => void;
}

export default function CardHolderInput({
  value,
  onChange,
}: CardHolderInputProps) {
  const [word, setWord] = useState(value || "");
  const limitationWordsLength = 30;
  const currentWordLength = word.length;

  function changeWord(value: string) {
    if (value.length <= limitationWordsLength) {
      setWord(value);
      onChange && onChange(value);
    }
  }

  useEffect(() => {
    value && setWord(value);
  }, [value]);

  return (
    <LabelBox description="카드 소유자 이름(선택)">
      <Box
        height="45px"
        width="100%"
        backgroundColor="#ECEBF1"
        contentPosition="middle"
      >
        <LimitedLengthInput
          title="CardHolder"
          type="text"
          colorTheme="primary"
          maxLength={30}
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          value={value || word}
          onChange={changeWord}
        />
      </Box>
      <div
        className={styles.word_count}
      >{`${currentWordLength}/${limitationWordsLength}`}</div>
    </LabelBox>
  );
}
