export const formattedCardNumber = (value: string) => {
  return value.replace(/\D/g, "").replace(/(?<=^(.{4})+)(?=.+)/g, "-");
};

export const formattedCardExpireDate = (value: string) => {
  const expireDate = value.replace(/\D/g, "");
  return expireDate.replace(/(?<=^(.{2})+)(?=.+)/g, "/");
};
