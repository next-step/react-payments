export const hasErrors = (errorFields: (string | undefined)[]) =>
  errorFields.some(Boolean);

export const allTouched = (touchedFields: (boolean | undefined)[]) =>
  touchedFields.every(Boolean);

export const findErrorMessage = (errorFields: (string | undefined)[]) =>
  errorFields.find(Boolean);
