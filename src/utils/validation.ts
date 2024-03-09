export const Validation = {
  checkLength(field: string, length: number) {
    return (
      field.length === length && field.length > 0 && field.length < length + 1
    );
  },
};
