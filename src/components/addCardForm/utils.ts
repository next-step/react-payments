import { InputFieldName } from "@common/constants";
import { CardData } from "@common/defines";
import { FieldValues } from "@hooks/useForm";

export function getDisplayCardNumber(cardNumberList: string[]) {
  return cardNumberList
    .map((cardNumber, i) =>
      i >= 2 ? "*".repeat(cardNumber.length) : cardNumber
    )
    .filter((cardNumber) => cardNumber.length > 0)
    .join(" - ");
}

export function getDisplayCardExpiration(month: string, year: string) {
  return [month, year].filter((inputVal) => inputVal.length > 0).join(" / ");
}

export function createCardDataByFormData(formData: FieldValues): CardData {
  const cardNumberList: string[] = [
    formData[InputFieldName.CardNumber1] ?? "",
    formData[InputFieldName.CardNumber2] ?? "",
    formData[InputFieldName.CardNumber3] ?? "",
    formData[InputFieldName.CardNumber4] ?? "",
  ];
  const cardNumber = getDisplayCardNumber(cardNumberList);

  const month = formData[InputFieldName.MonthExpiration] ?? "";
  const year = formData[InputFieldName.YearExpiration] ?? "";
  const expired = getDisplayCardExpiration(month, year);
  const userName = formData[InputFieldName.OwnerName] ?? "";
  const id = Date.now();
  const createdAt = Date.now();

  return {
    id,
    cardNumber,
    expired,
    userName,
    createdAt,
  };
}
