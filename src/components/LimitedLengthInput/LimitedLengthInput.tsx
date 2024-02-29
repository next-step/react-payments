import { ChangeEvent, InputHTMLAttributes, useEffect, useState } from "react";
import stylesModule from "./LimitedLengthInput.module.css";
import { isOverLengthToLimitation } from "../../utils";

const styles = {
  color: {
    primary: stylesModule.primary,
    normal: stylesModule.normal,
  },
  textAlign: {
    center: stylesModule.text_center,
    left: stylesModule.text_left,
    right: stylesModule.text_right,
  },
};

interface LimitedLengthInputProps {
  /**
   * @description 인풋 입력 최대 길이를 조정합니다.
   */
  maxLength: number;

  /**
   * @description 인풋의 변화를 얻을 수 있는 콜백 함수 입니다.
   * @param value 현재 인풋에 입력중인 텍스트를 얻을 수 있습니다.
   * @param isUnderLimitation 현재 문자열의 길이가 limitedLength 에 도달했는지 알 수 있습니다. (ex. 도달했다면 true)
   */
  onChange?: (value: string, isUnderLimitation?: boolean) => void;

  /**
   * @description 화면에 표시되는 텍스트의 결과를 그대로 표시할 것인지에 대한 조정값입니다.
   */
  type?: "text" | "password";
  textAlign?: "left" | "center" | "right";

  colorTheme: "primary" | "normal";
  value: string;
}

function LimitedLengthInput({
  maxLength,
  onChange,
  type = "text",
  value,
  colorTheme = "normal",
  textAlign = "left",
}: Readonly<LimitedLengthInputProps>) {
  const [inputValue, setInputValue] = useState<string>("");
  const isMaxLength = inputValue.length === maxLength;

  const styleClasses = `${stylesModule.input} ${styles.color[colorTheme]} ${styles.textAlign[textAlign]}`;

  const inputProps: InputHTMLAttributes<HTMLInputElement> = {
    onChange: changeValue,
    value: value || inputValue,
    className: styleClasses,
    type,
    maxLength,
    title: "limited length input",
  };

  function changeValue(event: ChangeEvent<HTMLInputElement>) {
    const isPreviousMaxLength = isOverLengthToLimitation(
      event.target.value,
      maxLength
    );
    !value && !isPreviousMaxLength && setInputValue(event.target.value);
  }

  useEffect(() => {
    onChange && onChange(inputValue, isMaxLength);
  }, [inputValue, isMaxLength]);

  return <input {...inputProps} />;
}

export default LimitedLengthInput;
