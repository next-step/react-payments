import { RefObject } from "react";

export const getOnlyNumInputAndFormatter = (input: string) => {
  return input?.replace(/[^0-9|/-]/g, "");
};

export const validateInput = ({
  ref,
  id,
  validationList,
}: {
  ref: RefObject<HTMLInputElement>;
  id: string;
  validationList: string[];
}) => {
  if (!ref.current?.value) {
    return "";
  }

  if (validationList.includes(id)) {
    return getOnlyNumInputAndFormatter(ref.current.value);
  }
  return ref.current.value;
};

export const formatNumber = ({
  input,
  nth,
  formatter = "-",
}: {
  input: string;
  nth: number;
  formatter?: string;
}): string => {
  const length = input.length;

  // 처음 이후로 formatter가 붙을 때
  if (input.includes(formatter) && (length + 1) % nth === 0) {
    return input.slice(0, length) + formatter + input.slice(length);
  }
  // 처음 formatter가 붙을 때
  if (!input.includes(formatter) && length % (nth - 1) === 0) {
    return input + formatter;
  }

  return input;
};

export const monthConverter = (input: string) => {
  if (parseInt(input) < 1) {
    return "1";
  } else if (parseInt(input) > 12) {
    return "12";
  }
  return input;
};

export const characterCount = (text: string): number => {
  if (!text) {
    return 0;
  }

  return text.trim().length;
};
