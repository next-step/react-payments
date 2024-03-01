export const formattedCardNumber = (value: string) => {
  const cardNumber = value.replace(/\D/g, "");
  return cardNumber.replace(/(?<=^(.{4})+)(?=.+)/g, "-");
};

export const formattedCardExpireDate = (value: string) => {
  const expireDate = value.replace(/\D/g, "");
  return expireDate.replace(/(?<=^(.{2})+)(?=.+)/g, "/");
};
