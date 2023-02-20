export const formatCardNumber = (input: string) => {
  const regex = /[^0-9]/g;
  const cleanInput = input.replace(regex, '');

  const chunks = cleanInput.match(/.{1,4}/g);
  if (!chunks) {
    return cleanInput;
  }

  return chunks.join('-');
};

export const maskLastEight = (input = '') => {
  const regex = /[^0-9]/g;
  const cleanInput = input.replace(regex, '');

  if (input.length <= 9) {
    return input;
  }

  const chunks = cleanInput.match(/.{1,4}/g) || [];
  const lastChunk = chunks.splice(2, 3);
  const maskedLastChunk = [];
  for (const item of lastChunk) {
    maskedLastChunk.push(item.replace(/./g, '*'));
  }
  const formattedChunks = chunks.join('-');

  return (
    formattedChunks + (formattedChunks ? '-' : '') + maskedLastChunk.join('-')
  );
};
