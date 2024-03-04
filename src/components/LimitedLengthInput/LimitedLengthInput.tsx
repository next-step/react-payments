import {
  ChangeEvent,
  HTMLAttributes,
  InputHTMLAttributes,
  forwardRef,
  useEffect,
  useRef,
} from "react";
import { mergeRefs } from "react-merge-refs";
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

type LimitedLengthInputProps = Omit<
  HTMLAttributes<HTMLInputElement>,
  "onChange" | "value"
> & {
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

  isAbledFocusOnMount?: boolean;
  textAlign?: "left" | "center" | "right";

  colorTheme?: "primary" | "normal";
  placeholder?: string;
  value?: string;
};

const LimitedLengthInput = forwardRef<
  HTMLInputElement,
  Readonly<LimitedLengthInputProps>
>(function LimitedLengthInput(
  {
    maxLength,
    onChange,
    type = "text",
    value,
    colorTheme = "normal",
    textAlign = "left",
    placeholder,
    isAbledFocusOnMount = false,
    ...props
  },
  ref
) {
  const inputRef = useRef<HTMLInputElement>(null);
  const styleClasses = `${stylesModule.input} ${styles.color[colorTheme]} ${styles.textAlign[textAlign]}`;

  const inputProps: InputHTMLAttributes<HTMLInputElement> = {
    onChange: changeValue,
    value,
    className: styleClasses,
    type,
    maxLength,
    placeholder,
    title: "limited length input",
    onInput: (event) => {
      event.currentTarget.style.width =
        (event.currentTarget.value.length + 1) * 10 + "px";
    },
    ...props,
  };

  function changeValue(event: ChangeEvent<HTMLInputElement>) {
    const isMaxLength = event.target.value.length === maxLength;
    !isOverLengthToLimitation(event.target.value, maxLength) &&
      onChange &&
      onChange(event.target.value, isMaxLength);
  }

  useEffect(() => {
    if (inputRef.current && isAbledFocusOnMount) inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (inputRef.current && inputRef.current.placeholder) {
      inputRef.current.style.minWidth =
        (inputRef.current.placeholder.length + 1) * 14 + "px";
    }

    if (inputRef.current && inputRef.current.value) {
      inputRef.current.style.width =
        (inputRef.current.value.length + 1) * 10 + "px";
    }
  }, [placeholder]);

  return <input ref={mergeRefs([ref, inputRef])} {...inputProps} />;
});

export default LimitedLengthInput;
