export const formatCardNumbers = (value) => {
  const regex = /[^0-9]/g;
  const cleanInput = value.replace(regex, '');

  const chunks = cleanInput.match(/.{1,4}/g);
  if (!chunks) {
    return cleanInput;
  }

  return chunks.join('-');
};
