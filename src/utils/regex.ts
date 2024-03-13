export const keepOnlyNumeric = (text: string) => {
  return text.replace(/\D/g, '');
};

export const keepOnlyAlphabetHangulAndSpace = (text: string) => {
  const pattern = /[^a-zA-Z가-힣\sㄱ-ㅎㅏ-ㅣ]/g;

  return text.replace(pattern, '');
};
