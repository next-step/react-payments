import React from 'react';
import {
  CardBottom,
  CardBottomInfo,
  CardBox,
  CardMiddle,
  CardText,
  CardTop,
  EmptyCard,
  SmallCardChip,
} from './styles';

interface CardProps {
  type: 'add' | 'alias' | 'list';
}

const index = ({ type }: CardProps) => {
  return (
    <>
      <CardBox>
        <EmptyCard>
          <CardTop></CardTop>
          <CardMiddle>
            <SmallCardChip></SmallCardChip>
          </CardMiddle>
          <CardBottom>
            <CardBottomInfo>
              <CardText>NAME</CardText>
              <CardText>MM / YY</CardText>
            </CardBottomInfo>
          </CardBottom>
        </EmptyCard>
      </CardBox>
      {type === 'list' && <span>법인카드</span>}
    </>
  );
};

export default index;
