import { FormValues } from '@/type/formType';

export const sortByDateDescending = (cardList: FormValues[]) => {
  return cardList.sort(
    (cardA, cardB) => cardB.updatedAt.getTime() - cardA.updatedAt.getTime()
  );
};
