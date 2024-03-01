export const Validation = {
  cardNumberLength(field: string) {
    return Validation.checkLength(field, 4);
  },

  expireDateMonth(field: string) {
    return (
      Validation.checkLength(field, 2) &&
      Number(field) > 0 &&
      Number(field) < 13
    );
  },

  expireDateYear(field: string) {
    return (
      Validation.checkLength(field, 2) &&
      Number(field) > 0 &&
      Number(field) < 32
    );
  },

  checkLength(field: string, length: number) {
    return (
      field.length === length && field.length > 0 && field.length < length + 1
    );
  },
};
