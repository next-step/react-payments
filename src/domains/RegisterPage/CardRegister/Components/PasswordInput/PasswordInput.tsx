import { useEffect, useRef, useState } from "react";
import Box from "../../../../../components/Box/Box";
import LabelBox from "../../../../../components/LabelBox/LabelBox";
import LimitedLengthInput from "../../../../../components/LimitedLengthInput/LimitedLengthInput";
import { TwoPasswordDigits } from "../../types";
import styles from "./PasswordInput.module.css";

interface PasswordInputProps {
  value?: TwoPasswordDigits;
  onChange?: (value: TwoPasswordDigits) => void;
}

type PasswordInputType = "first" | "second";

export default function PasswordInput({ value, onChange }: PasswordInputProps) {
  const [password, setPassword] = useState<TwoPasswordDigits>(
    value || {
      first: "",
      second: "",
    }
  );

  const firstInputRef = useRef<HTMLInputElement>(null);
  const secondInputRef = useRef<HTMLInputElement>(null);

  const focus: Record<
    PasswordInputType,
    { next: () => void; focus: () => void }
  > = {
    first: {
      focus: () => {
        firstInputRef.current?.focus();
      },
      next: () => {
        secondInputRef.current?.focus();
      },
    },
    second: {
      next: () => {},
      focus: () => {
        secondInputRef.current?.focus();
      },
    },
  };

  function changePassword(key: PasswordInputType) {
    return function changePassword(value: string) {
      onChange && onChange({ ...password, [key]: value });
      setPassword((prev) => ({ ...prev, [key]: value }));
      value && focus[key].next();
    };
  }

  useEffect(() => {
    value && setPassword(value);
  }, [value]);

  useEffect(() => {
    const secondInput = secondInputRef.current;

    function backSpaceEventHandler(key: PasswordInputType) {
      return function moveToPreviousInput(event: KeyboardEvent) {
        const input = (event.currentTarget as HTMLInputElement).value as string;

        if (event.key === "Backspace" && input.length === 0) {
          focus[key].focus();
        }
      };
    }

    function addBackSpaceEvent() {
      const moveToFirstInput = backSpaceEventHandler("first");
      secondInput?.addEventListener("keyup", moveToFirstInput);

      return function removeBackSpaceEvent() {
        secondInput?.removeEventListener("keyup", moveToFirstInput);
      };
    }

    const removeBackSpaceEvent = addBackSpaceEvent();

    return () => {
      removeBackSpaceEvent();
    };
  }, []);

  return (
    <LabelBox description="카드 비밀번호">
      <div className={styles.input_container}>
        <Box
          height="45px"
          width="43px"
          backgroundColor="#ECEBF1"
          contentPosition="centerMiddle"
        >
          <LimitedLengthInput
            ref={firstInputRef}
            title="first word of password"
            type="password"
            textAlign="center"
            colorTheme="primary"
            maxLength={1}
            value={value?.first || password.first}
            onChange={changePassword("first")}
          />
        </Box>
        <Box
          height="45px"
          width="43px"
          backgroundColor="#ECEBF1"
          contentPosition="centerMiddle"
        >
          <LimitedLengthInput
            ref={secondInputRef}
            title="second word of password"
            type="password"
            textAlign="center"
            colorTheme="primary"
            maxLength={1}
            value={value?.second || password.second}
            onChange={changePassword("second")}
          />
        </Box>
        <div className={styles.postbox}>*</div>
        <div className={styles.postbox}>*</div>
      </div>
    </LabelBox>
  );
}
