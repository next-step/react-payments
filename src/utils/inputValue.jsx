const DIGIT_TYPE_INPUTS = ['cvc', 'password1', 'password2'];

const FORMATED_DIGIT_TYPE_INPUTS = ['number', 'expiry'];

export const cleanNaNValue = (value) => value.replace(/[^0-9]/g, '');

export const isDigitInputValue = (value, id) => {
  if (DIGIT_TYPE_INPUTS.includes(id) && value.match(/[^0-9]/)) return false;
  return true;
};

export const isInvalidExpiry = ({ expiry }) => {
  if (expiry.match(/^(0[1-9]|1[012])\/2[4-9]$/)) return false;
  return true;
};

export const formatInputValue = (value, id) => {
  if (!FORMATED_DIGIT_TYPE_INPUTS.includes(id)) return value;
  return getFormatedValue(id, value);
};

const formatNumberValue = (value) => {
  const cleanInput = cleanNaNValue(value);
  const chunks = cleanInput.match(/.{1,4}/g);
  if (!chunks) {
    return cleanInput;
  }
  return chunks.join('-');
};

const formatExpiryValue = (value) => {
  const cleanInput = cleanNaNValue(value);
  const chunks = cleanInput.match(/.{1,2}/g);
  if (!chunks) {
    return cleanInput;
  }
  return chunks.join('/');
};

const getFormatedValue = (type, value) => {
  switch (type) {
    case 'number':
      return formatNumberValue(value);
    case 'expiry':
      return formatExpiryValue(value);
    default:
      return false;
  }
};
