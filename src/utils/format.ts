export const remainOnlyNumber = (value: any) => {
  return value.replace(/[^0-9]/g, "");
};

export const blockInput = (value: string): string => {
  return value.replace(value, "");
};

// event.currentTarget.value = remainOnlyNumber(event.target.value);

// const eventValue = event.currentTarget.value;

// console.log(blockInvalidValue(eventValue, type), "block");

// event.currentTarget.value = blockInvalidValue(
//   event.currentTarget.value,
//   type
// );

// const date: Date = {
//   ...expiredDate,
//   [type]: event.currentTarget.value,
// };

// if (event.currentTarget.value.length > 1) {
//   if (type === ExpiredDateType.Month) {
//     itemsRef.current[1].focus();
//   }
// }

// setExpiredDate(date);

// ---

// const blockInvalidValue = (inputValue: string, type: string) => {
//   const value = Number(inputValue);

//   if (type === ExpiredDateType.Month) {
//     const isValidMonth = value !== 0 && value <= 12;
//     console.log(value);
//     console.log(isValidMonth);
//     if (!isValidMonth) {
//       return blockInput(value);
//     }
//   }

//   if (type === ExpiredDateType.Year) {
//     const isValidYear =
//       value !== 0 && !(String(value).length > 1 && value < 23);
//     if (!isValidYear) {
//       return blockInput(value);
//     }
//   }

//   return inputValue;
// };
