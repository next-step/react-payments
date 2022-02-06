import React from "react";

interface CardCompany {
  name: string;
  color: string;
}

interface CardNumbers {
  first: string;
  second: string;
  third: string;
  fourth: string;
}

interface Props {
  size?: "default" | "small" | "large";
  name?: string;
  expiration?: string;
  cardCompany?: CardCompany;
  cardNumbers?: CardNumbers;
}

const Card = ({
  size = "default",
  name = "NAME",
  expiration = "MM/YY",
  cardCompany = {
    name: "",
    color: "",
  },
  cardNumbers = {
    first: "",
    second: "",
    third: "",
    fourth: "",
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

  return (
    <div
      className={`${sizeTable[size]} px-4 py-2 rounded-xl bg-gray-350 ${cardCompany.color} shadow-lg font-mono tracking-wide`}
    >
      <span
        className={`${
          size === "large" ? "text-sm" : "text-xxs"
        } inline-block text-black-500`}
      >
        {cardCompany.name}
      </span>
      <div
        className={`w-1/5 h-1/5 ${
          size === "large" ? "mt-8" : "mt-4"
        } rounded-md bg-yellow-450`}
      ></div>
      <ul
        className={`flex mt-3 text-sm ${heightTable[size]} items-center mx-1`}
      >
        {Object.keys(cardNumbers).map((_, index) => {
          const currentKey = Object.keys(cardNumbers)[index];
          return (
            <li
              key={`cardNumber-${currentKey}`}
              className={`${
                size === "large" ? "text-lg mr-9" : "text-sm mr-3"
              } text-black-700 w-8`}
            >
              {/* <div>
                {index > 1
                  ? changeSecurityCode(cardNumbers[currentKey])
                  : cardNumbers[currentKey]}
              </div> */}
            </li>
          );
        })}
      </ul>
      <div
        className={`flex justify-between ${
          size === "large" ? "text-base" : "text-xs"
        } text-black-700 mt-1 mx-0.5`}
      >
        <div>{name}</div>
        <div>{expiration}</div>
      </div>
    </div>
  );
};

export default Card;
