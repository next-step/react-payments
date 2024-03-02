import { REGEX } from "@/constants/regex";
import { RULE } from "@/enum/rule";

export const addDash = (value: string, length: number) => {
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

export const ruleFn = (rule: keyof typeof RULE, value: string) => {
  switch (rule) {
    case "ONLY_HYPHEN_AND_NUMBER":
      return value.replace(REGEX.ONLY_HYPHEN_AND_NUMBER, "");
  }
};
