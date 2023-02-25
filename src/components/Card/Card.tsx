import React from 'react';
import {
  addCardNumberDashes,
  addSeparator,
  replaceCardNumberToO,
} from '@/utils/formatter';
import {
  CardBottom,
  CardChip,
  CardContainer,
  CardMiddle,
  CardTop,
  CardText,
  CardBottomNumber,
  CardBottomInfo,
  CardName,
} from './Card.style';
import { CardField } from '@/types';
import { Colors } from '@/styles/colors';

type CardProps = {
  size: 'small' | 'big';
  cardColor: Colors;
  cardName?: string;
} & Omit<CardField, 'cardPassword' | 'cvc' | 'cardCompany'>;

// TODO: 카드 회사에 따라 카드 색상을 다르게 해야함
// case 1 : 카드 회사 이름의 key를 받고  ("KAKAO" 와 같은) constant 에서 정의한 카드 컬러와 name 을 보여준다.
// case 2 : name 과 color 를 바깥에서 받아서 보여준다.

// 1은 도메인에 종속된 컴포넌트를 만드는 것 같고
// 2는 도메인과 무관한 컴포넌트를 만드는 것 같습니다. 현재 요구사항에서는 카드 컴포넌트가 cardCompany 에 따라서만 그려지기 때문에
// 2번이 더 좋은 방법이라고 생각합니다. 어떻게 생각하시나요?
// 그렇지만 이벤트나, 유저의 상태에 따라서 카드의 색을 다르게 보여줘야하는 요구사항이 나올땐 이 컴포넌트를 쓰지못하는 단점이 있습니다.
// 그 상황을 대비하여 2번 방법을 사용하고, 1번 방법을 사용할 수 있도록 확장성을 고려하여 만들어야할 것 같습니다.
const Card = ({
  size,
  cardNumber,
  expirationMonth,
  expirationYear,
  cardName,
  cardColor,
  ownerName,
}: CardProps) => {
  return (
    <CardContainer cardColor={cardColor} size={size}>
      <CardTop>{cardName && <CardName>{cardName}</CardName>}</CardTop>
      <CardMiddle>
        <CardChip size={size} />
      </CardMiddle>
      <CardBottom>
        <CardBottomNumber>
          <CardText size={size}>
            {replaceCardNumberToO(addCardNumberDashes(cardNumber))}
          </CardText>
        </CardBottomNumber>
        <CardBottomInfo>
          <CardText size={size}>{ownerName}</CardText>
          <CardText size={size}>
            {addSeparator(expirationMonth + expirationYear)}
          </CardText>
        </CardBottomInfo>
      </CardBottom>
    </CardContainer>
  );
};

export default React.memo(Card);
