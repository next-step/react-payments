export const MONTH_VALIDATION_REGEX = /^(0[1-9]|1[0-2])$/;

export const isValidateMonthString = (month: string) => new RegExp(MONTH_VALIDATION_REGEX).test(month);
