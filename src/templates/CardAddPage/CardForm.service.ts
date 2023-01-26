import { camelize } from '@/utils';
import { 카드_기본번호 } from '@/constants';
//
import type { CardState } from '@/contexts';
import type { CardProps } from '@/components/Card/Card.types';
import {
  HandlerType,
  CardNumberChangeHandlerProps,
  CardExpirationChangeHandlerProps,
} from './CardAddPage.types';

class CardFormService {
  cardStateGenerator = (data: Record<string, string[]>, cardData: CardProps) => {
    const card = Object.entries(data).reduce((acc, [key, value]) => {
      const fieldName = camelize(key);
      if (fieldName === 'cardNumber') return { ...acc, [fieldName]: cardData.cardNumber };
      if (fieldName === 'cardExpiration') return { ...acc, [fieldName]: cardData.cardExpiration };
      return { ...acc, [fieldName]: value.join('') };
    }, {}) as CardState;

    return card;
  };

  cardNumberChangeHandler: CardNumberChangeHandlerProps = ({ sameNames, index }) => {
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

  cardExpirationChangeHandler: CardExpirationChangeHandlerProps = ({ sameNames, target }) => {
    const isValidLength = target.value.length === 2;
    const cardExpiration = isValidLength ? sameNames.map(({ value }) => value).join(' / ') : '';
    return { cardExpiration, isValidLength };
  };

  fieldCheckValidity: HandlerType<boolean> = ({ sameNames, index }) => {
    return sameNames.every((element, $index) => index < $index || element.checkValidity());
  };
}

export default new CardFormService();
