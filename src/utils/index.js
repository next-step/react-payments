export const validateNumber = (value) => value.toString().replace(/[^0-9]/gi, '');

export const replaceNumberToDot = (value) => value.toString().replace(/\d/gi, '•');
