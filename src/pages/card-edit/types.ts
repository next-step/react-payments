export type TCardEditProperties = {
  cardNumbers: string[];
  expiredMonth: string;
  expiredYear: string;
  owner: string;
  cvc: string;
  pin: string;
};

export type TCardEditSetters = {
  setCardNumbers: React.Dispatch<React.SetStateAction<string[]>>;
  setExpiredYear: React.Dispatch<React.SetStateAction<string>>;
  setExpiredMonth: React.Dispatch<React.SetStateAction<string>>;
  setOwner: React.Dispatch<React.SetStateAction<string>>;
  setCvc: React.Dispatch<React.SetStateAction<string>>;
  setPin: React.Dispatch<React.SetStateAction<string>>;
};

export type TCardEditRefs = {
  refs: { [key: string]: React.RefObject<HTMLInputElement | HTMLButtonElement> };
};
