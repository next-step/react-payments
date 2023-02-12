import { camelize, flip, splitToCount } from '@/utils';
import { 카드_기본번호, 카드_넘버, 카드_보안코드, 카드_테마 } from '@/constants';
//
import type { RefObject, MutableRefObject } from 'react';
import type { CardProps } from 'components';
import type { CardState, CardThemeKeys, CardThemeTypes } from 'literal';
import type {
  HandlerType,
  CardNumberChangeHandlerProps,
  CardExpirationChangeHandlerProps,
} from './CardAddPage.types';

export const parseCardNumber = (ref: MutableRefObject<HTMLFormElement | null>) => {
  return new FormData(ref.current as HTMLFormElement)
    .getAll(카드_넘버)
    .map((item, index) => (index === 3 || index === 2 ? item.toString().replace(/./g, '*') : item))
    .join(' - ');
};

export const isValidFieldLength = (
  ref: MutableRefObject<HTMLInputElement | undefined>,
  name: string,
  callback?: () => void,
): ref is MutableRefObject<HTMLInputElement> => {
  const target = ref.current;
  if (!target) return false;

  callback && callback();

  switch (name) {
    case 카드_넘버: {
      return target.name === 카드_넘버 && target.value.length === 4;
    }
    case 카드_보안코드: {
      return target.name === 카드_보안코드 && target.value.length === 3;
    }
    default: {
      return false;
    }
  }
};

export const resetCardAreaValue = (ref: MutableRefObject<HTMLInputElement | undefined>) => {
  if (isValidFieldLength(ref, 카드_넘버)) ref.current.value = '';
  if (isValidFieldLength(ref, 카드_보안코드)) ref.current.value = '';
};

export const changeCardCompanyNumber = (
  company: CardThemeKeys,
  cardNumberRefs: Array<RefObject<HTMLInputElement>>,
): [string, string, CardThemeTypes] => {
  const theme = flip(카드_테마)[company];
  const [first, second] = splitToCount(flip(카드_기본번호)[theme]);

  cardNumberRefs.forEach((cardNumberInputRef, index) => {
    if (!cardNumberInputRef.current) return;
    let value = '';
    if (index === 0) value = first;
    if (index === 1) value = second;
    cardNumberInputRef.current.value = value;
  });

  return [first, second, theme];
};

export const numpadClickHandle = () => {};

export const cardStateGenerator = (data: Record<string, string[]>, cardData: CardProps) => {
  const card = Object.entries(data).reduce((acc, [key, value]) => {
    const fieldName = camelize(key);
    if (fieldName === 'cardNumber') return { ...acc, [fieldName]: cardData.cardNumber };
    if (fieldName === 'cardExpiration') return { ...acc, [fieldName]: cardData.cardExpiration };
    return { ...acc, [fieldName]: value.join('') };
  }, {}) as CardState;

  return card;
};

export const cardNumberChangeHandler: CardNumberChangeHandlerProps = ({ sameNames, index }) => {
  const cardNumberString = sameNames
    .map(({ value }) => value)
    .reduce<string[]>((cardNumber, current, $index) => {
      if ([0, 1].includes($index) && current) return [...cardNumber, current];
      if ([2, 3].includes($index) && current) return [...cardNumber, current.replace(/./g, '*')];
      return cardNumber;
    }, []);

  const theme = 카드_기본번호[cardNumberString.slice(0, 2).join('')];
  const isValidLength = sameNames[index].value.length === 4;

  return { theme, cardNumber: cardNumberString.join(' - '), isValidLength };
};

export const cardExpirationChangeHandler: CardExpirationChangeHandlerProps = ({
  sameNames,
  target,
}) => {
  const isValidLength = target.value.length === 2;
  const cardExpiration = isValidLength ? sameNames.map(({ value }) => value).join(' / ') : '';
  return { cardExpiration, isValidLength };
};

export const fieldCheckValidity: HandlerType<boolean> = ({ sameNames, index }) => {
  return sameNames.every((element, $index) => index < $index || element.checkValidity());
};
