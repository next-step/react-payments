import { cardCompanyList } from '@/pages/CardCreator/constants';
import { convertStringToNumber, isNil } from '@/utils';

const CARD_NUMBER_LENGTH = 8;
const MAX_NUMBER = 10 ** CARD_NUMBER_LENGTH - 1;
const DIVIDE_FACTOR = MAX_NUMBER / cardCompanyList.length - 1;

// 카드 번호에 의한 카드 업체 선별 비즈니스 로직
// 업체 갯수로 나누고 각 범위 index를 산출해서 선정
export function autoCompanyChecker(cardNumber?: string | null) {
  if (isNil(cardNumber)) return null;
  if (cardNumber.length !== CARD_NUMBER_LENGTH) return null;

  const numberedCardNumber = convertStringToNumber(cardNumber);
  if (isNil(numberedCardNumber)) return null;

  const index = Math.round(numberedCardNumber / DIVIDE_FACTOR);
  return cardCompanyList[changeNumberIntoLimit(index, cardCompanyList.length)];
}

function changeNumberIntoLimit(number: number, limit: number) {
  if (number >= limit) return limit - 1;
  return number;
}
