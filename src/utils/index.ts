import { REGEX } from "@/constants/regex";
import { RULE } from "@/enum/rule";

export const addDash = (value: string, length: number) => {
  if (!value || value.length === 0) return;
  const cleanValue = value.replace(/[\s\W]/g, "");
  const returnValue = cleanValue
    .split("")
    .reduce((acc, currentValue, index) => {
      return acc + (index % length === 0 ? "-" : "") + currentValue;
    });
  return returnValue;
};

export const isInRange1To12 = (value: string) => {
  const isInRange = /^(1[0-2]|[1-9])$/.test(value);
  return isInRange;
};

export const formatCardExpireDay = (value: string) => {
  if (!value || value.length === 0) return "";
  const cleanValue = value.replace(/\D/g, "");
  let returnValue = cleanValue.split("").reduce((acc, currentValue, index) => {
    return acc + (index === 2 ? "/" : "") + currentValue;
  });

  if (returnValue.includes("/")) {
    if (!isInRange1To12(returnValue.split("/")[0])) {
      returnValue = "";
    }
  }

  return returnValue;
};

export const convertToAsterisks = (value: string) => {
  return "*".repeat(value.length);
};

export const ruleFn = (rule: keyof typeof RULE, value: string) => {
  switch (rule) {
    case "ONLY_HYPHEN_AND_NUMBER":
      return value.replace(REGEX.ONLY_HYPHEN_AND_NUMBER, "");
  }
};

export const addDashAndMask = (value: string, convertingIndex?: number) => {
  if (!value || value.length === 0) return;
  // 카드 번호의 각 자리를 배열로 변환합니다.
  const splitNumbers = value.split("");

  // 첫 8자리는 숫자를 그대로 두고, 나머지 8자리는 '*'로 대체합니다.
  const maskedNumbers = splitNumbers.map((num, index) =>
    index < (convertingIndex ?? 8) ? num : "✽"
  );

  // 배열을 문자열로 변환하면서 4자리마다 대시를 추가합니다.
  return maskedNumbers.reduce((acc, num, index) => {
    const needsDash = index > 0 && index % 4 === 0;
    return `${acc}${needsDash ? "-" : ""}${num}`;
  }, "");
};
