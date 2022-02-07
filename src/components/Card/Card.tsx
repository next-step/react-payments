import React from "react";
import { CardCompany, CardExpiration, CardName, CardNumbers } from "types/common";

interface Props {
  size?: "default" | "small" | "large";
  name?: CardName;
  expiration?: CardExpiration;
  cardCompany?: CardCompany;
  cardNumbers?: CardNumbers;
}

const Card = ({
  size = "default",
  cardNumbers = {
    first: "",
    second: "",
    third: "",
    fourth: "",
  },
  expiration = {
    month: "MM",
    year: "YY",
  },
  name = "NAME",
  cardCompany = {
    name: "",
    color: "",
  },
}: Props) => {
  const sizeTable = {
    default: "w-213 h-133",
    small: "w-208 h-130",
    large: "w-293 h-183",
  };

  const heightTable = {
    default: "h-5",
    small: "h-5",
    large: "h-10",
  };

  const matchKey = (i: number): keyof CardNumbers => {
    return i === 0 ? "first" : i === 1 ? "second" : i === 2 ? "third" : "fourth";
  };

  const changeSecurityCode = (numbers: string) => {
    return "*".repeat(numbers.length);
  };

  return (
    <div
      className={`${sizeTable[size]} rounded-xl bg-gray-350 px-4 py-2 ${cardCompany.color} font-mono tracking-wide shadow-lg`}
    >
      <span className={`${size === "large" ? "text-sm" : "text-xxs"} inline-block text-black-500`}>
        {cardCompany.name}
      </span>
      <div className={`h-1/5 w-1/5 ${size === "large" ? "mt-8" : "mt-4"} rounded-md bg-yellow-450`}></div>
      <ul className={`mt-3 flex text-sm ${heightTable[size]} mx-1 items-center`}>
        {Object.keys(cardNumbers).map((_, i) => (
          <li key={i} className={`${size === "large" ? "mr-9 text-lg" : "mr-3 text-sm"} w-8 text-black-700`}>
            <div>{i > 1 ? changeSecurityCode(cardNumbers[matchKey(i)]) : cardNumbers[matchKey(i)]}</div>
          </li>
        ))}
      </ul>
      <div className={`flex justify-between ${size === "large" ? "text-base" : "text-xs"} mx-0.5 mt-1 text-black-700`}>
        <div>{name || "NAME"}</div>
        <div>
          {expiration.month || "MM"}/{expiration.year || "YY"}
        </div>
      </div>
    </div>
  );
};

export default Card;
